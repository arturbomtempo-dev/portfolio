import type { MissionFile } from '~/types/blackbox';

export interface VirtualEntry {
    name: string;
    path: string;
    isDirectory: boolean;
    isHidden: boolean;
}

export interface VirtualFileSystem {
    directories: Set<string>;
    files: Map<string, MissionFile>;
}

export interface GrepMatch {
    lineNumber: number;
    line: string;
}

const ROOT_PATH = '/';
const HOME_SHORTCUT = '~';

export function getParentPath(path: string) {
    if (path === ROOT_PATH) {
        return ROOT_PATH;
    }

    const parent = path.slice(0, path.lastIndexOf('/'));

    return parent || ROOT_PATH;
}

export function getBaseName(path: string) {
    return path === ROOT_PATH ? ROOT_PATH : path.slice(path.lastIndexOf('/') + 1);
}

function addDirectoryWithParents(directories: Set<string>, path: string) {
    let current = path;

    while (current !== ROOT_PATH) {
        directories.add(current);
        current = getParentPath(current);
    }

    directories.add(ROOT_PATH);
}

export function createVirtualFileSystem(
    directories: string[],
    files: MissionFile[]
): VirtualFileSystem {
    const directorySet = new Set<string>([ROOT_PATH]);

    directories.forEach((directory) => addDirectoryWithParents(directorySet, directory));
    files.forEach((file) => addDirectoryWithParents(directorySet, getParentPath(file.path)));

    return {
        directories: directorySet,
        files: new Map(files.map((file) => [file.path, file])),
    };
}

export function resolvePath(input: string, cwd: string, homeDirectory: string) {
    const trimmedInput = input.trim();

    if (!trimmedInput || trimmedInput === HOME_SHORTCUT) {
        return homeDirectory;
    }

    const expandedInput = trimmedInput.startsWith(`${HOME_SHORTCUT}/`)
        ? `${homeDirectory}${trimmedInput.slice(1)}`
        : trimmedInput;
    const basePath = expandedInput.startsWith('/') ? '' : cwd;
    const segments: string[] = [];

    `${basePath}/${expandedInput}`.split('/').forEach((segment) => {
        if (!segment || segment === '.') {
            return;
        }

        if (segment === '..') {
            segments.pop();
        } else {
            segments.push(segment);
        }
    });

    return `/${segments.join('/')}`;
}

export function isDirectory(fileSystem: VirtualFileSystem, path: string) {
    return fileSystem.directories.has(path);
}

export function isFile(fileSystem: VirtualFileSystem, path: string) {
    return fileSystem.files.has(path);
}

function compareEntries(first: VirtualEntry, second: VirtualEntry) {
    if (first.isDirectory !== second.isDirectory) {
        return first.isDirectory ? -1 : 1;
    }

    return first.name.localeCompare(second.name);
}

export function listDirectory(
    fileSystem: VirtualFileSystem,
    path: string,
    shouldIncludeHidden: boolean
) {
    const directories: VirtualEntry[] = [...fileSystem.directories]
        .filter((directory) => directory !== ROOT_PATH && getParentPath(directory) === path)
        .map((directory) => ({
            name: getBaseName(directory),
            path: directory,
            isDirectory: true,
            isHidden: getBaseName(directory).startsWith('.'),
        }));
    const files: VirtualEntry[] = [...fileSystem.files.values()]
        .filter((file) => getParentPath(file.path) === path)
        .map((file) => ({
            name: getBaseName(file.path),
            path: file.path,
            isDirectory: false,
            isHidden: Boolean(file.isHidden),
        }));

    return [...directories, ...files]
        .filter((entry) => shouldIncludeHidden || !entry.isHidden)
        .sort(compareEntries);
}

function escapeRegExp(text: string) {
    return text.replace(/[.+^${}()|[\]\\]/g, '\\$&');
}

export function globToRegExp(pattern: string) {
    const source = escapeRegExp(pattern).replace(/\*/g, '.*').replace(/\?/g, '.');

    return new RegExp(`^${source}$`, 'i');
}

function isInside(path: string, directory: string) {
    return directory === ROOT_PATH ? true : path === directory || path.startsWith(`${directory}/`);
}

export function findPaths(fileSystem: VirtualFileSystem, startPath: string, namePattern?: string) {
    const matcher = namePattern ? globToRegExp(namePattern) : undefined;
    const allPaths = [...fileSystem.directories, ...fileSystem.files.keys()];

    return allPaths
        .filter((path) => isInside(path, startPath))
        .filter((path) => !matcher || matcher.test(getBaseName(path)))
        .sort();
}

export function listFilesInside(fileSystem: VirtualFileSystem, directory: string) {
    return [...fileSystem.files.keys()].filter((path) => isInside(path, directory)).sort();
}

export function grepContent(content: string, pattern: string, isCaseInsensitive: boolean) {
    const needle = isCaseInsensitive ? pattern.toLowerCase() : pattern;

    return content.split('\n').reduce<GrepMatch[]>((matches, line, index) => {
        const haystack = isCaseInsensitive ? line.toLowerCase() : line;

        if (haystack.includes(needle)) {
            matches.push({ lineNumber: index + 1, line });
        }

        return matches;
    }, []);
}

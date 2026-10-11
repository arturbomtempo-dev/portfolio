import type { MissionDefinition } from '~/types/blackbox';
import {
    createVirtualFileSystem,
    getParentPath,
    isDirectory,
    listDirectory,
    resolvePath,
} from './virtualFileSystem';

function getCommonPrefix(values: string[]) {
    return values.reduce((prefix, value) => {
        let length = 0;

        while (length < prefix.length && prefix[length] === value[length]) {
            length += 1;
        }

        return prefix.slice(0, length);
    });
}

function completePath(token: string, cwd: string, mission: MissionDefinition) {
    const fileSystem = createVirtualFileSystem(mission.directories, mission.files);
    const separatorIndex = token.lastIndexOf('/');
    const directoryPart = separatorIndex === -1 ? '' : token.slice(0, separatorIndex + 1);
    const namePart = token.slice(separatorIndex + 1);
    const directory = directoryPart ? resolvePath(directoryPart, cwd, mission.homeDirectory) : cwd;

    if (!isDirectory(fileSystem, directory)) {
        return undefined;
    }

    const candidates = listDirectory(fileSystem, directory, namePart.startsWith('.'))
        .filter((entry) => entry.name.startsWith(namePart))
        .map((entry) => `${directoryPart}${entry.name}${entry.isDirectory ? '/' : ''}`);

    if (!candidates.length) {
        return undefined;
    }

    return candidates.length === 1 ? candidates[0] : getCommonPrefix(candidates);
}

export function completeCommandLine(
    input: string,
    cwd: string,
    mission: MissionDefinition,
    commands: readonly string[]
) {
    const lastSpaceIndex = input.lastIndexOf(' ');
    const head = input.slice(0, lastSpaceIndex + 1);
    const token = input.slice(lastSpaceIndex + 1);

    if (lastSpaceIndex === -1) {
        const matches = commands.filter((command) => command.startsWith(token));

        if (!matches.length) {
            return input;
        }

        return matches.length === 1 ? `${matches[0]} ` : getCommonPrefix(matches);
    }

    const completion = completePath(token, cwd, mission);

    return completion ? `${head}${completion}` : input;
}

export function formatPromptPath(cwd: string, homeDirectory: string) {
    if (cwd === homeDirectory) {
        return '~';
    }

    return cwd.startsWith(`${homeDirectory}/`) ? `~${cwd.slice(homeDirectory.length)}` : cwd;
}

export function isPathInsideMission(path: string, mission: MissionDefinition) {
    const fileSystem = createVirtualFileSystem(mission.directories, mission.files);

    return isDirectory(fileSystem, path) || isDirectory(fileSystem, getParentPath(path));
}

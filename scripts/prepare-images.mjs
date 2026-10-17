import { existsSync } from 'node:fs';
import { mkdir, readdir, rm } from 'node:fs/promises';
import { extname, join, parse } from 'node:path';
import sharp from 'sharp';
import { framePhoneScreenshot } from './phoneFrame.mjs';

const IMAGES_DIRECTORY = 'public/images';
const PROJECT_IMAGES_DIRECTORY = join(IMAGES_DIRECTORY, 'projects');
const PROJECT_OPEN_GRAPH_DIRECTORY = 'public/og/projects';
const CONVERTIBLE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.avif', '.tiff']);
const WEBP_QUALITY = 88;
const PHONE_SCREENSHOT_PATTERN = /\.phone\.(png|jpe?g|webp)$/i;
const OPEN_GRAPH_SIZE = { width: 1200, height: 630 };
const OPEN_GRAPH_QUALITY = 85;
const DEFAULT_MAX_WIDTH_IN_PX = 1920;
const MAX_WIDTH_BY_FOLDER_IN_PX = {
    profile: 512,
    testimonials: 256,
    organizations: 160,
    contents: 1280,
    projects: 1920,
    talks: 2400,
};

async function convertPhoneScreenshot(directory, file) {
    const source = join(directory, file);
    const target = join(directory, `${file.replace(PHONE_SCREENSHOT_PATTERN, '')}.webp`);

    await sharp(await framePhoneScreenshot(source))
        .webp({ quality: WEBP_QUALITY, alphaQuality: 100, effort: 6 })
        .toFile(target);
    await rm(source);
    console.log(`framed ${source} -> ${target}`);
}

async function convertImagesToWebp(directory, maxWidth) {
    const entries = await readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
        const source = join(directory, entry.name);

        if (entry.isDirectory()) {
            await convertImagesToWebp(source, maxWidth);
            continue;
        }

        if (PHONE_SCREENSHOT_PATTERN.test(entry.name)) {
            await convertPhoneScreenshot(directory, entry.name);
            continue;
        }

        if (!CONVERTIBLE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
            continue;
        }

        const target = join(directory, `${parse(entry.name).name}.webp`);

        await sharp(source)
            .rotate()
            .resize({ width: maxWidth, withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY, effort: 6 })
            .toFile(target);
        await rm(source);
        console.log(`converted ${source} -> ${target}`);
    }
}

async function createMissingProjectOpenGraphImages() {
    await mkdir(PROJECT_OPEN_GRAPH_DIRECTORY, { recursive: true });
    const projectCovers = (await readdir(PROJECT_IMAGES_DIRECTORY, { withFileTypes: true })).filter(
        (entry) => entry.isFile() && extname(entry.name) === '.webp'
    );

    for (const cover of projectCovers) {
        const target = join(PROJECT_OPEN_GRAPH_DIRECTORY, `${parse(cover.name).name}.jpg`);

        if (existsSync(target)) {
            continue;
        }

        await sharp(join(PROJECT_IMAGES_DIRECTORY, cover.name))
            .resize({ ...OPEN_GRAPH_SIZE, fit: 'cover', position: 'top' })
            .jpeg({ quality: OPEN_GRAPH_QUALITY, mozjpeg: true })
            .toFile(target);
        console.log(`created ${target}`);
    }
}

const folders = (await readdir(IMAGES_DIRECTORY, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

for (const folder of folders) {
    await convertImagesToWebp(
        join(IMAGES_DIRECTORY, folder),
        MAX_WIDTH_BY_FOLDER_IN_PX[folder] ?? DEFAULT_MAX_WIDTH_IN_PX
    );
}

await createMissingProjectOpenGraphImages();

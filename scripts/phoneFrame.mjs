import sharp from 'sharp';

const SCREEN_WIDTH_IN_PX = 1206;
const SCREEN_CORNER_RADIUS_IN_PX = 168;
const BEZEL_IN_PX = 33;
const EDGE_IN_PX = 15;
const BUTTON_DEPTH_IN_PX = 7;
const ISLAND_WIDTH_IN_PX = 378;
const ISLAND_HEIGHT_IN_PX = 111;
const ISLAND_TOP_IN_PX = 33;
const ISLAND_LENS_RADIUS_IN_PX = 17;

const LEFT_BUTTONS = [
    { top: 0.122, height: 0.044 },
    { top: 0.205, height: 0.07 },
    { top: 0.29, height: 0.07 },
];
const RIGHT_BUTTONS = [
    { top: 0.225, height: 0.105 },
    { top: 0.555, height: 0.075 },
];

const FRAME_OFFSET_IN_PX = BEZEL_IN_PX + EDGE_IN_PX;
const BODY_CORNER_RADIUS_IN_PX = SCREEN_CORNER_RADIUS_IN_PX + FRAME_OFFSET_IN_PX;

function createButtonRects(buttons, x, bodyHeight) {
    return buttons
        .map(
            (button) =>
                `<rect x="${x}" y="${Math.round(button.top * bodyHeight)}" width="${BUTTON_DEPTH_IN_PX + 8}" height="${Math.round(button.height * bodyHeight)}" rx="5" fill="url(#button)"/>`
        )
        .join('');
}

function createBodySvg(width, height) {
    const bodyWidth = width - BUTTON_DEPTH_IN_PX * 2;
    const rightButtonX = width - BUTTON_DEPTH_IN_PX - 8;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <defs>
            <linearGradient id="edge" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stop-color="#25272b"/>
                <stop offset="0.04" stop-color="#5a5e65"/>
                <stop offset="0.5" stop-color="#3b3e44"/>
                <stop offset="0.96" stop-color="#5a5e65"/>
                <stop offset="1" stop-color="#25272b"/>
            </linearGradient>
            <linearGradient id="button" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stop-color="#2b2e33"/>
                <stop offset="0.5" stop-color="#55595f"/>
                <stop offset="1" stop-color="#2b2e33"/>
            </linearGradient>
        </defs>
        ${createButtonRects(LEFT_BUTTONS, 0, height)}
        ${createButtonRects(RIGHT_BUTTONS, rightButtonX, height)}
        <rect x="${BUTTON_DEPTH_IN_PX}" y="0" width="${bodyWidth}" height="${height}" rx="${BODY_CORNER_RADIUS_IN_PX}" fill="url(#edge)"/>
        <rect x="${BUTTON_DEPTH_IN_PX + 2}" y="2" width="${bodyWidth - 4}" height="${height - 4}" rx="${BODY_CORNER_RADIUS_IN_PX - 2}" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
        <rect x="${BUTTON_DEPTH_IN_PX + EDGE_IN_PX}" y="${EDGE_IN_PX}" width="${bodyWidth - EDGE_IN_PX * 2}" height="${height - EDGE_IN_PX * 2}" rx="${BODY_CORNER_RADIUS_IN_PX - EDGE_IN_PX}" fill="#040404"/>
    </svg>`;
}

function createIslandSvg(width, height) {
    const islandX = (width - ISLAND_WIDTH_IN_PX) / 2;
    const islandY = FRAME_OFFSET_IN_PX + ISLAND_TOP_IN_PX;
    const lensX = islandX + ISLAND_WIDTH_IN_PX - ISLAND_HEIGHT_IN_PX / 2;
    const lensY = islandY + ISLAND_HEIGHT_IN_PX / 2;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect x="${islandX}" y="${islandY}" width="${ISLAND_WIDTH_IN_PX}" height="${ISLAND_HEIGHT_IN_PX}" rx="${ISLAND_HEIGHT_IN_PX / 2}" fill="#000000"/>
        <circle cx="${lensX}" cy="${lensY}" r="${ISLAND_LENS_RADIUS_IN_PX}" fill="#0d1018"/>
        <circle cx="${lensX}" cy="${lensY}" r="${ISLAND_LENS_RADIUS_IN_PX * 0.45}" fill="#1b2233"/>
        <circle cx="${lensX - 5}" cy="${lensY - 5}" r="3" fill="#ffffff" fill-opacity="0.25"/>
    </svg>`;
}

function createScreenMaskSvg(width, height) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="${width}" height="${height}" rx="${SCREEN_CORNER_RADIUS_IN_PX}" fill="#ffffff"/>
    </svg>`;
}

export async function framePhoneScreenshot(source) {
    const screen = sharp(source).resize({ width: SCREEN_WIDTH_IN_PX });
    const { data, info } = await screen.png().toBuffer({ resolveWithObject: true });
    const roundedScreen = await sharp(data)
        .composite([
            {
                input: Buffer.from(createScreenMaskSvg(info.width, info.height)),
                blend: 'dest-in',
            },
        ])
        .png()
        .toBuffer();

    const width = info.width + FRAME_OFFSET_IN_PX * 2 + BUTTON_DEPTH_IN_PX * 2;
    const height = info.height + FRAME_OFFSET_IN_PX * 2;

    return sharp(Buffer.from(createBodySvg(width, height)))
        .composite([
            {
                input: roundedScreen,
                left: BUTTON_DEPTH_IN_PX + FRAME_OFFSET_IN_PX,
                top: FRAME_OFFSET_IN_PX,
            },
            { input: Buffer.from(createIslandSvg(width, height)) },
        ])
        .png()
        .toBuffer();
}

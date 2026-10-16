export type MosaicShape = 'full' | 'hero' | 'half' | 'tall' | 'wide' | 'square';

export type PhotoOrientation = 'portrait' | 'landscape' | 'square';

export interface MosaicPhotoSize {
    width: number;
    height: number;
}

export interface MosaicCell {
    photoIndex: number;
    shape: MosaicShape;
}

export interface MosaicLayout {
    cells: MosaicCell[];
    hiddenCount: number;
}

export const MOSAIC_MAX_VISIBLE_PHOTOS = 9;

const SQUARE_RATIO_TOLERANCE = 0.12;
const FIRST_GROUP_SIZE = 4;
const ROW_SIZE = 3;

const SHAPES_BY_SMALL_COUNT: Record<number, MosaicShape[]> = {
    1: ['full'],
    2: ['half', 'half'],
    3: ['hero', 'wide', 'wide'],
    4: ['hero', 'tall', 'square', 'square'],
    5: ['hero', 'square', 'square', 'square', 'square'],
};

const PREFERRED_ORIENTATION: Partial<Record<MosaicShape, PhotoOrientation>> = {
    tall: 'portrait',
    wide: 'landscape',
    square: 'square',
};

export function getPhotoOrientation({ width, height }: MosaicPhotoSize): PhotoOrientation {
    const ratio = width / height;

    if (Math.abs(ratio - 1) <= SQUARE_RATIO_TOLERANCE) {
        return 'square';
    }

    return ratio > 1 ? 'landscape' : 'portrait';
}

function getRowShapes(rowSize: number, rowIndex: number): MosaicShape[] {
    if (rowSize === 1) {
        return ['full'];
    }

    if (rowSize === 2) {
        return ['wide', 'wide'];
    }

    return rowIndex % 2 === 0 ? ['wide', 'square', 'square'] : ['square', 'square', 'wide'];
}

function getShapes(count: number): MosaicShape[] {
    const smallLayout = SHAPES_BY_SMALL_COUNT[count];

    if (smallLayout) {
        return smallLayout;
    }

    const shapes: MosaicShape[] = ['hero', 'tall', 'square', 'square'];
    let remaining = count - FIRST_GROUP_SIZE;
    let rowIndex = 0;

    while (remaining > 0) {
        const rowSize = Math.min(ROW_SIZE, remaining);

        shapes.push(...getRowShapes(rowSize, rowIndex));
        remaining -= rowSize;
        rowIndex += 1;
    }

    return shapes;
}

function pickPhotoForShape(
    shape: MosaicShape,
    availableIndexes: number[],
    photos: MosaicPhotoSize[]
) {
    const preferred = PREFERRED_ORIENTATION[shape];
    const matchingIndex = preferred
        ? availableIndexes.find((index) => {
              const photo = photos[index];

              return photo !== undefined && getPhotoOrientation(photo) === preferred;
          })
        : undefined;

    return matchingIndex ?? availableIndexes[0];
}

export function createMosaicLayout(
    photos: MosaicPhotoSize[],
    maxVisible = MOSAIC_MAX_VISIBLE_PHOTOS
): MosaicLayout {
    const visibleCount = Math.min(photos.length, maxVisible);
    const shapes = getShapes(visibleCount);
    const availableIndexes = photos.map((_, index) => index).slice(0, photos.length);
    const cells: MosaicCell[] = [];

    shapes.forEach((shape, position) => {
        const photoIndex =
            position === 0
                ? availableIndexes[0]
                : pickPhotoForShape(shape, availableIndexes, photos);

        if (photoIndex === undefined) {
            return;
        }

        cells.push({ photoIndex, shape });
        availableIndexes.splice(availableIndexes.indexOf(photoIndex), 1);
    });

    return { cells, hiddenCount: photos.length - cells.length };
}

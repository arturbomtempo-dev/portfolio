import { describe, expect, it } from 'vitest';
import {
    createMosaicLayout,
    getPhotoOrientation,
    MOSAIC_MAX_VISIBLE_PHOTOS,
    type MosaicPhotoSize,
    type MosaicShape,
} from '~/utils/photoMosaic';

const LANDSCAPE: MosaicPhotoSize = { width: 1600, height: 1000 };
const PORTRAIT: MosaicPhotoSize = { width: 1000, height: 1500 };
const SQUARE: MosaicPhotoSize = { width: 1200, height: 1200 };

const SPANS: Record<MosaicShape, { columns: (gridColumns: number) => number; rows: number }> = {
    full: { columns: (gridColumns) => gridColumns, rows: 2 },
    hero: { columns: () => 2, rows: 2 },
    half: { columns: () => 2, rows: 2 },
    tall: { columns: () => 1, rows: 2 },
    wide: { columns: () => 2, rows: 1 },
    square: { columns: () => 1, rows: 1 },
};

function packGrid(shapes: MosaicShape[], gridColumns: number) {
    const occupied: boolean[][] = [];
    const isFree = (row: number, column: number) => !occupied[row]?.[column];

    shapes.forEach((shape) => {
        const columns = Math.min(SPANS[shape].columns(gridColumns), gridColumns);
        const rows = SPANS[shape].rows;

        for (let row = 0; ; row += 1) {
            for (let column = 0; column + columns <= gridColumns; column += 1) {
                const fits = Array.from({ length: rows }).every((_, rowOffset) =>
                    Array.from({ length: columns }).every((__, columnOffset) =>
                        isFree(row + rowOffset, column + columnOffset)
                    )
                );

                if (fits) {
                    for (let rowOffset = 0; rowOffset < rows; rowOffset += 1) {
                        occupied[row + rowOffset] ??= [];
                        for (let columnOffset = 0; columnOffset < columns; columnOffset += 1) {
                            occupied[row + rowOffset]![column + columnOffset] = true;
                        }
                    }
                    return;
                }
            }
        }
    });

    return occupied;
}

function countHoles(occupied: boolean[][], gridColumns: number) {
    return occupied.reduce(
        (holes, row) =>
            holes + Array.from({ length: gridColumns }).filter((_, column) => !row[column]).length,
        0
    );
}

function createPhotos(count: number) {
    const sizes = [LANDSCAPE, PORTRAIT, SQUARE];

    return Array.from({ length: count }, (_, index) => sizes[index % sizes.length]!);
}

describe('photo mosaic layout', () => {
    it.each(Array.from({ length: 16 }, (_, index) => index + 1))(
        'fills the desktop and mobile grids without holes for %i photos',
        (count) => {
            const shapes = createMosaicLayout(createPhotos(count)).cells.map((cell) => cell.shape);

            expect(countHoles(packGrid(shapes, 4), 4)).toBe(0);
            expect(countHoles(packGrid(shapes, 2), 2)).toBe(0);
        }
    );

    it('shows every photo once, starting with the first one', () => {
        const layout = createMosaicLayout(createPhotos(7));
        const indexes = layout.cells.map((cell) => cell.photoIndex);

        expect(indexes[0]).toBe(0);
        expect([...indexes].sort((first, second) => first - second)).toEqual([0, 1, 2, 3, 4, 5, 6]);
        expect(layout.hiddenCount).toBe(0);
    });

    it('limits the visible photos and reports the hidden ones', () => {
        const layout = createMosaicLayout(createPhotos(14));

        expect(layout.cells).toHaveLength(MOSAIC_MAX_VISIBLE_PHOTOS);
        expect(layout.hiddenCount).toBe(14 - MOSAIC_MAX_VISIBLE_PHOTOS);
    });

    it('puts portrait photos in tall cells and landscape photos in wide cells', () => {
        const photos = [SQUARE, LANDSCAPE, SQUARE, PORTRAIT, SQUARE, LANDSCAPE];
        const layout = createMosaicLayout(photos);
        const tallCell = layout.cells.find((cell) => cell.shape === 'tall');
        const wideCell = layout.cells.find((cell) => cell.shape === 'wide');

        expect(getPhotoOrientation(photos[tallCell!.photoIndex]!)).toBe('portrait');
        expect(getPhotoOrientation(photos[wideCell!.photoIndex]!)).toBe('landscape');
    });
});

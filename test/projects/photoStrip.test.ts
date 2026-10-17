import { describe, expect, it } from 'vitest';
import { createPhotoStrip } from '~/utils/photoStrip';

const MAX_TILE_COUNT = 5;

function getPhotoIndexes(photoCount: number) {
    return createPhotoStrip(photoCount, MAX_TILE_COUNT).map((tile) => tile.photoIndex);
}

function getOverflowCounts(photoCount: number) {
    return createPhotoStrip(photoCount, MAX_TILE_COUNT).map((tile) => tile.overflowCount);
}

describe('createPhotoStrip', () => {
    it('creates no tiles without photos', () => {
        expect(createPhotoStrip(0, MAX_TILE_COUNT)).toEqual([]);
    });

    it('lists every photo, starting with the cover, while they fit', () => {
        expect(getPhotoIndexes(2)).toEqual([0, 1]);
        expect(getPhotoIndexes(5)).toEqual([0, 1, 2, 3, 4]);
        expect(getOverflowCounts(5)).toEqual([0, 0, 0, 0, 0]);
    });

    it('turns the last tile into a counter of the photos from there on', () => {
        expect(getPhotoIndexes(6)).toEqual([0, 1, 2, 3, 4]);
        expect(getOverflowCounts(6)).toEqual([0, 0, 0, 0, 2]);
        expect(getOverflowCounts(12)).toEqual([0, 0, 0, 0, 8]);
    });

    it('accounts for every photo exactly once', () => {
        for (let photoCount = 1; photoCount <= 20; photoCount += 1) {
            const lastTile = createPhotoStrip(photoCount, MAX_TILE_COUNT).at(-1);

            expect(lastTile).toBeDefined();
            expect((lastTile?.photoIndex ?? 0) + Math.max(lastTile?.overflowCount ?? 0, 1)).toBe(
                photoCount
            );
        }
    });
});

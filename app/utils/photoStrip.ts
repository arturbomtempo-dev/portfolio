export interface PhotoStripTile {
    photoIndex: number;
    overflowCount: number;
}

const MIN_OVERFLOW_COUNT = 2;

export function createPhotoStrip(photoCount: number, maxTileCount: number): PhotoStripTile[] {
    const tileCount = Math.min(Math.max(photoCount, 0), maxTileCount);

    return Array.from({ length: tileCount }, (_, photoIndex) => {
        const isLastTile = photoIndex === tileCount - 1;
        const remainingCount = photoCount - photoIndex;

        return {
            photoIndex,
            overflowCount: isLastTile && remainingCount >= MIN_OVERFLOW_COUNT ? remainingCount : 0,
        };
    });
}

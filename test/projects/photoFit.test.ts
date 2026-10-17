import { describe, expect, it } from 'vitest';
import type { Photo } from '~/types/photo';
import { getPhotoFit } from '~/utils/photoFit';

function createPhoto(width: number, height: number): Photo {
    return { src: '/images/projects/example/01.webp', alt: '', width, height };
}

describe('getPhotoFit', () => {
    it('fills the frame with wide desktop screenshots', () => {
        expect(getPhotoFit(createPhoto(1920, 1080))).toBe('cover');
        expect(getPhotoFit(createPhoto(1920, 880))).toBe('cover');
    });

    it('shows phone screenshots, squares and tall photos in full', () => {
        expect(getPhotoFit(createPhoto(1170, 2532))).toBe('contain');
        expect(getPhotoFit(createPhoto(1200, 1200))).toBe('contain');
        expect(getPhotoFit(createPhoto(1281, 930))).toBe('contain');
    });
});

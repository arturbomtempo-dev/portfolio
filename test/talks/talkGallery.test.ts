import { describe, expect, it } from 'vitest';
import type { Photo } from '~/types/photo';
import type { Talk } from '~/types/talk';
import { hasPhotoGallery } from '~/utils/talkGallery';

function createPhoto(index: number): Photo {
    return { src: `/images/talks/example/0${index}.webp`, alt: '', width: 1600, height: 900 };
}

function createTalk(photoCount: number): Talk {
    return {
        id: 'example',
        type: 'talk',
        title: 'Example',
        location: 'Online',
        date: '2025-01-01',
        description: '',
        fullDescription: '',
        topics: [],
        image: '/images/talks/example/cover.webp',
        gallery: Array.from({ length: photoCount }, (_, index) => createPhoto(index + 1)),
    };
}

describe('hasPhotoGallery', () => {
    it('hides the gallery when the talk has no photos', () => {
        expect(hasPhotoGallery(createTalk(0))).toBe(false);
    });

    it('hides the gallery when the only photo is the cover', () => {
        expect(hasPhotoGallery(createTalk(1))).toBe(false);
    });

    it('shows the gallery from two photos on', () => {
        expect(hasPhotoGallery(createTalk(2))).toBe(true);
    });
});

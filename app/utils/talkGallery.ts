import type { Talk } from '~/types/talk';

const MIN_PHOTOS_FOR_GALLERY = 2;

export function hasPhotoGallery(talk: Talk) {
    return talk.gallery.length >= MIN_PHOTOS_FOR_GALLERY;
}

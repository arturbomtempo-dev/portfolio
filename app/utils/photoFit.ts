import type { Photo } from '~/types/photo';

export type PhotoFit = 'cover' | 'contain';

const MIN_ASPECT_RATIO_TO_COVER = 1.5;

export function getPhotoFit(photo: Photo): PhotoFit {
    return photo.width / photo.height >= MIN_ASPECT_RATIO_TO_COVER ? 'cover' : 'contain';
}

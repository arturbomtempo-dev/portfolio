import type { Photo } from '~/types/photo';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    additionalPhotos?: Photo[];
    cardTechs: string[];
    fullDescription: string;
    allTechs: string[];
    liveUrl?: string;
    githubUrl?: string;
}

import type { Photo } from '~/types/photo';

export type TalkType = 'talk' | 'workshop' | 'course';

export type TalkFilter = 'all' | TalkType;

export interface Talk {
    id: string;
    type: TalkType;
    title: string;
    eventName?: string;
    location: string;
    date: string;
    endDate?: string;
    description: string;
    fullDescription: string;
    topics: string[];
    image: string;
    gallery: Photo[];
}

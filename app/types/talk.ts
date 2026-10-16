export type TalkType = 'talk' | 'workshop' | 'course';

export type TalkFilter = 'all' | TalkType;

export interface TalkPhoto {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface Talk {
    id: string;
    type: TalkType;
    title: string;
    eventName: string;
    location: string;
    date: string;
    description: string;
    fullDescription: string;
    topics: string[];
    image: string;
    gallery: TalkPhoto[];
    eventUrl?: string;
    slidesUrl?: string;
    recordingUrl?: string;
    repositoryUrl?: string;
}

export type EventType = 'talk' | 'workshop' | 'course';

export type EventFilter = 'all' | EventType;

export interface EventPhoto {
    src: string;
    alt: string;
}

export interface SpeakingEvent {
    id: string;
    type: EventType;
    title: string;
    eventName: string;
    location: string;
    date: string;
    description: string;
    fullDescription: string;
    topics: string[];
    image: string;
    gallery: EventPhoto[];
    eventUrl?: string;
    slidesUrl?: string;
    recordingUrl?: string;
    repositoryUrl?: string;
}

export interface EventYearGroup {
    year: string;
    events: SpeakingEvent[];
}

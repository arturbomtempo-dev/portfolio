import { LucideIcon } from 'lucide-react';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    cardTechs: string[];
    fullDescription: string;
    allTechs: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface Achievement {
    icon: LucideIcon;
    title: string;
    description: string;
    fullDescription: string;
    details: string[];
}

export interface TechCategory {
    title: string;
    icon: LucideIcon;
    techs: string[];
}

export interface Testimonial {
    text: string;
    name: string;
    role: string;
    image: string;
}

export interface Education {
    year: string;
    title: string;
    institution: string;
    description: string;
    activities: string[];
}

export interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    activities: string[];
}

export interface Timeline {
    education: Education[];
    professional: Experience[];
}

export interface Content {
    type: 'video' | 'article' | 'newsletter';
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    platform: string;
    date: string;
}

export type ContentType = 'all' | 'videos' | 'articles' | 'newsletters';

export type TalkType = 'talk' | 'workshop' | 'course';

export interface Talk {
    id: string;
    type: TalkType;
    title: string;
    event: string;
    location: string;
    date: string;
    description: string;
    fullDescription: string;
    topics: string[];
    image: string;
    gallery?: string[];
    url?: string;
}

export type TalkFilter = 'all' | TalkType;

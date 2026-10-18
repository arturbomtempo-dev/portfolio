import type { LucideIcon } from '@lucide/vue';

export interface Achievement {
    icon: LucideIcon;
    title: string;
    description: string;
    fullDescription: string;
    details: string[];
}

export interface TechCategory {
    icon: LucideIcon;
    title: string;
    techs: string[];
}

export interface Testimonial {
    name: string;
    role: string;
    image: string;
    text: string;
}

export interface Education {
    startDate: string;
    endDate?: string;
    title: string;
    institution: string;
    description: string;
    activities: string[];
}

export interface Experience {
    startDate: string;
    endDate?: string;
    title: string;
    company: string;
    description: string;
    activities: string[];
}

export interface Timeline {
    education: Education[];
    professional: Experience[];
}

export interface AboutContent {
    achievements: Achievement[];
    techCategories: TechCategory[];
    testimonials: Testimonial[];
    timeline: Timeline;
}

export interface TimelineEntry {
    period: string;
    title: string;
    organization: string;
}

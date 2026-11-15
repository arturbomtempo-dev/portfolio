import type { LucideIcon } from '@lucide/vue';

export type RoadmapLevel = 'beginner' | 'intermediate' | 'advanced';

export interface RoadmapPathOptionStructure {
    id: string;
    technologies: string[];
}

export interface RoadmapStepStructure {
    id: string;
    technologies: string[];
    options?: RoadmapPathOptionStructure[];
}

export interface RoadmapAreaStructure {
    id: string;
    icon: LucideIcon;
    steps: RoadmapStepStructure[];
}

export interface RoadmapFundamentalStructure {
    id: string;
    icon: LucideIcon;
}

export interface RoadmapPrincipleStructure {
    id: string;
    level: RoadmapLevel;
}

export interface RoadmapStructure {
    fundamentals: RoadmapFundamentalStructure[];
    areas: RoadmapAreaStructure[];
    principles: RoadmapPrincipleStructure[];
}

export interface RoadmapTextCopy {
    title: string;
    description: string;
}

export interface RoadmapAreaCopy {
    title: string;
    summary: string;
    description: string;
    myth: string;
    responsibilities: string[];
    aiImpact: string;
    steps: Record<string, RoadmapTextCopy>;
    options: Record<string, string>;
}

export interface RoadmapPrincipleCopy {
    title: string;
    summary: string;
    details: string;
    whenToLearn: string;
}

export interface RoadmapCopy {
    fundamentals: Record<string, RoadmapTextCopy>;
    areas: Record<string, RoadmapAreaCopy>;
    principles: Record<string, RoadmapPrincipleCopy>;
    tips: string[];
}

export interface RoadmapFundamental extends RoadmapTextCopy {
    id: string;
    icon: LucideIcon;
}

export interface RoadmapPathOption {
    id: string;
    title: string;
    technologies: string[];
}

export interface RoadmapStep extends RoadmapTextCopy {
    id: string;
    technologies: string[];
    options: RoadmapPathOption[];
}

export interface RoadmapArea extends Omit<RoadmapAreaCopy, 'steps' | 'options'> {
    id: string;
    icon: LucideIcon;
    steps: RoadmapStep[];
}

export interface RoadmapPrinciple extends RoadmapPrincipleCopy {
    id: string;
    level: RoadmapLevel;
}

export interface RoadmapContent {
    fundamentals: RoadmapFundamental[];
    areas: RoadmapArea[];
    principles: RoadmapPrinciple[];
    tips: string[];
}

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

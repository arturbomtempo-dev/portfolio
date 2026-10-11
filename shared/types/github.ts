export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
    date: string;
    count: number;
    level: ContributionLevel;
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionDay[][];
}

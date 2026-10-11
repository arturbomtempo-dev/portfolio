import type { ContributionLevel } from '#shared/types/github';

export const CONTRIBUTION_LEVELS: ContributionLevel[] = [0, 1, 2, 3, 4];

const CLASS_BY_CONTRIBUTION_LEVEL: Record<ContributionLevel, string> = {
    0: 'bg-secondary',
    1: 'bg-primary/25',
    2: 'bg-primary/50',
    3: 'bg-primary/75',
    4: 'bg-primary',
};

export function getContributionLevelClass(level: ContributionLevel) {
    return CLASS_BY_CONTRIBUTION_LEVEL[level];
}

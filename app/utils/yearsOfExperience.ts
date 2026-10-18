export const CAREER_START_YEAR = 2022;

export function getYearsOfExperience(currentYear: number) {
    return Math.max(currentYear - CAREER_START_YEAR, 0);
}

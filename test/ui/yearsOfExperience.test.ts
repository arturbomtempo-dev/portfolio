import { describe, expect, it } from 'vitest';
import { CAREER_START_YEAR, getYearsOfExperience } from '~/utils/yearsOfExperience';

describe('getYearsOfExperience', () => {
    it('counts the full years since the career started in 2022', () => {
        expect(CAREER_START_YEAR).toBe(2022);
        expect(getYearsOfExperience(2026)).toBe(4);
        expect(getYearsOfExperience(2030)).toBe(8);
    });

    it('never returns a negative number', () => {
        expect(getYearsOfExperience(2020)).toBe(0);
    });
});

import { describe, expect, it } from 'vitest';
import {
    formatTimelinePeriod,
    formatYearMonth,
    sortTimelineByRecency,
} from '~/utils/timelinePeriod';

function normalizeSpaces(text: string) {
    return text.replace(/\s/g, ' ');
}

const CURRENT_YEAR_MONTH = '2026-10';

describe('formatYearMonth', () => {
    it('uses the abbreviated month of each language', () => {
        expect(normalizeSpaces(formatYearMonth('2021-01', 'pt-BR'))).toBe('jan. de 2021');
        expect(formatYearMonth('2021-01', 'en-US')).toBe('Jan 2021');
        expect(formatYearMonth('2021-01', 'es-ES')).toBe('ene 2021');
    });
});

describe('formatTimelinePeriod', () => {
    it('joins the start and the end with an en dash', () => {
        expect(
            normalizeSpaces(
                formatTimelinePeriod(
                    { startDate: '2023-02', endDate: '2023-04' },
                    'pt-BR',
                    'o momento'
                )
            )
        ).toBe('fev. de 2023 – abr. de 2023');
    });

    it('shows the present label when there is no end date', () => {
        expect(formatTimelinePeriod({ startDate: '2024-06' }, 'en-US', 'Present')).toBe(
            'Jun 2024 – Present'
        );
    });
});

describe('sortTimelineByRecency', () => {
    const entries = [
        { id: 'vidas', startDate: '2023-02', endDate: '2023-04' },
        { id: 'webtech', startDate: '2024-06' },
        { id: 'dti', startDate: '2025-09', endDate: '2026-09' },
        { id: 'hotmart', startDate: '2026-10' },
        { id: 'monitoring', startDate: '2024-08' },
        { id: 'degree', startDate: '2025-02', endDate: '2028-07' },
    ];

    it('puts ongoing entries first, newest start first, then the finished ones', () => {
        expect(sortTimelineByRecency(entries, CURRENT_YEAR_MONTH).map(({ id }) => id)).toEqual([
            'hotmart',
            'degree',
            'monitoring',
            'webtech',
            'dti',
            'vidas',
        ]);
    });

    it('does not change the original list', () => {
        sortTimelineByRecency(entries, CURRENT_YEAR_MONTH);

        expect(entries[0]?.id).toBe('vidas');
    });
});

import { describe, expect, it } from 'vitest';
import { formatTalkDate } from '~/utils/formatTalkDate';

function normalizeSpaces(text: string) {
    return text.replace(/\s/g, ' ');
}

describe('talk date formatting', () => {
    it('formats a single day', () => {
        expect(formatTalkDate('2024-10-26', undefined, 'pt-BR')).toBe('26 de outubro de 2024');
        expect(formatTalkDate('2024-10-26', undefined, 'en-US')).toBe('October 26, 2024');
    });

    it('formats a month without inventing a day', () => {
        expect(formatTalkDate('2023-07', undefined, 'pt-BR')).toBe('Julho de 2023');
        expect(formatTalkDate('2023-07', undefined, 'es-ES')).toBe('Julio de 2023');
    });

    it('capitalizes the first letter of month ranges', () => {
        expect(normalizeSpaces(formatTalkDate('2023-04', '2023-07', 'pt-BR'))).toBe(
            'Abril – julho de 2023'
        );
    });

    it('formats day and month ranges', () => {
        expect(normalizeSpaces(formatTalkDate('2025-07-30', '2025-07-31', 'pt-BR'))).toBe(
            '30 – 31 de julho de 2025'
        );
        expect(normalizeSpaces(formatTalkDate('2025-07', '2025-08', 'en-US'))).toBe(
            'July – August 2025'
        );
    });
});

describe('formatTalkDate spacing', () => {
    it('always uses regular spaces, so server and browser render the same text', () => {
        const formatted = formatTalkDate('2025-07-30', '2025-07-31', 'pt-BR');

        expect(formatted).not.toMatch(/[   ]/);
        expect(formatted).toBe('30 – 31 de julho de 2025');
    });
});

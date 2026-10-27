import { describe, expect, it } from 'vitest';
import {
    advanceCodeLine,
    CODE_SNIPPETS,
    createCodeLine,
    createCodeLines,
    getCenterFade,
    getCodeLineCount,
    getPointerInfluence,
} from '~/utils/codeRain';

function createSequence(values: number[]) {
    let index = 0;

    return () => values[index++ % values.length] ?? 0;
}

const DESKTOP = { width: 1440, height: 810 };
const PHONE = { width: 390, height: 844 };

describe('getCodeLineCount', () => {
    it('scales with the screen area and stays within limits', () => {
        expect(getCodeLineCount(PHONE)).toBe(12);
        expect(getCodeLineCount(DESKTOP)).toBe(36);
        expect(getCodeLineCount({ width: 3840, height: 2160 })).toBe(48);
    });
});

describe('createCodeLine', () => {
    it('places a real snippet inside the screen', () => {
        const line = createCodeLine(DESKTOP, createSequence([0.5]));

        expect(CODE_SNIPPETS).toContain(line.text);
        expect(line.x).toBeGreaterThanOrEqual(0);
        expect(line.x + line.text.length * line.fontSize * 0.6).toBeLessThanOrEqual(DESKTOP.width);
        expect(line.opacity).toBeLessThan(0.2);
    });

    it('creates one line per slot', () => {
        expect(createCodeLines(PHONE, createSequence([0.3, 0.7]))).toHaveLength(12);
    });
});

describe('advanceCodeLine', () => {
    it('moves the line down and eases it towards the pointer offset', () => {
        const line = createCodeLine(DESKTOP, createSequence([0.5]));
        const next = advanceCodeLine(line, 1, DESKTOP, 20);

        expect(next.y).toBeCloseTo(line.y + line.speed);
        expect(next.offsetX).toBeGreaterThan(0);
        expect(next.offsetX).toBeLessThan(20);
    });

    it('starts again above the screen after leaving it', () => {
        const line = { ...createCodeLine(DESKTOP, createSequence([0.5])), y: DESKTOP.height + 100 };

        expect(advanceCodeLine(line, 0.016, DESKTOP, 0).y).toBeLessThan(0);
    });
});

describe('getPointerInfluence', () => {
    it('is strongest under the pointer and fades to zero at the radius', () => {
        expect(getPointerInfluence(0, 180)).toBe(1);
        expect(getPointerInfluence(90, 180)).toBeCloseTo(0.25);
        expect(getPointerInfluence(180, 180)).toBe(0);
        expect(getPointerInfluence(400, 180)).toBe(0);
    });
});

describe('getCenterFade', () => {
    it('keeps the center of the hero quieter than the edges', () => {
        expect(getCenterFade(720, 405, DESKTOP)).toBeCloseTo(0.12);
        expect(getCenterFade(0, 0, DESKTOP)).toBe(1);
    });
});

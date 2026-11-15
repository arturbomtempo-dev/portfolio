import { describe, expect, it } from 'vitest';
import { ROADMAP_COPY_EN } from '~/data/roadmap/en';
import { ROADMAP_COPY_ES } from '~/data/roadmap/es';
import { ROADMAP_COPY_PT } from '~/data/roadmap/pt';
import { ROADMAP_STRUCTURE } from '~/data/roadmap/structure';
import type { RoadmapCopy } from '~/types/roadmap';
import { buildRoadmapContent } from '~/utils/roadmapContent';

const COPIES: [string, RoadmapCopy][] = [
    ['pt', ROADMAP_COPY_PT],
    ['en', ROADMAP_COPY_EN],
    ['es', ROADMAP_COPY_ES],
];

describe.each(COPIES)('roadmap copy (%s)', (_, copy) => {
    const content = buildRoadmapContent(ROADMAP_STRUCTURE, copy);

    it('has a text for every fundamental, area, step, option and principle', () => {
        expect(content.fundamentals).toHaveLength(ROADMAP_STRUCTURE.fundamentals.length);
        expect(content.areas).toHaveLength(ROADMAP_STRUCTURE.areas.length);
        expect(content.principles).toHaveLength(ROADMAP_STRUCTURE.principles.length);

        for (const area of content.areas) {
            expect(area.title).not.toBe('');
            expect(area.responsibilities.length).toBeGreaterThanOrEqual(4);

            for (const step of area.steps) {
                expect(step.title).not.toBe('');
                expect(step.description).not.toBe('');
                step.options.forEach((option) => expect(option.title).not.toBe(''));
            }
        }
    });

    it('has no extra texts left behind for removed items', () => {
        expect(Object.keys(copy.areas)).toEqual(ROADMAP_STRUCTURE.areas.map(({ id }) => id));

        for (const area of ROADMAP_STRUCTURE.areas) {
            const areaCopy = copy.areas[area.id];
            const optionIds = area.steps.flatMap((step) => step.options ?? []).map(({ id }) => id);

            expect(Object.keys(areaCopy?.steps ?? {})).toEqual(area.steps.map(({ id }) => id));
            expect(Object.keys(areaCopy?.options ?? {})).toEqual(optionIds);
        }
    });

    it('never uses em dashes', () => {
        expect(JSON.stringify(copy)).not.toContain('—');
    });

    it('keeps the same number of tips in every language', () => {
        expect(copy.tips).toHaveLength(ROADMAP_COPY_PT.tips.length);
    });
});

describe('buildRoadmapContent', () => {
    it('explains which text is missing', () => {
        const incompleteCopy = { ...ROADMAP_COPY_PT, areas: {} };

        expect(() => buildRoadmapContent(ROADMAP_STRUCTURE, incompleteCopy)).toThrow(
            'Missing roadmap copy for "front-end"'
        );
    });
});

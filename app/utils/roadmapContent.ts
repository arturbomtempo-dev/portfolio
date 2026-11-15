import type {
    RoadmapAreaStructure,
    RoadmapContent,
    RoadmapCopy,
    RoadmapStructure,
} from '~/types/roadmap';

export const ROADMAP_AREA_PANEL_ID = 'roadmap-area-panel';

function requireCopy<Copy>(copy: Copy | undefined, path: string): Copy {
    if (copy === undefined) {
        throw new Error(`Missing roadmap copy for "${path}"`);
    }

    return copy;
}

function buildArea(area: RoadmapAreaStructure, copy: RoadmapCopy) {
    const { steps, options, ...areaCopy } = requireCopy(copy.areas[area.id], area.id);

    return {
        ...areaCopy,
        id: area.id,
        icon: area.icon,
        steps: area.steps.map((step) => ({
            ...requireCopy(steps[step.id], `${area.id}.steps.${step.id}`),
            id: step.id,
            technologies: step.technologies,
            options: (step.options ?? []).map((option) => ({
                id: option.id,
                title: requireCopy(options[option.id], `${area.id}.options.${option.id}`),
                technologies: option.technologies,
            })),
        })),
    };
}

export function buildRoadmapContent(
    structure: RoadmapStructure,
    copy: RoadmapCopy
): RoadmapContent {
    return {
        fundamentals: structure.fundamentals.map((fundamental) => ({
            ...requireCopy(copy.fundamentals[fundamental.id], `fundamentals.${fundamental.id}`),
            ...fundamental,
        })),
        areas: structure.areas.map((area) => buildArea(area, copy)),
        principles: structure.principles.map((principle) => ({
            ...requireCopy(copy.principles[principle.id], `principles.${principle.id}`),
            ...principle,
        })),
        tips: copy.tips,
    };
}

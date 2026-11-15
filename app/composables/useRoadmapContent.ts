import { ROADMAP_COPY_EN } from '~/data/roadmap/en';
import { ROADMAP_COPY_ES } from '~/data/roadmap/es';
import { ROADMAP_COPY_PT } from '~/data/roadmap/pt';
import { ROADMAP_STRUCTURE } from '~/data/roadmap/structure';
import type { LocaleCode } from '~/types/locale';
import type { RoadmapCopy } from '~/types/roadmap';
import { buildRoadmapContent } from '~/utils/roadmapContent';

const ROADMAP_COPY_BY_LOCALE: Record<LocaleCode, RoadmapCopy> = {
    pt: ROADMAP_COPY_PT,
    en: ROADMAP_COPY_EN,
    es: ROADMAP_COPY_ES,
};

export function useRoadmapContent() {
    const { locale } = useI18n();

    return computed(() =>
        buildRoadmapContent(ROADMAP_STRUCTURE, ROADMAP_COPY_BY_LOCALE[locale.value])
    );
}

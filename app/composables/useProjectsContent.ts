import { PROJECTS_EN } from '~/data/projects/en';
import { PROJECTS_ES } from '~/data/projects/es';
import { PROJECTS_PT } from '~/data/projects/pt';
import type { LocaleCode } from '~/types/locale';
import type { Project } from '~/types/project';

const PROJECTS_BY_LOCALE: Record<LocaleCode, Project[]> = {
    pt: PROJECTS_PT,
    en: PROJECTS_EN,
    es: PROJECTS_ES,
};

export function useProjectsContent() {
    const { locale } = useI18n();

    return computed(() => PROJECTS_BY_LOCALE[locale.value]);
}

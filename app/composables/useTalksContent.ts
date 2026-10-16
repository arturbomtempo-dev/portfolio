import { TALKS_EN } from '~/data/talks/en';
import { TALKS_ES } from '~/data/talks/es';
import { TALKS_PT } from '~/data/talks/pt';
import type { Talk } from '~/types/talk';
import type { LocaleCode } from '~/types/locale';

const TALKS_BY_LOCALE: Record<LocaleCode, Talk[]> = {
    pt: TALKS_PT,
    en: TALKS_EN,
    es: TALKS_ES,
};

function compareByMostRecentDate(first: Talk, second: Talk) {
    return second.date.localeCompare(first.date);
}

export function useTalksContent() {
    const { locale } = useI18n();

    return computed(() => [...TALKS_BY_LOCALE[locale.value]].sort(compareByMostRecentDate));
}

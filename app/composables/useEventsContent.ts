import { EVENTS_EN } from '~/data/events/en';
import { EVENTS_ES } from '~/data/events/es';
import { EVENTS_PT } from '~/data/events/pt';
import type { SpeakingEvent } from '~/types/event';
import type { LocaleCode } from '~/types/locale';

const EVENTS_BY_LOCALE: Record<LocaleCode, SpeakingEvent[]> = {
    pt: EVENTS_PT,
    en: EVENTS_EN,
    es: EVENTS_ES,
};

function compareByMostRecentDate(first: SpeakingEvent, second: SpeakingEvent) {
    return second.date.localeCompare(first.date);
}

export function useEventsContent() {
    const { locale } = useI18n();

    return computed(() => [...EVENTS_BY_LOCALE[locale.value]].sort(compareByMostRecentDate));
}

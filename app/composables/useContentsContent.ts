import { CONTENTS_EN } from '~/data/contents/en';
import { CONTENTS_ES } from '~/data/contents/es';
import { CONTENTS_PT } from '~/data/contents/pt';
import type { ContentItem } from '~/types/content';
import type { LocaleCode } from '~/types/locale';

const CONTENTS_BY_LOCALE: Record<LocaleCode, ContentItem[]> = {
    pt: CONTENTS_PT,
    en: CONTENTS_EN,
    es: CONTENTS_ES,
};

export function useContentsContent() {
    const { locale } = useI18n();

    return computed(() => CONTENTS_BY_LOCALE[locale.value]);
}

import { ABOUT_CONTENT_EN } from '~/data/about/en';
import { ABOUT_CONTENT_ES } from '~/data/about/es';
import { ABOUT_CONTENT_PT } from '~/data/about/pt';
import type { AboutContent } from '~/types/about';
import type { LocaleCode } from '~/types/locale';

const ABOUT_CONTENT_BY_LOCALE: Record<LocaleCode, AboutContent> = {
    pt: ABOUT_CONTENT_PT,
    en: ABOUT_CONTENT_EN,
    es: ABOUT_CONTENT_ES,
};

export function useAboutContent() {
    const { locale } = useI18n();

    return computed(() => ABOUT_CONTENT_BY_LOCALE[locale.value]);
}

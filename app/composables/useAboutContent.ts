import { createAboutContentEn } from '~/data/about/en';
import { createAboutContentEs } from '~/data/about/es';
import { createAboutContentPt } from '~/data/about/pt';
import { TALKS_PT } from '~/data/talks/pt';
import type { AboutContent } from '~/types/about';
import type { LocaleCode } from '~/types/locale';

const CREATE_ABOUT_CONTENT_BY_LOCALE: Record<
    LocaleCode,
    (yearsOfExperience: number, talkCount: number) => AboutContent
> = {
    pt: createAboutContentPt,
    en: createAboutContentEn,
    es: createAboutContentEs,
};

export function useAboutContent() {
    const { locale } = useI18n();
    const yearsOfExperience = useYearsOfExperience();

    return computed(() =>
        CREATE_ABOUT_CONTENT_BY_LOCALE[locale.value](yearsOfExperience.value, TALKS_PT.length)
    );
}

import { normalizeSpaces } from '~/utils/normalizeSpaces';

const LONG_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export function formatLongDate(isoDate: string, languageTag: string) {
    return normalizeSpaces(
        new Intl.DateTimeFormat(languageTag, LONG_DATE_FORMAT_OPTIONS).format(
            new Date(`${isoDate}T00:00:00`)
        )
    );
}

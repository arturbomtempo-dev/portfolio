const LONG_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

export function formatLongDate(isoDate: string, languageTag: string) {
    return new Intl.DateTimeFormat(languageTag, LONG_DATE_FORMAT_OPTIONS).format(
        new Date(`${isoDate}T00:00:00`)
    );
}

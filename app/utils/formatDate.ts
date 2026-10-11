const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
};

export function formatDate(isoDate: string, languageTag: string) {
    return new Intl.DateTimeFormat(languageTag, DATE_FORMAT_OPTIONS).format(
        new Date(`${isoDate}T00:00:00`)
    );
}

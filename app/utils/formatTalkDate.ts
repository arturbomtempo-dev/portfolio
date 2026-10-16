const MONTH_PRECISION_LENGTH = 7;

const DAY_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

const MONTH_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
};

function isMonthPrecision(isoDate: string) {
    return isoDate.length === MONTH_PRECISION_LENGTH;
}

function parseIsoDate(isoDate: string) {
    return new Date(`${isMonthPrecision(isoDate) ? `${isoDate}-01` : isoDate}T00:00:00`);
}

export function formatTalkDate(
    startDate: string,
    endDate: string | undefined,
    languageTag: string
) {
    const formatter = new Intl.DateTimeFormat(
        languageTag,
        isMonthPrecision(startDate) ? MONTH_FORMAT_OPTIONS : DAY_FORMAT_OPTIONS
    );

    return endDate
        ? formatter.formatRange(parseIsoDate(startDate), parseIsoDate(endDate))
        : formatter.format(parseIsoDate(startDate));
}

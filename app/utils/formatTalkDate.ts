import { normalizeSpaces } from '~/utils/normalizeSpaces';

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

function capitalizeFirstLetter(text: string, languageTag: string) {
    return text.charAt(0).toLocaleUpperCase(languageTag) + text.slice(1);
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

    const formattedDate = endDate
        ? formatter.formatRange(parseIsoDate(startDate), parseIsoDate(endDate))
        : formatter.format(parseIsoDate(startDate));

    return capitalizeFirstLetter(normalizeSpaces(formattedDate), languageTag);
}

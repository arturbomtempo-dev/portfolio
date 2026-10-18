import { normalizeSpaces } from '~/utils/normalizeSpaces';

export interface TimelinePeriod {
    startDate: string;
    endDate?: string;
}

const PERIOD_SEPARATOR = ' – ';
const MONTH_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };

function parseYearMonth(yearMonth: string) {
    return new Date(`${yearMonth}-01T00:00:00`);
}

export function formatYearMonth(yearMonth: string, languageTag: string) {
    return normalizeSpaces(
        new Intl.DateTimeFormat(languageTag, MONTH_FORMAT_OPTIONS).format(parseYearMonth(yearMonth))
    );
}

export function formatTimelinePeriod(
    { startDate, endDate }: TimelinePeriod,
    languageTag: string,
    presentLabel: string
) {
    const end = endDate ? formatYearMonth(endDate, languageTag) : presentLabel;

    return `${formatYearMonth(startDate, languageTag)}${PERIOD_SEPARATOR}${end}`;
}

export function isOngoingPeriod({ endDate }: TimelinePeriod, currentYearMonth: string) {
    return !endDate || endDate > currentYearMonth;
}

export function sortTimelineByRecency<Entry extends TimelinePeriod>(
    entries: Entry[],
    currentYearMonth: string
) {
    return [...entries].sort((first, second) => {
        const ongoingDifference =
            Number(isOngoingPeriod(second, currentYearMonth)) -
            Number(isOngoingPeriod(first, currentYearMonth));

        return ongoingDifference || second.startDate.localeCompare(first.startDate);
    });
}

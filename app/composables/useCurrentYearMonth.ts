const YEAR_MONTH_LENGTH = 7;

export function useCurrentYearMonth() {
    return useState('current-year-month', () =>
        new Date().toISOString().slice(0, YEAR_MONTH_LENGTH)
    );
}

import type {
    ContributionCalendar,
    ContributionDay,
    ContributionLevel,
} from '#shared/types/github';

interface PublicContributionsResponse {
    total: { lastYear: number };
    contributions: { date: string; count: number; level: ContributionLevel }[];
}

const CONTRIBUTIONS_API_URL = 'https://github-contributions-api.jogruber.de/v4';
const BAD_GATEWAY_STATUS_CODE = 502;
const SUNDAY = 0;

function getWeekday(isoDate: string) {
    return new Date(`${isoDate}T00:00:00Z`).getUTCDay();
}

function groupByWeek(days: ContributionDay[]) {
    return days.reduce<ContributionDay[][]>((weeks, day) => {
        const currentWeek = weeks.at(-1);

        if (!currentWeek || getWeekday(day.date) === SUNDAY) {
            weeks.push([day]);
        } else {
            currentWeek.push(day);
        }

        return weeks;
    }, []);
}

async function fetchPublicContributions() {
    try {
        return await $fetch<PublicContributionsResponse>(
            `${CONTRIBUTIONS_API_URL}/${GITHUB_USERNAME}`,
            { query: { y: 'last' } }
        );
    } catch {
        return undefined;
    }
}

export default defineEventHandler(async (): Promise<ContributionCalendar> => {
    const response = await fetchPublicContributions();

    if (!response?.contributions.length) {
        throw createError({
            statusCode: BAD_GATEWAY_STATUS_CODE,
            statusMessage: 'GitHub contributions are unavailable',
        });
    }

    return {
        totalContributions: response.total.lastYear,
        weeks: groupByWeek(
            response.contributions.map(({ date, count, level }) => ({ date, count, level }))
        ),
    };
});

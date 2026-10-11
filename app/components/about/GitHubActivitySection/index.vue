<script setup lang="ts">
import type { ContributionCalendar, ContributionDay } from '#shared/types/github';
import { IconBrandGithub } from '@tabler/icons-vue';

type ContributionStatKey = 'contributions' | 'activeDays' | 'longestStreak';

interface ContributionStat {
    key: ContributionStatKey;
    value: number;
}

const PLACEHOLDER_WEEKS_COUNT = 53;
const DAYS_PER_WEEK = 7;

const PLACEHOLDER_WEEKS: ContributionDay[][] = Array.from({ length: PLACEHOLDER_WEEKS_COUNT }, () =>
    Array.from({ length: DAYS_PER_WEEK }, () => ({ date: '', count: 0, level: 0 }))
);

const { t, localeProperties } = useI18n();

const { data: calendar, status } = useFetch<ContributionCalendar>('/api/github/contributions', {
    server: false,
    lazy: true,
});

const isLoading = computed(() => status.value === 'idle' || status.value === 'pending');
const hasFailed = computed(() => status.value === 'error');

const days = computed(() => calendar.value?.weeks.flat() ?? []);

const numberFormatter = computed(
    () => new Intl.NumberFormat(localeProperties.value.language ?? 'pt-BR')
);

function countLongestStreak(contributionDays: ContributionDay[]) {
    let longestStreak = 0;
    let currentStreak = 0;

    contributionDays.forEach((day) => {
        currentStreak = day.count > 0 ? currentStreak + 1 : 0;
        longestStreak = Math.max(longestStreak, currentStreak);
    });

    return longestStreak;
}

const stats = computed<ContributionStat[]>(() => [
    { key: 'contributions', value: calendar.value?.totalContributions ?? 0 },
    { key: 'activeDays', value: days.value.filter((day) => day.count > 0).length },
    { key: 'longestStreak', value: countLongestStreak(days.value) },
]);

const graphLabel = computed(() =>
    t('about.github.graphLabel', {
        count: numberFormatter.value.format(calendar.value?.totalContributions ?? 0),
    })
);
</script>

<template>
    <section v-if="!hasFailed" class="mb-16 animate-fade-in" :aria-busy="isLoading">
        <h2 class="mb-4 text-center text-3xl font-bold">{{ t('about.github.title') }}</h2>
        <p class="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
            {{ t('about.github.description') }}
        </p>

        <UiBaseCard :is-hoverable="false" class="sm:p-8">
            <p v-if="isLoading" class="sr-only">{{ t('about.github.loading') }}</p>

            <dl class="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                    v-for="stat in stats"
                    :key="stat.key"
                    class="flex flex-col-reverse gap-1 rounded-lg border border-border/50 bg-background/40 p-4 text-center sm:text-left"
                >
                    <dt class="text-sm text-muted-foreground">
                        {{ t(`about.github.stats.${stat.key}`) }}
                    </dt>
                    <dd class="font-heading text-3xl font-bold text-primary">
                        <span
                            v-if="isLoading"
                            class="inline-block h-9 w-20 animate-pulse rounded-md bg-secondary align-middle"
                        />
                        <template v-else>{{ numberFormatter.format(stat.value) }}</template>
                    </dd>
                </div>
            </dl>

            <AboutContributionGraph
                :weeks="calendar?.weeks ?? PLACEHOLDER_WEEKS"
                :label="graphLabel"
                :is-loading="isLoading"
            />

            <div class="mt-6 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                <div
                    aria-hidden="true"
                    class="flex items-center gap-2 text-xs text-muted-foreground"
                >
                    <span>{{ t('about.github.less') }}</span>
                    <span
                        v-for="level in CONTRIBUTION_LEVELS"
                        :key="level"
                        :class="cn('size-3 rounded-xs', getContributionLevelClass(level))"
                    />
                    <span>{{ t('about.github.more') }}</span>
                </div>
                <UiBaseButton
                    :to="GITHUB_PROFILE_URL"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    class="gap-2"
                >
                    <IconBrandGithub />
                    {{ t('about.github.viewProfile') }}
                </UiBaseButton>
            </div>
        </UiBaseCard>
    </section>
</template>

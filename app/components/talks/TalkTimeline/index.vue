<script setup lang="ts">
import type { TalkFilter, Talk } from '~/types/talk';

interface TalkYearGroup {
    year: string;
    talks: Talk[];
}

const TALK_FILTERS: TalkFilter[] = ['all', 'talk', 'workshop', 'course'];
const DEFAULT_FILTER: TalkFilter = 'all';
const FILTER_QUERY_KEY = 'type';
const TALKS_ABOVE_THE_FOLD = 2;

const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
const talks = useTalksContent();

function isTalkFilter(value: unknown): value is TalkFilter {
    return TALK_FILTERS.includes(value as TalkFilter);
}

function getTalkYear(talk: Talk) {
    return talk.date.slice(0, 4);
}

const selectedFilter = computed<TalkFilter>({
    get: () => {
        const queryValue = route.query[FILTER_QUERY_KEY];

        return isTalkFilter(queryValue) ? queryValue : DEFAULT_FILTER;
    },
    set: (filter) => {
        const query = {
            ...route.query,
            [FILTER_QUERY_KEY]: filter === DEFAULT_FILTER ? undefined : filter,
        };

        navigateTo({ query }, { replace: true });
    },
});

const filterOptions = computed(() =>
    TALK_FILTERS.map((filter) => ({ value: filter, label: t(`talks.filters.${filter}`) }))
);

const filteredTalks = computed(() =>
    selectedFilter.value === DEFAULT_FILTER
        ? talks.value
        : talks.value.filter((talk) => talk.type === selectedFilter.value)
);

const yearGroups = computed<TalkYearGroup[]>(() =>
    filteredTalks.value.reduce<TalkYearGroup[]>((groups, talk) => {
        const year = getTalkYear(talk);
        const lastGroup = groups.at(-1);

        if (lastGroup?.year === year) {
            lastGroup.talks.push(talk);
        } else {
            groups.push({ year, talks: [talk] });
        }

        return groups;
    }, [])
);

const aboveTheFoldTalkIds = computed(
    () => new Set(filteredTalks.value.slice(0, TALKS_ABOVE_THE_FOLD).map((talk) => talk.id))
);
</script>

<template>
    <UiFilterTabs
        v-model="selectedFilter"
        :options="filterOptions"
        :label="t('talks.filtersLabel')"
        class="mb-16 animate-fade-in"
    >
        <template #icon="{ value }">
            <TalksTalkTypeIcon v-if="value !== DEFAULT_FILTER" :type="value" class="mr-2" />
        </template>
    </UiFilterTabs>

    <div v-if="yearGroups.length" class="relative animate-fade-in">
        <span
            aria-hidden="true"
            class="absolute top-0 bottom-0 left-4 w-px -translate-x-1/2 bg-linear-to-b from-primary/60 via-primary/30 to-transparent"
        />
        <div class="space-y-16">
            <section
                v-for="group in yearGroups"
                :key="group.year"
                :aria-labelledby="`talks-year-${group.year}`"
            >
                <h2
                    :id="`talks-year-${group.year}`"
                    class="relative z-10 mb-10 w-fit rounded-full border border-primary/40 bg-background px-4 py-1 text-base font-semibold text-primary shadow-glow-sm"
                >
                    {{ group.year }}
                </h2>
                <ol class="space-y-12">
                    <TalksTalkTimelineItem
                        v-for="talk in group.talks"
                        :key="talk.id"
                        :talk="talk"
                        :to="localePath(`/talks/${talk.id}`)"
                        :is-above-the-fold="aboveTheFoldTalkIds.has(talk.id)"
                    />
                </ol>
            </section>
        </div>
    </div>
    <p v-else class="animate-fade-in text-center text-muted-foreground">{{ t('talks.empty') }}</p>
</template>

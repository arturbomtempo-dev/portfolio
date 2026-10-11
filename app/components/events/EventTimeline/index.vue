<script setup lang="ts">
import type { EventFilter, SpeakingEvent } from '~/types/event';

interface EventYearGroup {
    year: string;
    events: SpeakingEvent[];
}

const EVENT_FILTERS: EventFilter[] = ['all', 'talk', 'workshop', 'course'];
const DEFAULT_FILTER: EventFilter = 'all';
const FILTER_QUERY_KEY = 'type';
const EVENTS_ABOVE_THE_FOLD = 2;

const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
const events = useEventsContent();

function isEventFilter(value: unknown): value is EventFilter {
    return EVENT_FILTERS.includes(value as EventFilter);
}

function getEventYear(event: SpeakingEvent) {
    return event.date.slice(0, 4);
}

const selectedFilter = computed<EventFilter>({
    get: () => {
        const queryValue = route.query[FILTER_QUERY_KEY];

        return isEventFilter(queryValue) ? queryValue : DEFAULT_FILTER;
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
    EVENT_FILTERS.map((filter) => ({ value: filter, label: t(`events.filters.${filter}`) }))
);

const filteredEvents = computed(() =>
    selectedFilter.value === DEFAULT_FILTER
        ? events.value
        : events.value.filter((event) => event.type === selectedFilter.value)
);

const yearGroups = computed<EventYearGroup[]>(() =>
    filteredEvents.value.reduce<EventYearGroup[]>((groups, event) => {
        const year = getEventYear(event);
        const lastGroup = groups.at(-1);

        if (lastGroup?.year === year) {
            lastGroup.events.push(event);
        } else {
            groups.push({ year, events: [event] });
        }

        return groups;
    }, [])
);

const aboveTheFoldEventIds = computed(
    () => new Set(filteredEvents.value.slice(0, EVENTS_ABOVE_THE_FOLD).map((event) => event.id))
);
</script>

<template>
    <UiFilterTabs
        v-model="selectedFilter"
        :options="filterOptions"
        :label="t('events.filtersLabel')"
        class="mb-16 animate-fade-in"
    >
        <template #icon="{ value }">
            <EventsEventTypeIcon v-if="value !== DEFAULT_FILTER" :type="value" class="mr-2" />
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
                :aria-labelledby="`events-year-${group.year}`"
            >
                <h2
                    :id="`events-year-${group.year}`"
                    class="relative z-10 mb-10 w-fit rounded-full border border-primary/40 bg-background px-4 py-1 text-base font-semibold text-primary shadow-glow-sm"
                >
                    {{ group.year }}
                </h2>
                <ol class="space-y-12">
                    <EventsEventTimelineItem
                        v-for="event in group.events"
                        :key="event.id"
                        :event="event"
                        :to="localePath(`/events/${event.id}`)"
                        :is-above-the-fold="aboveTheFoldEventIds.has(event.id)"
                    />
                </ol>
            </section>
        </div>
    </div>
    <p v-else class="animate-fade-in text-center text-muted-foreground">{{ t('events.empty') }}</p>
</template>

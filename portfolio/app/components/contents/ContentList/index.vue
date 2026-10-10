<script setup lang="ts">
import type { ContentFilter } from '~/types/content';

const CONTENT_FILTERS: ContentFilter[] = ['all', 'video', 'article', 'newsletter'];
const DEFAULT_FILTER: ContentFilter = 'all';
const FILTER_QUERY_KEY = 'type';
const CONTENTS_IN_FIRST_ROW = 3;

const { t } = useI18n();
const route = useRoute();
const contents = useContentsContent();

function isContentFilter(value: unknown): value is ContentFilter {
    return CONTENT_FILTERS.includes(value as ContentFilter);
}

const selectedFilter = computed<ContentFilter>({
    get: () => {
        const queryValue = route.query[FILTER_QUERY_KEY];

        return isContentFilter(queryValue) ? queryValue : DEFAULT_FILTER;
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
    CONTENT_FILTERS.map((filter) => ({ value: filter, label: t(`contents.filters.${filter}`) }))
);

const filteredContents = computed(() =>
    selectedFilter.value === DEFAULT_FILTER
        ? contents.value
        : contents.value.filter((content) => content.type === selectedFilter.value)
);
</script>

<template>
    <UiFilterTabs
        v-model="selectedFilter"
        :options="filterOptions"
        :label="t('contents.filtersLabel')"
        class="mb-12 animate-fade-in"
    >
        <template #icon="{ value }">
            <ContentsContentTypeIcon v-if="value !== DEFAULT_FILTER" :type="value" class="mr-2" />
        </template>
    </UiFilterTabs>

    <section class="grid animate-fade-in grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ContentsContentCard
            v-for="(content, index) in filteredContents"
            :key="content.url"
            :content="content"
            :is-above-the-fold="index < CONTENTS_IN_FIRST_ROW"
        />
    </section>
</template>

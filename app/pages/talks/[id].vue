<script setup lang="ts">
const NOT_FOUND_STATUS_CODE = 404;

const { t } = useI18n();
const route = useRoute();
const siteConfig = useSiteConfig();
const events = useEventsContent();

const eventIndex = computed(() =>
    events.value.findIndex((candidate) => candidate.id === String(route.params.id))
);
const event = computed(() => events.value[eventIndex.value]);
const newerEvent = computed(() =>
    eventIndex.value > 0 ? events.value[eventIndex.value - 1] : undefined
);
const olderEvent = computed(() =>
    eventIndex.value >= 0 ? events.value[eventIndex.value + 1] : undefined
);

if (!event.value) {
    setResponseStatus(NOT_FOUND_STATUS_CODE);
}

const pageTitle = computed(() =>
    event.value
        ? t('eventDetails.seo.title', { title: event.value.title })
        : t('eventDetails.notFound.seo.title')
);

useSeoMeta({
    title: () => pageTitle.value,
    description: () => event.value?.description,
    ogTitle: () => pageTitle.value,
    ogDescription: () => event.value?.description,
    ogImage: () =>
        event.value ? `${siteConfig.url}${getEventOpenGraphImagePath(event.value.id)}` : undefined,
    ogImageAlt: () => event.value?.title,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    robots: () => (event.value ? undefined : 'noindex, nofollow'),
});
</script>

<template>
    <div v-if="event" class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-4xl px-8">
            <EventsEventDetails
                :event="event"
                :newer-event="newerEvent"
                :older-event="olderEvent"
            />
        </div>
    </div>
    <div v-else class="flex min-h-screen items-center justify-center px-6 py-20">
        <div class="mx-auto w-full max-w-2xl sm:px-8">
            <EventsEventNotFound />
        </div>
    </div>
</template>

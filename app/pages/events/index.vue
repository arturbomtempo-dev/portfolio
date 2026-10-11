<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('events.seo.title'),
    description: () => t('events.seo.description'),
    ogTitle: () => t('events.seo.ogTitle'),
    ogDescription: () => t('events.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-6xl sm:px-8">
            <UiPageHeader
                :title="t('events.title')"
                :description="t('events.description')"
                description-class="max-w-2xl"
                class="mb-12"
            />
            <EventsEventTimeline />
        </div>
    </div>
</template>

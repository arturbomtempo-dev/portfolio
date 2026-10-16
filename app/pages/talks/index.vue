<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('talks.seo.title'),
    description: () => t('talks.seo.description'),
    ogTitle: () => t('talks.seo.ogTitle'),
    ogDescription: () => t('talks.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-5xl sm:px-8">
            <UiPageHeader
                :title="t('talks.title')"
                :description="t('talks.description')"
                description-class="max-w-2xl"
                class="mb-12"
            />
            <TalksTalkTimeline />
        </div>
    </div>
</template>

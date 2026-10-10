<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('about.seo.title'),
    description: () => t('about.seo.description'),
    ogTitle: () => t('about.seo.ogTitle'),
    ogDescription: () => t('about.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-4 py-20">
        <div class="mx-auto w-full max-w-6xl px-8">
            <UiPageHeader :title="t('about.title')" :description="t('about.description')" />
            <AboutAchievementsSection />
            <AboutTechnologiesSection />
            <AboutTestimonialsSection />
            <AboutTimelineSection />
        </div>
    </div>
</template>

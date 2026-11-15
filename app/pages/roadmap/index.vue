<script setup lang="ts">
const { t } = useI18n();
const content = useRoadmapContent();

useSeoMeta({
    title: () => t('roadmap.seo.title'),
    description: () => t('roadmap.seo.description'),
    ogTitle: () => t('roadmap.seo.ogTitle'),
    ogDescription: () => t('roadmap.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-6xl space-y-24 sm:px-8">
            <UiPageHeader :title="t('roadmap.title')" :description="t('roadmap.description')" />
            <RoadmapFundamentals :fundamentals="content.fundamentals" />
            <RoadmapAreaExplorer :areas="content.areas" />
            <RoadmapPrincipleGrid :principles="content.principles" />
            <RoadmapTipList :tips="content.tips" />
        </div>
    </div>
</template>

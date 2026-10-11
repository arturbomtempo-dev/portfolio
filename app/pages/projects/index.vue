<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('projects.seo.title'),
    description: () => t('projects.seo.description'),
    ogTitle: () => t('projects.seo.ogTitle'),
    ogDescription: () => t('projects.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-7xl px-8">
            <UiPageHeader
                :title="t('projects.title')"
                :description="t('projects.description')"
                description-class="max-w-2xl"
            />
            <ProjectsProjectGrid />
        </div>
    </div>
</template>

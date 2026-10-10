<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('contents.seo.title'),
    description: () => t('contents.seo.description'),
    ogTitle: () => t('contents.seo.ogTitle'),
    ogDescription: () => t('contents.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-6 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-7xl px-8">
            <UiPageHeader
                :title="t('contents.title')"
                :description="t('contents.description')"
                description-class="max-w-2xl"
                class="mb-12"
            />
            <ContentsContentList />
        </div>
    </div>
</template>

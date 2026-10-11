<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('home.seo.title'),
    description: () => t('home.seo.description'),
    ogTitle: () => t('home.seo.ogTitle'),
    ogDescription: () => t('home.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <HomeHeroSection />
</template>

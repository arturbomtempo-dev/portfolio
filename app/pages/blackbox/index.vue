<script setup lang="ts">
definePageMeta({
    layout: 'blackbox',
});

const { t } = useI18n();

useSeoMeta({
    title: () => t('blackbox.seo.title'),
    description: () => t('blackbox.seo.description'),
    ogTitle: () => t('blackbox.seo.title'),
    ogDescription: () => t('blackbox.seo.description'),
    ogType: 'website',
});
</script>

<template>
    <BlackboxTerminalApp />
</template>

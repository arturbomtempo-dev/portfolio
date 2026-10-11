<script setup lang="ts">
const localeHead = useLocaleHead();
const getPageKey = useLocaleAgnosticRouteKey();
const siteConfig = useSiteConfig();
const { t, locale } = useI18n();

useHead(() => ({
    htmlAttrs: localeHead.value.htmlAttrs,
    link: localeHead.value.link,
    meta: localeHead.value.meta,
}));

useSeoMeta({
    ogSiteName: siteConfig.name,
    ogImage: () => `${siteConfig.url}${getLocaleOpenGraphImagePath(locale.value)}`,
    ogImageWidth: OPEN_GRAPH_IMAGE_WIDTH_IN_PX,
    ogImageHeight: OPEN_GRAPH_IMAGE_HEIGHT_IN_PX,
    ogImageType: 'image/jpeg',
    ogImageAlt: () => t('seo.ogImageAlt'),
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage :page-key="getPageKey" />
    </NuxtLayout>
</template>

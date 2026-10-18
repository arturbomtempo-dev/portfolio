<script setup lang="ts">
import { PROFILE } from '~/data/profile';
import { SOCIAL_LINKS } from '~/data/socialLinks';
const localeHead = useLocaleHead();
const getPageKey = useLocaleAgnosticRouteKey();
const siteConfig = useSiteConfig();
const { t, locale, localeProperties } = useI18n();

useHead(() => ({
    htmlAttrs: localeHead.value.htmlAttrs,
    link: localeHead.value.link,
    meta: localeHead.value.meta,
}));

const profileUrls = SOCIAL_LINKS.map(({ href }) => href).filter((href) =>
    href.startsWith('https://')
);

useHead(() => ({
    script: [
        {
            key: 'structured-data',
            type: 'application/ld+json',
            innerHTML: JSON.stringify(
                createPersonStructuredData({
                    siteUrl: siteConfig.url,
                    siteName: siteConfig.name,
                    name: PROFILE.name,
                    jobTitle: t('home.role'),
                    description: t('home.seo.description'),
                    imagePath: PROFILE.avatarUrl,
                    languageTag: localeProperties.value.language ?? 'pt-BR',
                    profileUrls,
                })
            ),
        },
    ],
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

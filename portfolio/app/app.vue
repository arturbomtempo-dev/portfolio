<script setup lang="ts">
const localeHead = useLocaleHead();
const getPageKey = useLocaleAgnosticRouteKey();

useHead(() => ({
    htmlAttrs: localeHead.value.htmlAttrs,
    link: localeHead.value.link,
    meta: localeHead.value.meta,
}));
</script>

<template>
    <NuxtLayout>
        <NuxtPage :page-key="getPageKey" />
    </NuxtLayout>
</template>

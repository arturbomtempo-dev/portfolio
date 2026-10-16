<script setup lang="ts">
const NOT_FOUND_STATUS_CODE = 404;

const { t } = useI18n();
const route = useRoute();
const siteConfig = useSiteConfig();
const talks = useTalksContent();

const talkIndex = computed(() =>
    talks.value.findIndex((candidate) => candidate.id === String(route.params.id))
);
const talk = computed(() => talks.value[talkIndex.value]);
const newerTalk = computed(() =>
    talkIndex.value > 0 ? talks.value[talkIndex.value - 1] : undefined
);
const olderTalk = computed(() =>
    talkIndex.value >= 0 ? talks.value[talkIndex.value + 1] : undefined
);

if (!talk.value) {
    setResponseStatus(NOT_FOUND_STATUS_CODE);
}

const pageTitle = computed(() =>
    talk.value
        ? t('talkDetails.seo.title', { title: talk.value.title })
        : t('talkDetails.notFound.seo.title')
);

useSeoMeta({
    title: () => pageTitle.value,
    description: () => talk.value?.description,
    ogTitle: () => pageTitle.value,
    ogDescription: () => talk.value?.description,
    ogImage: () =>
        talk.value ? `${siteConfig.url}${getTalkOpenGraphImagePath(talk.value.id)}` : undefined,
    ogImageAlt: () => talk.value?.title,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    robots: () => (talk.value ? undefined : 'noindex, nofollow'),
});
</script>

<template>
    <div v-if="talk" class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-4xl px-8">
            <TalksTalkDetails :talk="talk" :newer-talk="newerTalk" :older-talk="olderTalk" />
        </div>
    </div>
    <div v-else class="flex min-h-screen items-center justify-center px-6 py-20">
        <div class="mx-auto w-full max-w-2xl sm:px-8">
            <TalksTalkNotFound />
        </div>
    </div>
</template>

<script setup lang="ts">
import { CalendarDays, MapPin } from '@lucide/vue';
import type { Talk } from '~/types/talk';

interface Props {
    talk: Talk;
    newerTalk?: Talk;
    olderTalk?: Talk;
}

const props = withDefaults(defineProps<Props>(), {
    newerTalk: undefined,
    olderTalk: undefined,
});

const COVER_WIDTH_IN_PX = 1600;
const COVER_HEIGHT_IN_PX = 900;
const COVER_SIZES = 'sm:95vw lg:832px';

const { t, localeProperties } = useI18n();
const localePath = useLocalePath();

const formattedDate = computed(() =>
    formatTalkDate(props.talk.date, props.talk.endDate, localeProperties.value.language ?? 'pt-BR')
);
</script>

<template>
    <article>
        <UiBackLink :to="localePath('/talks')" should-return-to-previous-page class="mb-8">
            {{ t('talkDetails.backButton') }}
        </UiBackLink>

        <div class="animate-fade-in">
            <div
                class="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
            >
                <TalksTalkTypeBadge :type="props.talk.type" />
                <span class="flex items-center gap-1.5">
                    <CalendarDays class="size-4 shrink-0" />
                    <time :datetime="props.talk.date">{{ formattedDate }}</time>
                </span>
                <span class="flex items-center gap-1.5">
                    <MapPin class="size-4 shrink-0" />
                    {{ props.talk.location }}
                </span>
            </div>

            <header class="mb-8">
                <h1 class="glow-text mb-2 text-3xl font-bold sm:text-4xl">
                    {{ props.talk.title }}
                </h1>
                <p v-if="props.talk.eventName" class="text-lg text-muted-foreground">
                    {{ props.talk.eventName }}
                </p>
            </header>

            <div
                class="relative mb-8 aspect-video overflow-hidden rounded-xl border border-border/50"
            >
                <NuxtImg
                    :src="props.talk.image"
                    :alt="props.talk.title"
                    :width="COVER_WIDTH_IN_PX"
                    :height="COVER_HEIGHT_IN_PX"
                    :sizes="COVER_SIZES"
                    :preload="{ fetchPriority: 'high' }"
                    fetchpriority="high"
                    class="size-full object-cover"
                />
            </div>

            <section class="mb-8">
                <h2 class="mb-3 text-xl font-semibold">{{ t('talkDetails.aboutTitle') }}</h2>
                <p class="leading-relaxed whitespace-pre-line text-foreground/90">
                    {{ props.talk.fullDescription }}
                </p>
            </section>

            <section class="mb-8">
                <h2 class="mb-3 text-xl font-semibold">{{ t('talkDetails.topicsTitle') }}</h2>
                <div class="flex flex-wrap gap-2">
                    <UiTechBadge v-for="topic in props.talk.topics" :key="topic">
                        {{ topic }}
                    </UiTechBadge>
                </div>
            </section>

            <TalksTalkGallery
                v-if="hasPhotoGallery(props.talk)"
                :photos="props.talk.gallery"
                :event-name="props.talk.eventName ?? props.talk.title"
            />

            <TalksTalkPagination
                v-if="props.newerTalk || props.olderTalk"
                :newer-talk="props.newerTalk"
                :older-talk="props.olderTalk"
            />
        </div>
    </article>
</template>

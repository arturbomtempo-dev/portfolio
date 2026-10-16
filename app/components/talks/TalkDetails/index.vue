<script setup lang="ts">
import { CalendarDays, CirclePlay, ExternalLink, MapPin, Presentation } from '@lucide/vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import type { Component } from 'vue';
import type { Talk } from '~/types/talk';

type TalkLinkKind = 'talk' | 'recording' | 'slides' | 'repository';

interface TalkLink {
    kind: TalkLinkKind;
    url: string;
    icon: Component;
}

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
    formatLongDate(props.talk.date, localeProperties.value.language ?? 'pt-BR')
);

const links = computed<TalkLink[]>(() => {
    const candidates: { kind: TalkLinkKind; url?: string; icon: Component }[] = [
        { kind: 'talk', url: props.talk.eventUrl, icon: ExternalLink },
        { kind: 'recording', url: props.talk.recordingUrl, icon: CirclePlay },
        { kind: 'slides', url: props.talk.slidesUrl, icon: Presentation },
        { kind: 'repository', url: props.talk.repositoryUrl, icon: IconBrandGithub },
    ];

    return candidates.filter((link): link is TalkLink => Boolean(link.url));
});
</script>

<template>
    <article>
        <UiBackLink :to="localePath('/talks')" class="mb-8">
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

            <h1 class="glow-text mb-2 text-3xl font-bold sm:text-4xl">{{ props.talk.title }}</h1>
            <p class="mb-8 text-lg text-muted-foreground">{{ props.talk.eventName }}</p>

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

            <div v-if="links.length" class="mb-8 flex flex-wrap gap-3">
                <UiBaseButton
                    v-for="(link, index) in links"
                    :key="link.kind"
                    :to="link.url"
                    target="_blank"
                    :variant="index === 0 ? 'primary' : 'outline-primary'"
                    class="gap-2"
                >
                    <component :is="link.icon" class="size-4" />
                    {{ t(`talkDetails.links.${link.kind}`) }}
                </UiBaseButton>
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
                v-if="props.talk.gallery.length"
                :photos="props.talk.gallery"
                :event-name="props.talk.eventName"
            />

            <TalksTalkPagination
                v-if="props.newerTalk || props.olderTalk"
                :newer-talk="props.newerTalk"
                :older-talk="props.olderTalk"
            />
        </div>
    </article>
</template>

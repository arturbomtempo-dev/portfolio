<script setup lang="ts">
import { CalendarDays, CirclePlay, ExternalLink, MapPin, Presentation } from '@lucide/vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import type { Component } from 'vue';
import { defineProps, withDefaults, } from 'vue';
import type { SpeakingEvent } from '~/types/event';

type EventLinkKind = 'event' | 'recording' | 'slides' | 'repository';

interface EventLink {
    kind: EventLinkKind;
    url: string;
    icon: Component;
}

interface Props {
    event: SpeakingEvent;
    newerEvent?: SpeakingEvent;
    olderEvent?: SpeakingEvent;
}

const props = withDefaults(defineProps<Props>(), {
    newerEvent: undefined,
    olderEvent: undefined,
});

const COVER_WIDTH_IN_PX = 1600;
const COVER_HEIGHT_IN_PX = 900;
const COVER_SIZES = 'sm:95vw lg:832px';

const { t, localeProperties } = useI18n();
const localePath = useLocalePath();

const formattedDate = computed(() =>
    formatLongDate(props.event.date, localeProperties.value.language ?? 'pt-BR')
);

const links = computed<EventLink[]>(() => {
    const candidates: { kind: EventLinkKind; url?: string; icon: Component }[] = [
        { kind: 'event', url: props.event.eventUrl, icon: ExternalLink },
        { kind: 'recording', url: props.event.recordingUrl, icon: CirclePlay },
        { kind: 'slides', url: props.event.slidesUrl, icon: Presentation },
        { kind: 'repository', url: props.event.repositoryUrl, icon: IconBrandGithub },
    ];

    return candidates.filter((link): link is EventLink => Boolean(link.url));
});
</script>

<template>
    <article>
        <UiBackLink :to="localePath('/events')" class="mb-8">
            {{ t('eventDetails.backButton') }}
        </UiBackLink>

        <div class="animate-fade-in">
            <div
                class="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
            >
                <EventsEventTypeBadge :type="props.event.type" />
                <span class="flex items-center gap-1.5">
                    <CalendarDays class="size-4 shrink-0" />
                    <time :datetime="props.event.date">{{ formattedDate }}</time>
                </span>
                <span class="flex items-center gap-1.5">
                    <MapPin class="size-4 shrink-0" />
                    {{ props.event.location }}
                </span>
            </div>

            <h1 class="glow-text mb-2 text-3xl font-bold sm:text-4xl">{{ props.event.title }}</h1>
            <p class="mb-8 text-lg text-muted-foreground">{{ props.event.eventName }}</p>

            <div
                class="relative mb-8 aspect-video overflow-hidden rounded-xl border border-border/50"
            >
                <NuxtImg
                    :src="props.event.image"
                    :alt="props.event.title"
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
                    {{ t(`eventDetails.links.${link.kind}`) }}
                </UiBaseButton>
            </div>

            <section class="mb-8">
                <h2 class="mb-3 text-xl font-semibold">{{ t('eventDetails.aboutTitle') }}</h2>
                <p class="leading-relaxed whitespace-pre-line text-foreground/90">
                    {{ props.event.fullDescription }}
                </p>
            </section>

            <section class="mb-8">
                <h2 class="mb-3 text-xl font-semibold">{{ t('eventDetails.topicsTitle') }}</h2>
                <div class="flex flex-wrap gap-2">
                    <UiTechBadge v-for="topic in props.event.topics" :key="topic">
                        {{ topic }}
                    </UiTechBadge>
                </div>
            </section>

            <EventsEventGallery
                v-if="props.event.gallery.length"
                :photos="props.event.gallery"
                :event-name="props.event.eventName"
            />

            <EventsEventPagination
                v-if="props.newerEvent || props.olderEvent"
                :newer-event="props.newerEvent"
                :older-event="props.olderEvent"
            />
        </div>
    </article>
</template>

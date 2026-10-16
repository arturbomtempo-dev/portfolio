<script setup lang="ts">
import { ArrowUpRight, Images, MapPin } from '@lucide/vue';
import type { HTMLAttributes } from 'vue';
import type { SpeakingEvent } from '~/types/event';

interface Props {
    event: SpeakingEvent;
    to: string;
    isAboveTheFold?: boolean;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    isAboveTheFold: false,
    class: undefined,
});

const THUMBNAIL_WIDTH_IN_PX = 640;
const THUMBNAIL_HEIGHT_IN_PX = 360;
const THUMBNAIL_SIZES = 'md:90vw lg:288px';
const VISIBLE_TOPICS_COUNT = 3;

const { t } = useI18n();

const visibleTopics = computed(() => props.event.topics.slice(0, VISIBLE_TOPICS_COUNT));
</script>

<template>
    <UiBaseCard
        :class="
            cn(
                'surface-card-glow group relative flex cursor-pointer flex-col gap-5 overflow-hidden lg:flex-row lg:gap-6',
                props.class
            )
        "
    >
        <div
            class="relative aspect-video shrink-0 overflow-hidden rounded-md lg:aspect-auto lg:min-h-48 lg:w-72"
        >
            <NuxtImg
                :src="props.event.image"
                :alt="props.event.title"
                :width="THUMBNAIL_WIDTH_IN_PX"
                :height="THUMBNAIL_HEIGHT_IN_PX"
                :sizes="THUMBNAIL_SIZES"
                :loading="props.isAboveTheFold ? 'eager' : 'lazy'"
                :fetchpriority="props.isAboveTheFold ? 'high' : 'auto'"
                decoding="async"
                class="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <EventsEventTypeBadge :type="props.event.type" class="absolute top-3 left-3" />
        </div>
        <div class="flex min-w-0 flex-1 flex-col">
            <p class="mb-1 text-sm font-medium text-primary">{{ props.event.eventName }}</p>
            <div class="mb-2 flex items-start justify-between gap-2">
                <h3 class="text-xl font-semibold transition-colors group-hover:text-primary">
                    <NuxtLink
                        :to="props.to"
                        class="block w-full text-left after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                    >
                        {{ props.event.title }}
                    </NuxtLink>
                </h3>
                <ArrowUpRight
                    class="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
            </div>
            <p class="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {{ props.event.description }}
            </p>
            <div class="mb-4 flex flex-wrap gap-2">
                <UiTechBadge v-for="topic in visibleTopics" :key="topic" class="text-xs">
                    {{ topic }}
                </UiTechBadge>
            </div>
            <div
                class="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border/50 pt-4 text-sm text-muted-foreground"
            >
                <span class="flex items-center gap-1.5">
                    <MapPin class="size-4 shrink-0" />
                    {{ props.event.location }}
                </span>
                <span v-if="props.event.gallery.length" class="flex items-center gap-1.5">
                    <Images class="size-4 shrink-0" />
                    {{ t('events.photos', props.event.gallery.length) }}
                </span>
            </div>
        </div>
    </UiBaseCard>
</template>

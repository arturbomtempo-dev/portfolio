<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@lucide/vue';
import type { SpeakingEvent } from '~/types/event';

interface Props {
    newerEvent?: SpeakingEvent;
    olderEvent?: SpeakingEvent;
}

const props = withDefaults(defineProps<Props>(), {
    newerEvent: undefined,
    olderEvent: undefined,
});

const { t } = useI18n();
const localePath = useLocalePath();
const NuxtLink = resolveComponent('NuxtLink');

const LINK_CLASSES =
    'group flex h-full flex-col gap-1 p-5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none';
</script>

<template>
    <nav
        :aria-label="t('eventDetails.pagination.label')"
        class="mt-12 grid grid-cols-1 gap-4 border-t border-border/50 pt-8 sm:grid-cols-2"
    >
        <UiBaseCard
            v-if="props.olderEvent"
            :as="NuxtLink"
            :to="localePath(`/events/${props.olderEvent.id}`)"
            :class="LINK_CLASSES"
        >
            <span class="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowLeft class="size-4 transition-transform group-hover:-translate-x-1" />
                {{ t('eventDetails.pagination.older') }}
            </span>
            <span class="font-heading font-semibold transition-colors group-hover:text-primary">
                {{ props.olderEvent.title }}
            </span>
        </UiBaseCard>
        <UiBaseCard
            v-if="props.newerEvent"
            :as="NuxtLink"
            :to="localePath(`/events/${props.newerEvent.id}`)"
            :class="cn(LINK_CLASSES, 'items-end text-right sm:col-start-2')"
        >
            <span class="flex items-center gap-2 text-sm text-muted-foreground">
                {{ t('eventDetails.pagination.newer') }}
                <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span class="font-heading font-semibold transition-colors group-hover:text-primary">
                {{ props.newerEvent.title }}
            </span>
        </UiBaseCard>
    </nav>
</template>

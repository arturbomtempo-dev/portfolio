<script setup lang="ts">
import { CalendarDays } from '@lucide/vue';
import type { SpeakingEvent } from '~/types/event';

interface Props {
    event: SpeakingEvent;
    to: string;
    isOnLeftSide: boolean;
    isAboveTheFold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isAboveTheFold: false,
});

const { localeProperties } = useI18n();

const formattedDate = computed(() =>
    formatLongDate(props.event.date, localeProperties.value.language ?? 'pt-BR')
);
</script>

<template>
    <li class="group/event relative grid grid-cols-1 pl-12 lg:grid-cols-2 lg:gap-x-20 lg:pl-0">
        <span
            aria-hidden="true"
            class="absolute top-0.5 left-4 z-10 size-4 -translate-x-1/2 rounded-full bg-primary shadow-glow-sm ring-4 ring-background transition-transform duration-300 group-hover/event:scale-125 lg:top-7.5 lg:left-1/2"
        />
        <p
            :class="
                cn(
                    'mb-3 flex items-center gap-2 text-sm font-semibold text-primary lg:row-start-1 lg:mb-0 lg:self-start lg:pt-7',
                    props.isOnLeftSide
                        ? 'lg:col-start-2 lg:justify-start'
                        : 'lg:col-start-1 lg:justify-end'
                )
            "
        >
            <CalendarDays class="size-4 shrink-0" />
            <time :datetime="props.event.date">{{ formattedDate }}</time>
        </p>
        <EventsEventCard
            :event="props.event"
            :to="props.to"
            :is-above-the-fold="props.isAboveTheFold"
            :class="
                props.isOnLeftSide
                    ? 'lg:col-start-1 lg:row-start-1'
                    : 'lg:col-start-2 lg:row-start-1'
            "
        />
    </li>
</template>

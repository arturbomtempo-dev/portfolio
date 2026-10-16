<script setup lang="ts">
import { CalendarDays } from '@lucide/vue';
import type { Talk } from '~/types/talk';

interface Props {
    talk: Talk;
    to: string;
    isAboveTheFold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isAboveTheFold: false,
});

const { localeProperties } = useI18n();

const formattedDate = computed(() =>
    formatLongDate(props.talk.date, localeProperties.value.language ?? 'pt-BR')
);
</script>

<template>
    <li class="group/talk relative pl-10 sm:pl-12">
        <span
            aria-hidden="true"
            class="absolute top-0.5 left-4 z-10 size-4 -translate-x-1/2 rounded-full bg-primary shadow-glow-sm ring-4 ring-background transition-transform duration-300 group-hover/talk:scale-125"
        />
        <p class="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
            <CalendarDays class="size-4 shrink-0" />
            <time :datetime="props.talk.date">{{ formattedDate }}</time>
        </p>
        <TalksTalkCard
            :talk="props.talk"
            :to="props.to"
            :is-above-the-fold="props.isAboveTheFold"
        />
    </li>
</template>

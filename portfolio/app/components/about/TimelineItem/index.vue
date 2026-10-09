<script setup lang="ts">
import type { TimelineEntry } from '~/types/about';

interface Props {
    entry: TimelineEntry;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    select: [];
}>();
</script>

<template>
    <div
        class="group relative cursor-pointer rounded-r-lg py-2 pr-4 pl-8 transition-all hover:bg-muted/30"
    >
        <span
            aria-hidden="true"
            class="absolute top-4 bottom-0 left-0 w-0.5 bg-primary/30 transition-colors group-hover:bg-primary/60"
        />
        <span
            aria-hidden="true"
            class="absolute top-4 left-0 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-glow-sm transition-transform group-hover:scale-125"
        />
        <p class="mb-1 text-sm text-primary">{{ props.entry.year }}</p>
        <h3 class="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
            <button
                type="button"
                class="block w-full text-left after:absolute after:inset-0 after:rounded-r-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                @click="emit('select')"
            >
                {{ props.entry.title }}
            </button>
        </h3>
        <p class="text-muted-foreground">{{ props.entry.organization }}</p>
    </div>
</template>

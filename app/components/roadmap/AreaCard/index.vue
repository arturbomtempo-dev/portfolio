<script setup lang="ts">
import type { RoadmapArea } from '~/types/roadmap';

interface Props {
    area: RoadmapArea;
    isSelected: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    select: [];
}>();
</script>

<template>
    <button
        type="button"
        :aria-pressed="props.isSelected"
        :aria-controls="ROADMAP_AREA_PANEL_ID"
        :class="
            cn(
                'group flex h-full w-full flex-col items-start gap-3 rounded-lg border p-4 text-left transition duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
                props.isSelected
                    ? 'border-primary bg-primary/10 shadow-glow-sm'
                    : 'border-border/60 bg-card/60 hover:-translate-y-0.5 hover:border-primary/50'
            )
        "
        @click="emit('select')"
    >
        <span
            aria-hidden="true"
            :class="
                cn(
                    'flex size-10 items-center justify-center rounded-lg transition-colors duration-300',
                    props.isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                )
            "
        >
            <component :is="props.area.icon" class="size-5" />
        </span>
        <span class="font-heading text-sm/snug font-semibold sm:text-base/snug">
            {{ props.area.title }}
        </span>
    </button>
</template>

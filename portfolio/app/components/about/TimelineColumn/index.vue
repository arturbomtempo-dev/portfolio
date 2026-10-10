<script setup lang="ts">
import type { LucideIcon } from '@lucide/vue';
import type { TimelineEntry } from '~/types/about';

interface Props {
    icon: LucideIcon;
    title: string;
    entries: TimelineEntry[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
    select: [index: number];
}>();
</script>

<template>
    <div>
        <div class="mb-6 flex items-center gap-3">
            <component :is="props.icon" class="h-8 w-8 text-primary" />
            <h2 class="text-2xl font-bold">{{ props.title }}</h2>
        </div>
        <ul class="space-y-6">
            <li v-for="(entry, index) in props.entries" :key="`${entry.year}-${entry.title}`">
                <AboutTimelineItem :entry="entry" @select="emit('select', index)" />
            </li>
        </ul>
    </div>
</template>

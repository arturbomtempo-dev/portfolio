<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import type { Project } from '~/types/project';

interface Props {
    project: Project;
    to: string;
    isAboveTheFold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isAboveTheFold: false,
});
</script>

<template>
    <UiBaseCard class="surface-card-glow group relative h-full cursor-pointer overflow-hidden">
        <div class="relative aspect-video overflow-hidden">
            <img
                :src="props.project.image"
                :alt="props.project.title"
                :loading="props.isAboveTheFold ? 'eager' : 'lazy'"
                decoding="async"
                class="size-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div class="py-3 sm:py-4">
            <div class="mb-2 flex items-start justify-between">
                <h3 class="text-xl font-semibold transition-colors group-hover:text-primary">
                    <NuxtLink
                        :to="props.to"
                        class="block w-full text-left after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                    >
                        {{ props.project.title }}
                    </NuxtLink>
                </h3>
                <ArrowUpRight
                    class="ml-2 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
            </div>
            <p class="mb-3 line-clamp-2 text-sm text-muted-foreground">
                {{ props.project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
                <UiTechBadge v-for="tech in props.project.cardTechs" :key="tech" class="text-xs">
                    {{ tech }}
                </UiTechBadge>
            </div>
        </div>
    </UiBaseCard>
</template>

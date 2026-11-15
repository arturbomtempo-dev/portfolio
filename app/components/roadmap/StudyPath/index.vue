<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import type { RoadmapStep } from '~/types/roadmap';

interface Props {
    steps: RoadmapStep[];
}

const props = defineProps<Props>();

const { t } = useI18n();
</script>

<template>
    <ol class="relative space-y-8">
        <li v-for="(step, index) in props.steps" :key="step.id" class="relative pl-12 sm:pl-14">
            <span
                v-if="index < props.steps.length - 1"
                aria-hidden="true"
                class="absolute top-10 -bottom-8 left-4.5 w-0.5 bg-linear-to-b from-primary/50 to-primary/10 sm:left-5"
            />
            <span
                aria-hidden="true"
                class="absolute top-0 left-0 flex size-9 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-sm font-bold text-primary shadow-glow-sm sm:size-10"
            >
                {{ index + 1 }}
            </span>
            <p class="mb-0.5 text-xs font-semibold tracking-wide text-primary uppercase">
                {{ t('roadmap.area.step', { number: index + 1 }) }}
            </p>
            <h5 class="mb-1.5 text-base font-semibold sm:text-lg">{{ step.title }}</h5>
            <p class="mb-3 text-sm/relaxed text-muted-foreground sm:text-base/relaxed">
                {{ step.description }}
            </p>
            <ul
                v-if="step.technologies.length"
                :aria-label="t('roadmap.area.technologies')"
                class="flex flex-wrap gap-2"
            >
                <li v-for="technology in step.technologies" :key="technology">
                    <UiTechBadge class="text-xs">{{ technology }}</UiTechBadge>
                </li>
            </ul>
            <div v-if="step.options.length" :class="{ 'mt-4': step.technologies.length > 0 }">
                <p class="mb-3 text-sm font-semibold">{{ t('roadmap.area.chooseOne') }}</p>
                <ul class="grid gap-3 sm:grid-cols-2">
                    <li
                        v-for="option in step.options"
                        :key="option.id"
                        class="rounded-lg border border-border/60 bg-muted/30 p-4 transition-colors duration-300 hover:border-primary/40"
                    >
                        <p class="mb-2.5 font-medium">{{ option.title }}</p>
                        <ol
                            :aria-label="t('roadmap.area.technologies')"
                            class="flex flex-wrap items-center gap-1.5"
                        >
                            <li
                                v-for="(technology, technologyIndex) in option.technologies"
                                :key="technology"
                                class="flex items-center gap-1.5"
                            >
                                <ArrowRight
                                    v-if="technologyIndex > 0"
                                    class="size-3.5 shrink-0 text-muted-foreground"
                                    aria-hidden="true"
                                />
                                <UiTechBadge class="text-xs">{{ technology }}</UiTechBadge>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </li>
    </ol>
</template>

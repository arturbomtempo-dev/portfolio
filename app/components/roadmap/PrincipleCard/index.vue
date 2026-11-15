<script setup lang="ts">
import { ChevronDown } from '@lucide/vue';
import type { RoadmapLevel, RoadmapPrinciple } from '~/types/roadmap';

interface Props {
    principle: RoadmapPrinciple;
}

const props = defineProps<Props>();

const LEVEL_STEPS: RoadmapLevel[] = ['beginner', 'intermediate', 'advanced'];

const { t } = useI18n();

const isExpanded = ref(false);
const detailsId = computed(() => `roadmap-principle-${props.principle.id}`);
const levelIndex = computed(() => LEVEL_STEPS.indexOf(props.principle.level));
const levelLabel = computed(() =>
    t('roadmap.principles.levelLabel', {
        level: t(`roadmap.principles.levels.${props.principle.level}`),
    })
);
</script>

<template>
    <UiBaseCard as="article" :is-hoverable="false" class="flex h-full flex-col p-5">
        <div class="mb-3 flex items-start justify-between gap-3">
            <h3 class="text-lg font-semibold">{{ props.principle.title }}</h3>
            <span
                class="flex shrink-0 items-center gap-1.5 pt-1.5 text-xs text-muted-foreground"
                :title="levelLabel"
            >
                <span class="sr-only">{{ levelLabel }}</span>
                <span aria-hidden="true" class="flex gap-0.5">
                    <span
                        v-for="(level, index) in LEVEL_STEPS"
                        :key="level"
                        :class="
                            cn(
                                'h-1.5 w-3 rounded-full',
                                index <= levelIndex ? 'bg-primary' : 'bg-border'
                            )
                        "
                    />
                </span>
                <span aria-hidden="true">
                    {{ t(`roadmap.principles.levels.${props.principle.level}`) }}
                </span>
            </span>
        </div>
        <p class="mb-4 text-sm/relaxed text-muted-foreground">{{ props.principle.summary }}</p>
        <div
            v-show="isExpanded"
            :id="detailsId"
            class="mb-4 space-y-3 text-sm/relaxed motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-300"
        >
            <p class="text-foreground/90">{{ props.principle.details }}</p>
            <p>
                <span class="font-semibold text-primary">
                    {{ t('roadmap.principles.whenToLearn') }}:
                </span>
                {{ props.principle.whenToLearn }}
            </p>
        </div>
        <button
            type="button"
            :aria-expanded="isExpanded"
            :aria-controls="detailsId"
            class="mt-auto inline-flex items-center gap-1.5 self-start rounded-md text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            @click="isExpanded = !isExpanded"
        >
            {{ isExpanded ? t('roadmap.principles.showLess') : t('roadmap.principles.showMore') }}
            <ChevronDown
                :class="cn('size-4 transition-transform duration-300', isExpanded && 'rotate-180')"
                aria-hidden="true"
            />
        </button>
    </UiBaseCard>
</template>

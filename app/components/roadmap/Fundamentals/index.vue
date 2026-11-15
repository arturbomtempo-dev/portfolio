<script setup lang="ts">
import type { RoadmapFundamental } from '~/types/roadmap';

interface Props {
    fundamentals: RoadmapFundamental[];
}

const props = defineProps<Props>();

const { t } = useI18n();
</script>

<template>
    <section aria-labelledby="roadmap-fundamentals" class="animate-fade-in">
        <RoadmapSectionHeading
            id="roadmap-fundamentals"
            :title="t('roadmap.fundamentals.title')"
            :description="t('roadmap.fundamentals.description')"
        />
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="fundamental in props.fundamentals" :key="fundamental.id">
                <UiBaseCard :is-hoverable="false" class="flex h-full gap-4 p-5">
                    <span
                        aria-hidden="true"
                        class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    >
                        <component :is="fundamental.icon" class="size-5" />
                    </span>
                    <div>
                        <h3 class="mb-1 font-semibold">{{ fundamental.title }}</h3>
                        <p class="text-sm/relaxed text-muted-foreground">
                            {{ fundamental.description }}
                        </p>
                    </div>
                </UiBaseCard>
            </li>
        </ul>
    </section>
</template>

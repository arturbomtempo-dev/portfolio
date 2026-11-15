<script setup lang="ts">
import { ChevronDown, CircleCheck, Lightbulb, Route, Sparkles } from '@lucide/vue';
import type { RoadmapArea } from '~/types/roadmap';

interface Props {
    area: RoadmapArea;
}

const props = defineProps<Props>();

const { t } = useI18n();

const isPathVisible = ref(false);
const pathId = computed(() => `roadmap-path-${props.area.id}`);
</script>

<template>
    <UiBaseCard
        as="article"
        :is-hoverable="false"
        :aria-labelledby="`roadmap-area-title-${props.area.id}`"
        class="p-6 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 sm:p-8"
    >
        <header class="mb-8 flex items-start gap-4">
            <span
                aria-hidden="true"
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow-sm"
            >
                <component :is="props.area.icon" class="size-6" />
            </span>
            <div>
                <h3
                    :id="`roadmap-area-title-${props.area.id}`"
                    class="mb-1 text-2xl font-bold sm:text-3xl"
                >
                    {{ props.area.title }}
                </h3>
                <p class="text-muted-foreground">{{ props.area.summary }}</p>
            </div>
        </header>

        <div class="grid gap-8 lg:grid-cols-2">
            <div class="space-y-6">
                <section>
                    <h4 class="mb-2 text-lg font-semibold">
                        {{ t('roadmap.area.whatItDoes') }}
                    </h4>
                    <p class="leading-relaxed text-foreground/90">{{ props.area.description }}</p>
                </section>
                <aside class="rounded-lg border border-primary/25 bg-primary/5 p-4">
                    <p class="mb-1 flex items-center gap-2 text-sm font-semibold text-primary">
                        <Lightbulb class="size-4 shrink-0" aria-hidden="true" />
                        {{ t('roadmap.area.myth') }}
                    </p>
                    <p class="text-sm/relaxed text-foreground/90">{{ props.area.myth }}</p>
                </aside>
            </div>
            <div class="space-y-6">
                <section>
                    <h4 class="mb-3 text-lg font-semibold">{{ t('roadmap.area.dailyWork') }}</h4>
                    <ul class="space-y-2.5">
                        <li
                            v-for="responsibility in props.area.responsibilities"
                            :key="responsibility"
                            class="flex items-start gap-2.5 text-foreground/90"
                        >
                            <CircleCheck
                                class="mt-0.5 size-5 shrink-0 text-primary"
                                aria-hidden="true"
                            />
                            <span>{{ responsibility }}</span>
                        </li>
                    </ul>
                </section>
                <aside class="rounded-lg border border-border/60 bg-muted/40 p-4">
                    <p class="mb-1 flex items-center gap-2 text-sm font-semibold">
                        <Sparkles class="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {{ t('roadmap.area.aiImpact') }}
                    </p>
                    <p class="text-sm/relaxed text-foreground/90">{{ props.area.aiImpact }}</p>
                </aside>
            </div>
        </div>

        <div class="mt-8 border-t border-border/50 pt-8">
            <UiBaseButton
                type="button"
                variant="outline-primary"
                size="lg"
                :aria-expanded="isPathVisible"
                :aria-controls="pathId"
                class="group w-full sm:w-auto"
                @click="isPathVisible = !isPathVisible"
            >
                <Route />
                {{ isPathVisible ? t('roadmap.area.hidePath') : t('roadmap.area.showPath') }}
                <ChevronDown
                    :class="cn('transition-transform duration-300', isPathVisible && 'rotate-180')"
                />
            </UiBaseButton>
            <div
                v-show="isPathVisible"
                :id="pathId"
                class="mt-8 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-top-2 motion-safe:duration-500"
            >
                <h4 class="mb-1 text-lg font-semibold">{{ t('roadmap.area.pathTitle') }}</h4>
                <p class="mb-8 text-sm text-muted-foreground">
                    {{ t('roadmap.area.pathDescription') }}
                </p>
                <RoadmapStudyPath :steps="props.area.steps" />
            </div>
        </div>
    </UiBaseCard>
</template>

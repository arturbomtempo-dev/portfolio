<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
import { siGithub } from 'simple-icons';
import { defineProps, } from 'vue';
import type { Project } from '~/types/project';

interface Props {
    project: Project;
}

const props = defineProps<Props>();

const { t } = useI18n();
const localePath = useLocalePath();

const hasLinks = computed(() => Boolean(props.project.liveUrl || props.project.githubUrl));
</script>

<template>
    <article>
        <UiBackLink :to="localePath('/projects')" class="mb-8">
            {{ t('projectDetails.backButton') }}
        </UiBackLink>

        <div class="animate-fade-in">
            <h1 class="glow-text mb-2 text-3xl font-bold sm:text-4xl">{{ props.project.title }}</h1>
            <p class="mb-8 text-lg text-muted-foreground">{{ props.project.description }}</p>

            <div
                class="relative mb-8 aspect-video overflow-hidden rounded-xl border border-border/50"
            >
                <img
                    :src="props.project.image"
                    :alt="props.project.title"
                    fetchpriority="high"
                    class="size-full object-cover"
                />
            </div>

            <div v-if="hasLinks" class="mb-8 flex flex-wrap gap-3">
                <UiBaseButton
                    v-if="props.project.liveUrl"
                    :to="props.project.liveUrl"
                    target="_blank"
                    class="gap-2 bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                >
                    <ExternalLink class="size-4" />
                    {{ t('projectDetails.viewProject') }}
                </UiBaseButton>
                <UiBaseButton
                    v-if="props.project.githubUrl"
                    :to="props.project.githubUrl"
                    target="_blank"
                    variant="outline"
                    class="gap-2"
                >
                    <UiBrandIcon :icon="siGithub" class="size-4" />
                    {{ t('projectDetails.viewCode') }}
                </UiBaseButton>
            </div>

            <section class="mb-8">
                <h2 class="mb-3 text-xl font-semibold">{{ t('projectDetails.aboutTitle') }}</h2>
                <p class="leading-relaxed whitespace-pre-line text-foreground/90">
                    {{ props.project.fullDescription }}
                </p>
            </section>

            <section>
                <h2 class="mb-3 text-xl font-semibold">
                    {{ t('projectDetails.technologiesTitle') }}
                </h2>
                <div class="flex flex-wrap gap-2">
                    <UiTechBadge v-for="tech in props.project.allTechs" :key="tech">
                        {{ tech }}
                    </UiTechBadge>
                </div>
            </section>
        </div>
    </article>
</template>

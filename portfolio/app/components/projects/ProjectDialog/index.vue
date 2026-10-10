<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
import { DialogDescription, DialogTitle } from 'reka-ui';
import { siGithub } from 'simple-icons';
import type { Project } from '~/types/project';

interface Props {
    project: Project;
}

const props = defineProps<Props>();

const isOpen = defineModel<boolean>('open', { required: true });

const { t } = useI18n();

const hasLinks = computed(() => Boolean(props.project.liveUrl || props.project.githubUrl));
</script>

<template>
    <UiBaseDialog
        v-model:open="isOpen"
        class="max-h-[90vh] overflow-y-auto border-border/50 bg-card-glass backdrop-blur-xl sm:max-w-175"
    >
        <div class="flex flex-col gap-4 text-center sm:text-left">
            <DialogTitle class="pr-8 font-heading text-2xl font-semibold tracking-tight">
                {{ props.project.title }}
            </DialogTitle>
            <DialogDescription class="text-base text-muted-foreground">
                {{ props.project.description }}
            </DialogDescription>
            <div v-if="hasLinks" class="flex gap-3 pt-1">
                <UiBaseButton
                    v-if="props.project.liveUrl"
                    :to="props.project.liveUrl"
                    target="_blank"
                    size="sm"
                    class="gap-2 bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                >
                    <ExternalLink class="size-4" />
                    <span>{{ t('projects.viewProject') }}</span>
                </UiBaseButton>
                <UiBaseButton
                    v-if="props.project.githubUrl"
                    :to="props.project.githubUrl"
                    target="_blank"
                    variant="outline"
                    size="sm"
                    class="gap-2"
                >
                    <UiBrandIcon :icon="siGithub" class="size-4" />
                    <span>{{ t('projects.viewCode') }}</span>
                </UiBaseButton>
            </div>
            <div class="relative aspect-video overflow-hidden rounded-lg border border-border/50">
                <img
                    :src="props.project.image"
                    :alt="props.project.title"
                    class="size-full object-cover"
                />
            </div>
        </div>

        <div class="mt-4 space-y-4">
            <div>
                <h4 class="mb-3 font-heading text-lg font-semibold">
                    {{ t('projects.aboutTitle') }}
                </h4>
                <p class="leading-relaxed whitespace-pre-line text-foreground/90">
                    {{ props.project.fullDescription }}
                </p>
            </div>
            <div>
                <h4 class="mb-3 font-heading text-lg font-semibold">
                    {{ t('projects.technologiesTitle') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                    <UiTechBadge v-for="tech in props.project.allTechs" :key="tech">
                        {{ tech }}
                    </UiTechBadge>
                </div>
            </div>
        </div>
    </UiBaseDialog>
</template>

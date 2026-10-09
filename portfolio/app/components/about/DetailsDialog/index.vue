<script setup lang="ts">
import { DialogDescription, DialogTitle } from 'reka-ui';
import type { IconName } from '~/types/about';

interface Props {
    icon: IconName;
    eyebrow?: string;
    title: string;
    subtitle: string;
    description: string;
    listTitle: string;
    items: string[];
}

const props = withDefaults(defineProps<Props>(), {
    eyebrow: undefined,
});

const isOpen = defineModel<boolean>('open', { required: true });

const TITLE_CLASSES = 'font-heading text-2xl font-semibold tracking-tight';
</script>

<template>
    <UiBaseDialog
        v-model:open="isOpen"
        class="border-border/50 bg-card-glass backdrop-blur-xl sm:max-w-[600px]"
    >
        <div class="flex flex-col text-center sm:text-left">
            <template v-if="props.eyebrow">
                <div class="mb-2 flex items-center gap-3">
                    <Icon :name="props.icon" class="h-6 w-6 text-primary" />
                    <span class="text-sm font-medium text-primary">{{ props.eyebrow }}</span>
                </div>
                <DialogTitle :class="cn(TITLE_CLASSES, 'mt-1.5')">{{ props.title }}</DialogTitle>
            </template>
            <div v-else class="mb-2 flex items-center gap-3">
                <Icon :name="props.icon" class="h-6 w-6 text-primary" />
                <DialogTitle :class="TITLE_CLASSES">{{ props.title }}</DialogTitle>
            </div>
            <DialogDescription class="mt-1.5 text-base text-muted-foreground">
                {{ props.subtitle }}
            </DialogDescription>
        </div>

        <div class="mt-4 space-y-4">
            <p class="leading-relaxed text-foreground/90">{{ props.description }}</p>
            <div>
                <h4 class="mb-3 font-heading text-lg font-semibold">{{ props.listTitle }}</h4>
                <ul class="space-y-2">
                    <li
                        v-for="item in props.items"
                        :key="item"
                        class="flex items-start gap-2 text-foreground/80"
                    >
                        <Icon
                            name="portfolio:circle-check"
                            class="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        />
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </UiBaseDialog>
</template>

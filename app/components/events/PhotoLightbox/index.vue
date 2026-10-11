<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@lucide/vue';
import { DialogDescription, DialogTitle } from 'reka-ui';
import type { EventPhoto } from '~/types/event';

interface Props {
    photos: EventPhoto[];
    eventName: string;
}

const props = defineProps<Props>();

const isOpen = defineModel<boolean>('open', { required: true });
const selectedIndex = defineModel<number>('index', { required: true });

const PHOTO_WIDTH_IN_PX = 1600;
const PHOTO_HEIGHT_IN_PX = 1200;
const PHOTO_SIZES = 'sm:100vw lg:1024px';

const { t } = useI18n();

const selectedPhoto = computed(() => props.photos[selectedIndex.value]);
const hasMultiplePhotos = computed(() => props.photos.length > 1);

function showPhoto(index: number) {
    selectedIndex.value = (index + props.photos.length) % props.photos.length;
}

function showPreviousPhoto() {
    showPhoto(selectedIndex.value - 1);
}

function showNextPhoto() {
    showPhoto(selectedIndex.value + 1);
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPreviousPhoto();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNextPhoto();
    }
}
</script>

<template>
    <UiBaseDialog
        v-model:open="isOpen"
        class="border-border/50 bg-card-glass backdrop-blur-xl sm:max-w-5xl"
    >
        <div class="flex flex-col gap-4" @keydown="handleKeyDown">
            <div class="pr-8">
                <DialogTitle class="font-heading text-lg font-semibold">
                    {{ t('eventDetails.lightbox.title', { event: props.eventName }) }}
                </DialogTitle>
                <DialogDescription class="text-sm text-muted-foreground">
                    {{
                        t('eventDetails.lightbox.counter', {
                            index: selectedIndex + 1,
                            total: props.photos.length,
                        })
                    }}
                </DialogDescription>
            </div>

            <div class="relative overflow-hidden rounded-lg border border-border/50 bg-muted">
                <NuxtImg
                    v-if="selectedPhoto"
                    :key="selectedPhoto.src + selectedIndex"
                    :src="selectedPhoto.src"
                    :alt="selectedPhoto.alt"
                    :width="PHOTO_WIDTH_IN_PX"
                    :height="PHOTO_HEIGHT_IN_PX"
                    :sizes="PHOTO_SIZES"
                    class="mx-auto max-h-[60vh] w-full animate-in object-contain fade-in-0"
                />
                <template v-if="hasMultiplePhotos">
                    <UiBaseButton
                        variant="outline-primary"
                        size="icon"
                        class="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                        @click="showPreviousPhoto"
                    >
                        <ArrowLeft />
                        <span class="sr-only">{{ t('eventDetails.lightbox.previous') }}</span>
                    </UiBaseButton>
                    <UiBaseButton
                        variant="outline-primary"
                        size="icon"
                        class="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                        @click="showNextPhoto"
                    >
                        <ArrowRight />
                        <span class="sr-only">{{ t('eventDetails.lightbox.next') }}</span>
                    </UiBaseButton>
                </template>
            </div>
        </div>
    </UiBaseDialog>
</template>

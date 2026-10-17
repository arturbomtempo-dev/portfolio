<script setup lang="ts">
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from '@lucide/vue';
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
} from 'reka-ui';
import type { Photo } from '~/types/photo';

interface Props {
    photos: Photo[];
    title: string;
}

const props = defineProps<Props>();

const isOpen = defineModel<boolean>('open', { required: true });
const selectedIndex = defineModel<number>('index', { required: true });

const PHOTO_SIZES = 'md:100vw lg:1280px';
const THUMBNAIL_WIDTH_IN_PX = 96;
const THUMBNAIL_HEIGHT_IN_PX = 64;
const CENTERED_ORIGIN = '50% 50%';
const PERCENT = 100;

const { t } = useI18n();

const thumbnailRefs = useTemplateRef<HTMLButtonElement[]>('thumbnails');
const isZoomed = ref(false);
const zoomOrigin = ref(CENTERED_ORIGIN);

const selectedPhoto = computed(() => props.photos[selectedIndex.value]);
const hasMultiplePhotos = computed(() => props.photos.length > 1);

const counter = computed(() =>
    t('photoLightbox.counter', {
        index: selectedIndex.value + 1,
        total: props.photos.length,
    })
);

const NAVIGATION_BUTTON_CLASSES =
    'absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:flex';
const TOOLBAR_BUTTON_CLASSES =
    'flex size-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none';

function resetZoom() {
    isZoomed.value = false;
    zoomOrigin.value = CENTERED_ORIGIN;
}

function showPhoto(index: number) {
    selectedIndex.value = (index + props.photos.length) % props.photos.length;
}

function showPreviousPhoto() {
    showPhoto(selectedIndex.value - 1);
}

function showNextPhoto() {
    showPhoto(selectedIndex.value + 1);
}

const { startSwipe, finishSwipe, cancelSwipe, isSwipeClick } = useHorizontalSwipe({
    onSwipeLeft: showNextPhoto,
    onSwipeRight: showPreviousPhoto,
    isEnabled: () => !isZoomed.value,
});

function getOriginFromPointer(event: PointerEvent | MouseEvent) {
    if (!(event.currentTarget instanceof HTMLElement)) {
        return CENTERED_ORIGIN;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * PERCENT;
    const y = ((event.clientY - rect.top) / rect.height) * PERCENT;

    return `${x}% ${y}%`;
}

function toggleZoom(event?: MouseEvent) {
    if (isSwipeClick()) {
        return;
    }

    if (isZoomed.value) {
        resetZoom();
        return;
    }

    zoomOrigin.value = event ? getOriginFromPointer(event) : CENTERED_ORIGIN;
    isZoomed.value = true;
}

function followPointer(event: PointerEvent) {
    if (isZoomed.value) {
        zoomOrigin.value = getOriginFromPointer(event);
    }
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

watch(selectedIndex, async (index) => {
    resetZoom();
    await nextTick();
    thumbnailRefs.value?.[index]?.scrollIntoView({ block: 'nearest', inline: 'center' });
});

watch(isOpen, (isNowOpen) => {
    if (!isNowOpen) {
        resetZoom();
    }
});
</script>

<template>
    <DialogRoot v-model:open="isOpen">
        <DialogPortal>
            <DialogOverlay
                class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
            />
            <DialogContent
                class="fixed inset-0 z-50 flex flex-col text-white outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
                @keydown="handleKeyDown"
            >
                <header class="flex items-center gap-2 px-4 py-3 sm:px-6">
                    <div class="min-w-0 flex-1">
                        <DialogTitle class="truncate font-heading text-base font-semibold">
                            {{ props.title }}
                        </DialogTitle>
                        <DialogDescription class="text-sm text-white/70 tabular-nums">
                            {{ counter }}
                        </DialogDescription>
                    </div>
                    <button
                        type="button"
                        :aria-label="
                            isZoomed ? t('photoLightbox.zoomOut') : t('photoLightbox.zoomIn')
                        "
                        :aria-pressed="isZoomed"
                        :class="TOOLBAR_BUTTON_CLASSES"
                        @click="toggleZoom()"
                    >
                        <ZoomOut v-if="isZoomed" class="size-5" />
                        <ZoomIn v-else class="size-5" />
                    </button>
                    <DialogClose
                        :aria-label="t('photoLightbox.close')"
                        :class="TOOLBAR_BUTTON_CLASSES"
                    >
                        <X class="size-5" />
                    </DialogClose>
                </header>

                <div
                    class="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-2 sm:px-20"
                    @pointerdown="startSwipe"
                    @pointerup="finishSwipe"
                    @pointercancel="cancelSwipe"
                >
                    <button
                        v-if="hasMultiplePhotos"
                        type="button"
                        :aria-label="t('photoLightbox.previous')"
                        :class="cn(NAVIGATION_BUTTON_CLASSES, 'left-4')"
                        @click="showPreviousPhoto"
                    >
                        <ChevronLeft class="size-6" />
                    </button>

                    <div
                        :class="
                            cn(
                                'flex size-full items-center justify-center overflow-hidden',
                                isZoomed && 'touch-none'
                            )
                        "
                    >
                        <NuxtImg
                            v-if="selectedPhoto"
                            :key="selectedPhoto.src + selectedIndex"
                            :src="selectedPhoto.src"
                            :alt="selectedPhoto.alt"
                            :width="selectedPhoto.width"
                            :height="selectedPhoto.height"
                            :sizes="PHOTO_SIZES"
                            draggable="false"
                            :style="{ transformOrigin: zoomOrigin }"
                            :class="
                                cn(
                                    'max-h-full w-auto max-w-full rounded-md object-contain shadow-2xl shadow-black/50 transition-transform duration-300 ease-out select-none motion-safe:animate-in motion-safe:fade-in-0',
                                    isZoomed ? 'scale-200 cursor-zoom-out' : 'cursor-zoom-in'
                                )
                            "
                            @click="toggleZoom"
                            @pointermove="followPointer"
                        />
                    </div>

                    <button
                        v-if="hasMultiplePhotos"
                        type="button"
                        :aria-label="t('photoLightbox.next')"
                        :class="cn(NAVIGATION_BUTTON_CLASSES, 'right-4')"
                        @click="showNextPhoto"
                    >
                        <ChevronRight class="size-6" />
                    </button>
                </div>

                <div
                    v-if="hasMultiplePhotos"
                    role="group"
                    :aria-label="t('photoLightbox.thumbnails')"
                    class="flex shrink-0 gap-2 overflow-x-auto px-4 py-4 scrollbar-none sm:justify-center sm:px-6"
                >
                    <button
                        v-for="(photo, index) in props.photos"
                        :key="`${photo.src}-${index}`"
                        ref="thumbnails"
                        type="button"
                        :aria-label="t('photoLightbox.showPhoto', { index: index + 1 })"
                        :aria-current="index === selectedIndex ? 'true' : undefined"
                        :class="
                            cn(
                                'relative h-14 w-20 shrink-0 overflow-hidden rounded-md ring-2 ring-offset-2 ring-offset-black transition focus-visible:outline-none',
                                index === selectedIndex
                                    ? 'opacity-100 ring-primary'
                                    : 'opacity-50 ring-transparent hover:opacity-90 focus-visible:opacity-100 focus-visible:ring-white'
                            )
                        "
                        @click="showPhoto(index)"
                    >
                        <NuxtImg
                            :src="photo.src"
                            alt=""
                            :width="THUMBNAIL_WIDTH_IN_PX"
                            :height="THUMBNAIL_HEIGHT_IN_PX"
                            densities="x1 x2"
                            loading="lazy"
                            class="size-full object-cover"
                        />
                    </button>
                </div>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

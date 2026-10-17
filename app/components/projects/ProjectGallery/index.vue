<script setup lang="ts">
import { ChevronLeft, ChevronRight, Maximize2 } from '@lucide/vue';
import type { Photo } from '~/types/photo';

interface Props {
    photos: Photo[];
    title: string;
}

const props = defineProps<Props>();

const COVER_INDEX = 0;
const MAX_TILE_COUNT = 5;
const STAGE_SIZES = 'sm:95vw lg:832px';
const CONTAINED_STAGE_SIZES = 'md:50vw lg:416px';
const TILE_SIZES = 'md:20vw lg:160px';
const BACKDROP_WIDTH_IN_PX = 48;

const NAVIGATION_BUTTON_CLASSES =
    'absolute top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition duration-300 hover:bg-background focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:size-10 sm:opacity-0 sm:group-hover:opacity-100';

const { t } = useI18n();

const selectedIndex = ref(COVER_INDEX);
const viewerIndex = ref(COVER_INDEX);
const isViewerOpen = ref(false);
const hasOpenedViewer = ref(false);

const selectedPhoto = computed(() => props.photos[selectedIndex.value]);
const selectedPhotoFit = computed(() =>
    selectedPhoto.value ? getPhotoFit(selectedPhoto.value) : 'cover'
);
const isCoverSelected = computed(() => selectedIndex.value === COVER_INDEX);
const tiles = computed(() =>
    createPhotoStrip(props.photos.length, MAX_TILE_COUNT).flatMap((tile) => {
        const photo = props.photos[tile.photoIndex];

        return photo ? [{ ...tile, photo, fit: getPhotoFit(photo) }] : [];
    })
);

function selectPhoto(index: number) {
    selectedIndex.value = (index + props.photos.length) % props.photos.length;
}

function selectPreviousPhoto() {
    selectPhoto(selectedIndex.value - 1);
}

function selectNextPhoto() {
    selectPhoto(selectedIndex.value + 1);
}

const { startSwipe, finishSwipe, cancelSwipe, isSwipeClick } = useHorizontalSwipe({
    onSwipeLeft: selectNextPhoto,
    onSwipeRight: selectPreviousPhoto,
});

function openViewer(index: number) {
    viewerIndex.value = index;
    hasOpenedViewer.value = true;
    isViewerOpen.value = true;
}

function openSelectedPhoto() {
    if (!isSwipeClick()) {
        openViewer(selectedIndex.value);
    }
}

function isTileSelected(photoIndex: number, overflowCount: number) {
    return overflowCount ? selectedIndex.value >= photoIndex : selectedIndex.value === photoIndex;
}

function activateTile(photoIndex: number, overflowCount: number) {
    if (overflowCount) {
        openViewer(photoIndex);
        return;
    }

    selectPhoto(photoIndex);
}

function getPhotoPosition(index: number) {
    return { index: index + 1, total: props.photos.length };
}

function getTileLabel(photoIndex: number, overflowCount: number) {
    return overflowCount
        ? t('projectDetails.gallery.morePhotos', { count: overflowCount })
        : t('projectDetails.gallery.showPhoto', getPhotoPosition(photoIndex));
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        selectPreviousPhoto();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        selectNextPhoto();
    }
}

watch(isViewerOpen, (isOpen) => {
    if (!isOpen) {
        selectPhoto(viewerIndex.value);
    }
});
</script>

<template>
    <section :aria-label="t('projectDetails.gallery.label')" class="mb-8" @keydown="handleKeyDown">
        <div
            v-if="selectedPhoto"
            class="group relative aspect-video touch-pan-y overflow-hidden rounded-xl border border-border/50 bg-muted"
            @pointerdown="startSwipe"
            @pointerup="finishSwipe"
            @pointercancel="cancelSwipe"
        >
            <NuxtImg
                v-if="selectedPhotoFit === 'contain'"
                :key="`backdrop-${selectedPhoto.src}`"
                :src="selectedPhoto.src"
                alt=""
                aria-hidden="true"
                :width="BACKDROP_WIDTH_IN_PX"
                :height="
                    Math.round((BACKDROP_WIDTH_IN_PX * selectedPhoto.height) / selectedPhoto.width)
                "
                densities="x1"
                class="absolute inset-0 size-full scale-125 object-cover opacity-50 blur-2xl"
            />

            <button
                type="button"
                :aria-label="
                    t('projectDetails.gallery.openViewer', getPhotoPosition(selectedIndex))
                "
                :class="
                    cn(
                        'absolute inset-0 flex size-full cursor-zoom-in items-center justify-center focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset',
                        selectedPhotoFit === 'contain' && 'p-3 sm:p-5'
                    )
                "
                @click="openSelectedPhoto"
            >
                <NuxtImg
                    :key="selectedPhoto.src"
                    :src="selectedPhoto.src"
                    :alt="selectedPhoto.alt"
                    :width="selectedPhoto.width"
                    :height="selectedPhoto.height"
                    :sizes="selectedPhotoFit === 'cover' ? STAGE_SIZES : CONTAINED_STAGE_SIZES"
                    :preload="isCoverSelected ? { fetchPriority: 'high' } : undefined"
                    :fetchpriority="isCoverSelected ? 'high' : 'auto'"
                    draggable="false"
                    :class="
                        cn(
                            'relative select-none motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-300',
                            selectedPhotoFit === 'cover'
                                ? 'size-full object-cover'
                                : 'h-full w-auto max-w-full rounded-md object-contain drop-shadow-xl sm:rounded-lg'
                        )
                    "
                />
            </button>

            <span
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <button
                type="button"
                :aria-label="t('photoLightbox.previous')"
                :class="cn(NAVIGATION_BUTTON_CLASSES, 'left-3')"
                @click="selectPreviousPhoto"
            >
                <ChevronLeft class="size-5" />
            </button>
            <button
                type="button"
                :aria-label="t('photoLightbox.next')"
                :class="cn(NAVIGATION_BUTTON_CLASSES, 'right-3')"
                @click="selectNextPhoto"
            >
                <ChevronRight class="size-5" />
            </button>

            <span
                aria-live="polite"
                class="pointer-events-none absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground tabular-nums shadow-sm backdrop-blur-sm"
            >
                {{ t('projectDetails.gallery.counter', getPhotoPosition(selectedIndex)) }}
            </span>
            <span
                aria-hidden="true"
                class="pointer-events-none absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
            >
                <Maximize2 class="size-4" />
            </span>
        </div>

        <ul class="mt-2 grid grid-cols-5 gap-2 sm:mt-3 sm:gap-3">
            <li v-for="tile in tiles" :key="tile.photo.src">
                <button
                    type="button"
                    :aria-label="getTileLabel(tile.photoIndex, tile.overflowCount)"
                    :aria-pressed="
                        tile.overflowCount ? undefined : isTileSelected(tile.photoIndex, 0)
                    "
                    :class="
                        cn(
                            'relative block aspect-square w-full overflow-hidden rounded-lg border bg-muted ring-offset-background transition duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:aspect-video',
                            isTileSelected(tile.photoIndex, tile.overflowCount)
                                ? 'border-primary ring-1 ring-primary'
                                : 'border-border/50 opacity-70 hover:border-primary/50 hover:opacity-100'
                        )
                    "
                    @click="activateTile(tile.photoIndex, tile.overflowCount)"
                >
                    <NuxtImg
                        :src="tile.photo.src"
                        :alt="tile.photo.alt"
                        :width="tile.photo.width"
                        :height="tile.photo.height"
                        :sizes="TILE_SIZES"
                        loading="lazy"
                        decoding="async"
                        :class="
                            cn(
                                'size-full',
                                tile.fit === 'cover' ? 'object-cover' : 'object-contain p-1'
                            )
                        "
                    />
                    <span
                        v-if="tile.overflowCount"
                        aria-hidden="true"
                        class="absolute inset-0 flex items-center justify-center bg-background/70 font-heading text-lg font-semibold text-foreground backdrop-blur-xs sm:text-xl"
                    >
                        +{{ tile.overflowCount }}
                    </span>
                </button>
            </li>
        </ul>

        <LazyUiPhotoLightbox
            v-if="hasOpenedViewer"
            v-model:open="isViewerOpen"
            v-model:index="viewerIndex"
            :photos="props.photos"
            :title="t('projectDetails.lightboxTitle', { title: props.title })"
        />
    </section>
</template>

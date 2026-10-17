<script setup lang="ts">
import { Maximize2 } from '@lucide/vue';
import type { Photo } from '~/types/photo';
import type { MosaicShape } from '~/utils/photoMosaic';

interface Props {
    photos: Photo[];
    eventName: string;
}

const props = defineProps<Props>();

const CLASS_BY_SHAPE: Record<MosaicShape, string> = {
    full: 'col-span-2 row-span-2 md:col-span-4',
    hero: 'col-span-2 row-span-2',
    half: 'col-span-2 row-span-2',
    tall: 'row-span-2',
    wide: 'col-span-2',
    square: '',
};

const SIZES_BY_SHAPE: Record<MosaicShape, string> = {
    full: 'md:100vw lg:832px',
    hero: 'md:100vw lg:416px',
    half: 'md:100vw lg:416px',
    tall: 'md:50vw lg:208px',
    wide: 'md:100vw lg:416px',
    square: 'md:50vw lg:208px',
};

const { t } = useI18n();

const selectedPhotoIndex = ref(0);
const isLightboxOpen = ref(false);
const hasOpenedLightbox = ref(false);

const layout = computed(() => createMosaicLayout(props.photos));

const orderedPhotos = computed(() => {
    const visibleIndexes = layout.value.cells.map((cell) => cell.photoIndex);
    const hiddenPhotos = props.photos.filter((_, index) => !visibleIndexes.includes(index));

    return [...visibleIndexes.flatMap((index) => props.photos[index] ?? []), ...hiddenPhotos];
});

const tiles = computed(() =>
    layout.value.cells.flatMap((cell, position) => {
        const photo = props.photos[cell.photoIndex];

        return photo
            ? [
                  {
                      photo,
                      position,
                      shape: cell.shape,
                      hasHiddenPhotosOverlay:
                          layout.value.hiddenCount > 0 &&
                          position === layout.value.cells.length - 1,
                  },
              ]
            : [];
    })
);

function openPhoto(position: number) {
    selectedPhotoIndex.value = position;
    hasOpenedLightbox.value = true;
    isLightboxOpen.value = true;
}

function getTileLabel(position: number, hasHiddenPhotosOverlay: boolean) {
    return hasHiddenPhotosOverlay
        ? t('talkDetails.morePhotos', { count: layout.value.hiddenCount })
        : t('talkDetails.openPhoto', { index: position + 1, total: props.photos.length });
}
</script>

<template>
    <section>
        <div class="mb-3 flex items-baseline justify-between gap-4">
            <h2 class="text-xl font-semibold">{{ t('talkDetails.galleryTitle') }}</h2>
            <span class="text-sm text-muted-foreground">
                {{ t('talks.photos', props.photos.length) }}
            </span>
        </div>

        <ul
            class="grid grid-flow-row-dense auto-rows-28 grid-cols-2 gap-2 sm:auto-rows-36 sm:gap-3 md:auto-rows-40 md:grid-cols-4"
        >
            <li
                v-for="tile in tiles"
                :key="`${tile.photo.src}-${tile.position}`"
                :class="CLASS_BY_SHAPE[tile.shape]"
            >
                <button
                    type="button"
                    :aria-label="getTileLabel(tile.position, tile.hasHiddenPhotosOverlay)"
                    class="group relative block size-full overflow-hidden rounded-lg border border-border/50 bg-muted ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    @click="openPhoto(tile.position)"
                >
                    <NuxtImg
                        :src="tile.photo.src"
                        :alt="tile.photo.alt"
                        :width="tile.photo.width"
                        :height="tile.photo.height"
                        :sizes="SIZES_BY_SHAPE[tile.shape]"
                        loading="lazy"
                        decoding="async"
                        class="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                    <span
                        v-if="!tile.hasHiddenPhotosOverlay"
                        aria-hidden="true"
                        class="absolute right-3 bottom-3 flex size-8 translate-y-1 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                    >
                        <Maximize2 class="size-4" />
                    </span>
                    <span
                        v-else
                        aria-hidden="true"
                        class="absolute inset-0 flex items-center justify-center bg-background/70 font-heading text-3xl font-semibold text-foreground backdrop-blur-xs transition-colors group-hover:bg-background/60"
                    >
                        +{{ layout.hiddenCount }}
                    </span>
                </button>
            </li>
        </ul>

        <LazyUiPhotoLightbox
            v-if="hasOpenedLightbox"
            v-model:open="isLightboxOpen"
            v-model:index="selectedPhotoIndex"
            :photos="orderedPhotos"
            :title="t('talkDetails.lightboxTitle', { title: props.eventName })"
        />
    </section>
</template>

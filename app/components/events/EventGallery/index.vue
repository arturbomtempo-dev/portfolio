<script setup lang="ts">
import { Maximize2 } from '@lucide/vue';
import type { EventPhoto } from '~/types/event';

interface Props {
    photos: EventPhoto[];
    eventName: string;
}

const props = defineProps<Props>();

const PHOTO_WIDTH_IN_PX = 480;
const PHOTO_HEIGHT_IN_PX = 360;
const PHOTO_SIZES = 'sm:45vw md:30vw lg:272px';

const { t } = useI18n();

const selectedPhotoIndex = ref(0);
const isLightboxOpen = ref(false);
const hasOpenedLightbox = ref(false);

function openPhoto(index: number) {
    selectedPhotoIndex.value = index;
    hasOpenedLightbox.value = true;
    isLightboxOpen.value = true;
}
</script>

<template>
    <section>
        <div class="mb-3 flex items-baseline justify-between gap-4">
            <h2 class="text-xl font-semibold">{{ t('eventDetails.galleryTitle') }}</h2>
            <span class="text-sm text-muted-foreground">
                {{ t('events.photos', props.photos.length) }}
            </span>
        </div>
        <ul class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            <li v-for="(photo, index) in props.photos" :key="`${photo.src}-${index}`">
                <button
                    type="button"
                    :aria-label="
                        t('eventDetails.openPhoto', {
                            index: index + 1,
                            total: props.photos.length,
                        })
                    "
                    class="group relative block aspect-4/3 w-full overflow-hidden rounded-lg border border-border/50 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    @click="openPhoto(index)"
                >
                    <NuxtImg
                        :src="photo.src"
                        :alt="photo.alt"
                        :width="PHOTO_WIDTH_IN_PX"
                        :height="PHOTO_HEIGHT_IN_PX"
                        :sizes="PHOTO_SIZES"
                        loading="lazy"
                        decoding="async"
                        class="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <span
                        aria-hidden="true"
                        class="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                        <Maximize2 class="size-6 text-primary" />
                    </span>
                </button>
            </li>
        </ul>

        <LazyEventsPhotoLightbox
            v-if="hasOpenedLightbox"
            v-model:open="isLightboxOpen"
            v-model:index="selectedPhotoIndex"
            :photos="props.photos"
            :event-name="props.eventName"
        />
    </section>
</template>

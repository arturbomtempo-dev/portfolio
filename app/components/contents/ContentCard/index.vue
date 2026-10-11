<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
import type { ContentItem } from '~/types/content';

interface Props {
    content: ContentItem;
    isAboveTheFold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isAboveTheFold: false,
});

const { t, localeProperties } = useI18n();
const NuxtLink = resolveComponent('NuxtLink');

const THUMBNAIL_WIDTH_IN_PX = 640;
const THUMBNAIL_HEIGHT_IN_PX = 360;
const THUMBNAIL_SIZES = 'sm:90vw md:45vw lg:340px';

const hasThumbnailError = ref(false);

const formattedDate = computed(() =>
    formatDate(props.content.date, localeProperties.value.language ?? 'pt-BR')
);

function showThumbnailFallback() {
    hasThumbnailError.value = true;
}
</script>

<template>
    <UiBaseCard
        :as="NuxtLink"
        :to="props.content.url"
        target="_blank"
        class="h-full overflow-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
        <div class="relative aspect-video overflow-hidden">
            <div
                v-if="hasThumbnailError"
                class="flex size-full items-center justify-center bg-linear-to-br from-primary/20 to-primary/5 text-primary/60"
            >
                <ContentsContentTypeIcon :type="props.content.type" class="size-12" />
            </div>
            <NuxtImg
                v-else
                :src="props.content.thumbnail"
                :alt="props.content.title"
                :width="THUMBNAIL_WIDTH_IN_PX"
                :height="THUMBNAIL_HEIGHT_IN_PX"
                :sizes="THUMBNAIL_SIZES"
                :loading="props.isAboveTheFold ? 'eager' : 'lazy'"
                :fetchpriority="props.isAboveTheFold ? 'high' : 'auto'"
                decoding="async"
                class="size-full object-cover transition-transform duration-300 hover:scale-110"
                @error="showThumbnailFallback"
            />
            <div class="absolute top-4 right-4">
                <div
                    class="flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1 backdrop-blur-sm"
                >
                    <ContentsContentTypeIcon :type="props.content.type" class="size-4" />
                    <span class="text-sm font-medium">
                        {{ t(`contents.types.${props.content.type}`) }}
                    </span>
                </div>
            </div>
        </div>
        <div class="py-3 sm:py-4">
            <div class="mb-3 flex items-start justify-between">
                <h2 class="line-clamp-2 text-xl font-semibold">{{ props.content.title }}</h2>
                <ExternalLink class="ml-2 size-5 shrink-0 text-primary" />
            </div>
            <p class="mb-4 line-clamp-2 text-muted-foreground">{{ props.content.description }}</p>
            <div class="flex items-center justify-between text-sm text-muted-foreground">
                <span>{{ props.content.platform }}</span>
                <time :datetime="props.content.date">{{ formattedDate }}</time>
            </div>
        </div>
    </UiBaseCard>
</template>

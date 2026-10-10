<script setup lang="ts" generic="TItem">
import { ArrowLeft, ArrowRight } from '@lucide/vue';
import emblaCarouselVue from 'embla-carousel-vue';
import type { HTMLAttributes } from 'vue';

type CarouselOptions = Parameters<typeof emblaCarouselVue>[0];

interface Props {
    items: TItem[];
    itemKey: (item: TItem) => string;
    options?: CarouselOptions;
    hasAdaptiveHeight?: boolean;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    options: undefined,
    hasAdaptiveHeight: false,
    class: undefined,
});

defineSlots<{
    default(slotProps: { item: TItem; index: number }): unknown;
}>();

const { t } = useI18n();
const [viewportRef, emblaApi] = emblaCarouselVue(props.options);

const canScrollPrevious = ref(false);
const canScrollNext = ref(false);
const containerHeight = ref<number>();

let slideResizeObserver: ResizeObserver | undefined;

const containerStyle = computed(() =>
    containerHeight.value === undefined ? undefined : { height: `${containerHeight.value}px` }
);

function updateScrollAvailability() {
    canScrollPrevious.value = emblaApi.value?.canScrollPrev() ?? false;
    canScrollNext.value = emblaApi.value?.canScrollNext() ?? false;
}

function updateContainerHeight() {
    const api = emblaApi.value;

    if (!api || !props.hasAdaptiveHeight) {
        return;
    }

    const activeSlide = api.slideNodes()[api.selectedScrollSnap()];

    if (activeSlide) {
        containerHeight.value = activeSlide.offsetHeight;
    }
}

function scrollPrevious() {
    emblaApi.value?.scrollPrev();
}

function scrollNext() {
    emblaApi.value?.scrollNext();
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrevious();
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
    }
}

watch(emblaApi, (api) => {
    if (!api) {
        return;
    }

    updateScrollAvailability();
    updateContainerHeight();
    api.on('select', updateScrollAvailability);
    api.on('reInit', updateScrollAvailability);
    api.on('select', updateContainerHeight);

    if (props.hasAdaptiveHeight) {
        const observer = new ResizeObserver(updateContainerHeight);
        api.slideNodes().forEach((slide) => observer.observe(slide));
        slideResizeObserver = observer;
    }
});

onBeforeUnmount(() => {
    slideResizeObserver?.disconnect();
});
</script>

<template>
    <div
        :class="cn('relative', props.class)"
        role="region"
        aria-roledescription="carousel"
        @keydown.capture="handleKeyDown"
    >
        <div ref="viewportRef" class="overflow-hidden">
            <div
                :class="
                    cn(
                        '-ml-4 flex',
                        props.hasAdaptiveHeight &&
                            'items-start transition-[height] duration-300 ease-in-out'
                    )
                "
                :style="containerStyle"
            >
                <div
                    v-for="(item, index) in props.items"
                    :key="props.itemKey(item)"
                    role="group"
                    aria-roledescription="slide"
                    class="min-w-0 shrink-0 grow-0 basis-full pl-4"
                >
                    <slot :item="item" :index="index" />
                </div>
            </div>
        </div>

        <UiBaseButton
            variant="outline"
            size="icon"
            class="absolute top-1/2 -left-12 hidden size-8 -translate-y-1/2 rounded-full sm:flex"
            :disabled="!canScrollPrevious"
            @click="scrollPrevious"
        >
            <ArrowLeft class="size-4" />
            <span class="sr-only">{{ t('carousel.previous') }}</span>
        </UiBaseButton>
        <UiBaseButton
            variant="outline"
            size="icon"
            class="absolute top-1/2 -right-12 hidden size-8 -translate-y-1/2 rounded-full sm:flex"
            :disabled="!canScrollNext"
            @click="scrollNext"
        >
            <ArrowRight class="size-4" />
            <span class="sr-only">{{ t('carousel.next') }}</span>
        </UiBaseButton>
    </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types/about';

const CAROUSEL_OPTIONS = {
    align: 'start',
    loop: true,
} as const;

const { t } = useI18n();
const content = useAboutContent();

function getTestimonialKey(testimonial: Testimonial) {
    return testimonial.image;
}
</script>

<template>
    <section class="mb-16 animate-fade-in">
        <h2 class="mb-8 text-center text-3xl font-bold">{{ t('about.testimonialsTitle') }}</h2>
        <div class="px-4 sm:px-12 lg:px-16">
            <UiBaseCarousel
                :items="content.testimonials"
                :item-key="getTestimonialKey"
                :options="CAROUSEL_OPTIONS"
                has-adaptive-height
                class="w-full"
            >
                <template #default="{ item }">
                    <AboutTestimonialCard :testimonial="item" class="mx-2 sm:mx-0" />
                </template>
            </UiBaseCarousel>
        </div>
    </section>
</template>

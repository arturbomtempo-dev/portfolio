<script setup lang="ts">
import { Quote } from '@lucide/vue';
import type { Testimonial } from '~/types/about';

interface Props {
    testimonial: Testimonial;
}

const props = defineProps<Props>();

const AUTHOR_PHOTO_SIZE_IN_PX = 48;
</script>

<template>
    <UiBaseCard :is-hoverable="false">
        <Quote class="mb-4 size-10 text-primary/30" />
        <p class="mb-6 text-lg/relaxed text-foreground/90 italic">"{{ props.testimonial.text }}"</p>
        <div class="flex items-center gap-3 border-t border-border/50 pt-4">
            <img
                :src="props.testimonial.image"
                :alt="props.testimonial.name"
                :width="AUTHOR_PHOTO_SIZE_IN_PX"
                :height="AUTHOR_PHOTO_SIZE_IN_PX"
                loading="lazy"
                class="size-12 rounded-full border-2 border-primary/20 object-cover"
            />
            <div>
                <p class="font-heading font-semibold">{{ props.testimonial.name }}</p>
                <p class="text-sm text-muted-foreground">{{ props.testimonial.role }}</p>
            </div>
        </div>
    </UiBaseCard>
</template>

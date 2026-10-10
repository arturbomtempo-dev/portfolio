<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    title: string;
    description: string;
    descriptionClass?: HTMLAttributes['class'];
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    descriptionClass: undefined,
    class: undefined,
});
</script>

<template>
    <section :class="cn('mb-16 animate-fade-in text-center', props.class)">
        <h1 class="glow-text mb-4 text-4xl font-bold sm:text-5xl">{{ props.title }}</h1>
        <p :class="cn('mx-auto max-w-3xl text-lg text-muted-foreground', props.descriptionClass)">
            {{ props.description }}
        </p>
    </section>
</template>

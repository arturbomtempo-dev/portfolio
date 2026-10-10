<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    isInvalid?: boolean;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    isInvalid: false,
    class: undefined,
});

const model = defineModel<string>({ required: true });

const BASE_CLASSES =
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm';

const classes = computed(() =>
    cn(BASE_CLASSES, props.class, props.isInvalid ? FIELD_INVALID_CLASSES : FIELD_VALID_CLASSES)
);
</script>

<template>
    <input v-model="model" :aria-invalid="props.isInvalid" :class="classes" />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    class: undefined,
});
</script>

<template>
    <span :class="cn('tech-badge text-sm', props.class)">
        <slot />
    </span>
</template>

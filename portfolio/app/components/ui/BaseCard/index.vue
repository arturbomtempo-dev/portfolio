<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    as?: string;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    as: 'div',
    class: undefined,
});
</script>

<template>
    <component :is="props.as" :class="cn('surface-card', props.class)">
        <slot />
    </component>
</template>

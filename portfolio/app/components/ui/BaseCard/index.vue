<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    as?: string;
    isHoverable?: boolean;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    as: 'div',
    isHoverable: true,
    class: undefined,
});
</script>

<template>
    <component
        :is="props.as"
        :class="cn('surface-card', props.isHoverable && 'surface-card-hoverable', props.class)"
    >
        <slot />
    </component>
</template>

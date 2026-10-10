<script setup lang="ts">
import type { SimpleIcon } from 'simple-icons';

interface Props {
    icon: SimpleIcon;
}

const props = defineProps<Props>();
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path :d="props.icon.path" />
    </svg>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';

interface Props {
    to: string;
}

const props = defineProps<Props>();
</script>

<template>
    <NuxtLink :to="props.to" class="back-link focus-visible:outline-none">
        <ArrowLeft class="size-4" />
        <slot />
    </NuxtLink>
</template>

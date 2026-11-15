<script setup lang="ts">
interface Props {
    id: string;
    title: string;
    description: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="mb-10 text-center">
        <h2 :id="props.id" class="mb-3 text-2xl font-bold sm:text-3xl">{{ props.title }}</h2>
        <p class="mx-auto max-w-2xl text-muted-foreground">{{ props.description }}</p>
    </div>
</template>

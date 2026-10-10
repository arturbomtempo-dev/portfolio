<script setup lang="ts">
import type { TechCategory } from '~/types/about';

interface Props {
    category: TechCategory;
}

const props = defineProps<Props>();
</script>

<template>
    <UiBaseCard>
        <div class="mb-4 flex items-center gap-3">
            <component :is="props.category.icon" class="h-6 w-6 text-primary" />
            <h3 class="text-xl font-semibold">{{ props.category.title }}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
            <UiTechBadge v-for="tech in props.category.techs" :key="tech">{{ tech }}</UiTechBadge>
        </div>
    </UiBaseCard>
</template>

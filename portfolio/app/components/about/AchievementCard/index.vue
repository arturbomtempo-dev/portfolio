<script setup lang="ts">
import type { Achievement } from '~/types/about';

interface Props {
    achievement: Achievement;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    select: [];
}>();
</script>

<template>
    <UiBaseCard class="surface-card-glow group relative flex cursor-pointer flex-col text-center">
        <Icon
            :name="props.achievement.icon"
            class="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110"
        />
        <h3 class="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
            <button
                type="button"
                class="block w-full text-center after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                @click="emit('select')"
            >
                {{ props.achievement.title }}
            </button>
        </h3>
        <p class="text-sm text-muted-foreground">{{ props.achievement.description }}</p>
    </UiBaseCard>
</template>

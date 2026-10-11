<script setup lang="ts">
import { GraduationCap, Presentation, Users } from '@lucide/vue';
import type { EventType } from '~/types/event';

interface Props {
    type: EventType;
}

const props = defineProps<Props>();
</script>

<template>
    <Presentation v-if="props.type === 'talk'" />
    <Users v-else-if="props.type === 'workshop'" />
    <GraduationCap v-else />
</template>

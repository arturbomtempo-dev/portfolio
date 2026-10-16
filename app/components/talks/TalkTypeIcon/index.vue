<script setup lang="ts">
import { GraduationCap, Presentation, Users } from '@lucide/vue';
import type { TalkType } from '~/types/talk';

interface Props {
    type: TalkType;
}

const props = defineProps<Props>();
</script>

<template>
    <Presentation v-if="props.type === 'talk'" />
    <Users v-else-if="props.type === 'workshop'" />
    <GraduationCap v-else />
</template>

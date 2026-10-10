<script setup lang="ts">
import { FileText, Mail } from '@lucide/vue';
import { siYoutube } from 'simple-icons';
import type { ContentType } from '~/types/content';

interface Props {
    type: ContentType;
}

const props = defineProps<Props>();
</script>

<template>
    <UiBrandIcon v-if="props.type === 'video'" :icon="siYoutube" />
    <FileText v-else-if="props.type === 'article'" />
    <Mail v-else />
</template>

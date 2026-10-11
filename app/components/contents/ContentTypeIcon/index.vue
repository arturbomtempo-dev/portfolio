<script setup lang="ts">
import { FileText, Mail } from '@lucide/vue';
import { IconBrandYoutube } from '@tabler/icons-vue';
import type { ContentType } from '~/types/content';

interface Props {
    type: ContentType;
}

const props = defineProps<Props>();
</script>

<template>
    <IconBrandYoutube v-if="props.type === 'video'" />
    <FileText v-else-if="props.type === 'article'" />
    <Mail v-else />
</template>

<script setup lang="ts">
import type { RoadmapPrinciple } from '~/types/roadmap';

interface Props {
    principles: RoadmapPrinciple[];
}

const props = defineProps<Props>();

const { t } = useI18n();
</script>

<template>
    <section aria-labelledby="roadmap-principles">
        <RoadmapSectionHeading
            id="roadmap-principles"
            :title="t('roadmap.principles.title')"
            :description="t('roadmap.principles.description')"
        />
        <ul class="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="principle in props.principles" :key="principle.id" class="h-full">
                <RoadmapPrincipleCard :principle="principle" />
            </li>
        </ul>
    </section>
</template>

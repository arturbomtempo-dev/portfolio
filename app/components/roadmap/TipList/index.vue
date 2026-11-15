<script setup lang="ts">
interface Props {
    tips: string[];
}

const props = defineProps<Props>();

const { t } = useI18n();

function formatTipNumber(index: number) {
    return String(index + 1).padStart(2, '0');
}
</script>

<template>
    <section aria-labelledby="roadmap-tips">
        <RoadmapSectionHeading
            id="roadmap-tips"
            :title="t('roadmap.tips.title')"
            :description="t('roadmap.tips.description')"
        />
        <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="(tip, index) in props.tips" :key="tip">
                <UiBaseCard :is-hoverable="false" class="flex h-full gap-4 p-5">
                    <span
                        aria-hidden="true"
                        class="font-heading text-2xl font-bold text-primary/70"
                    >
                        {{ formatTipNumber(index) }}
                    </span>
                    <p class="text-sm/relaxed text-foreground/90">{{ tip }}</p>
                </UiBaseCard>
            </li>
        </ol>
    </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const content = useAboutContent();

const selectedIndex = ref(0);
const isDialogOpen = ref(false);

const selectedAchievement = computed(() => content.value.achievements[selectedIndex.value]);

function openAchievement(index: number) {
    selectedIndex.value = index;
    isDialogOpen.value = true;
}
</script>

<template>
    <section class="mb-16 grid animate-fade-in grid-cols-1 gap-6 md:grid-cols-3">
        <AboutAchievementCard
            v-for="(achievement, index) in content.achievements"
            :key="achievement.title"
            :achievement="achievement"
            @select="openAchievement(index)"
        />
    </section>

    <AboutDetailsDialog
        v-if="selectedAchievement"
        v-model:open="isDialogOpen"
        :icon="selectedAchievement.icon"
        :title="selectedAchievement.title"
        :subtitle="selectedAchievement.description"
        :description="selectedAchievement.fullDescription"
        :list-title="t('about.achievementDetailsTitle')"
        :items="selectedAchievement.details"
    />
</template>

<script setup lang="ts">
const { t } = useI18n();
const content = useAboutContent();
</script>

<template>
    <section class="mb-16 animate-fade-in">
        <h2 class="mb-8 text-center text-3xl font-bold">{{ t('about.technologiesTitle') }}</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AboutTechCategoryCard
                v-for="category in content.techCategories"
                :key="category.icon"
                :category="category"
            />
        </div>
    </section>
</template>

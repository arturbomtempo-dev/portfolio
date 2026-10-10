<script setup lang="ts">
const NOT_FOUND_STATUS_CODE = 404;

const { t } = useI18n();
const route = useRoute();
const projects = useProjectsContent();

const project = computed(() =>
    projects.value.find((candidate) => candidate.id === String(route.params.id))
);

if (!project.value) {
    setResponseStatus(NOT_FOUND_STATUS_CODE);
}

useSeoMeta({
    title: () =>
        project.value
            ? t('projectDetails.seo.title', { title: project.value.title })
            : t('projectDetails.notFound.seo.title'),
    description: () => project.value?.description,
    ogTitle: () =>
        project.value
            ? t('projectDetails.seo.title', { title: project.value.title })
            : t('projectDetails.notFound.seo.title'),
    ogDescription: () => project.value?.description,
    ogImage: () => project.value?.image,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    robots: () => (project.value ? undefined : 'noindex, nofollow'),
});
</script>

<template>
    <div v-if="project" class="min-h-screen px-4 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-4xl px-8">
            <ProjectsProjectDetails :project="project" />
        </div>
    </div>
    <div v-else class="flex min-h-screen items-center justify-center px-6 py-20">
        <div class="mx-auto w-full max-w-2xl px-8">
            <ProjectsProjectNotFound />
        </div>
    </div>
</template>

<script setup lang="ts">
const PROJECTS_IN_FIRST_ROW = 3;

const projects = useProjectsContent();
const localePath = useLocalePath();
</script>

<template>
    <section class="grid animate-fade-in grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectsProjectCard
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
            :to="localePath(`/projects/${project.id}`)"
            :is-above-the-fold="index < PROJECTS_IN_FIRST_ROW"
        />
    </section>
</template>

<script setup lang="ts">
const PROJECTS_IN_FIRST_ROW = 3;

const projects = useProjectsContent();

const selectedIndex = ref(0);
const isDialogOpen = ref(false);

const selectedProject = computed(() => projects.value[selectedIndex.value]);

function openProject(index: number) {
    selectedIndex.value = index;
    isDialogOpen.value = true;
}
</script>

<template>
    <section class="grid animate-fade-in grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectsProjectCard
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
            :is-above-the-fold="index < PROJECTS_IN_FIRST_ROW"
            @select="openProject(index)"
        />
    </section>

    <ProjectsProjectDialog
        v-if="selectedProject"
        v-model:open="isDialogOpen"
        :project="selectedProject"
    />
</template>

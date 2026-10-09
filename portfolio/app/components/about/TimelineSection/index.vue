<script setup lang="ts">
import type { IconName, TimelineEntry } from '~/types/about';

type TimelineKind = 'education' | 'experience';

interface TimelineSelection {
    kind: TimelineKind;
    index: number;
}

const ICON_BY_KIND: Record<TimelineKind, IconName> = {
    education: 'portfolio:graduation-cap',
    experience: 'portfolio:briefcase',
};

const { t } = useI18n();
const content = useAboutContent();

const selection = ref<TimelineSelection>({ kind: 'education', index: 0 });
const isDialogOpen = ref(false);

const educationEntries = computed<TimelineEntry[]>(() =>
    content.value.timeline.education.map(({ year, title, institution }) => ({
        year,
        title,
        organization: institution,
    }))
);

const experienceEntries = computed<TimelineEntry[]>(() =>
    content.value.timeline.professional.map(({ year, title, company }) => ({
        year,
        title,
        organization: company,
    }))
);

const selectedDetails = computed(() => {
    const { kind, index } = selection.value;

    if (kind === 'education') {
        const education = content.value.timeline.education[index];

        return (
            education && {
                subtitle: education.institution,
                listTitle: t('about.educationDetailsTitle'),
                ...education,
            }
        );
    }

    const experience = content.value.timeline.professional[index];

    return (
        experience && {
            subtitle: experience.company,
            listTitle: t('about.experienceDetailsTitle'),
            ...experience,
        }
    );
});

function openEntry(kind: TimelineKind, index: number) {
    selection.value = { kind, index };
    isDialogOpen.value = true;
}
</script>

<template>
    <section class="grid animate-fade-in grid-cols-1 gap-12 lg:grid-cols-2">
        <AboutTimelineColumn
            :icon="ICON_BY_KIND.education"
            :title="t('about.educationTitle')"
            :entries="educationEntries"
            @select="openEntry('education', $event)"
        />
        <AboutTimelineColumn
            :icon="ICON_BY_KIND.experience"
            :title="t('about.experienceTitle')"
            :entries="experienceEntries"
            @select="openEntry('experience', $event)"
        />
    </section>

    <AboutDetailsDialog
        v-if="selectedDetails"
        v-model:open="isDialogOpen"
        :icon="ICON_BY_KIND[selection.kind]"
        :eyebrow="selectedDetails.year"
        :title="selectedDetails.title"
        :subtitle="selectedDetails.subtitle"
        :description="selectedDetails.description"
        :list-title="selectedDetails.listTitle"
        :items="selectedDetails.activities"
    />
</template>

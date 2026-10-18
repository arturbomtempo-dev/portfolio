<script setup lang="ts">
import { Briefcase, GraduationCap, type LucideIcon } from '@lucide/vue';
import type { TimelineEntry } from '~/types/about';
import type { TimelinePeriod } from '~/utils/timelinePeriod';

type TimelineKind = 'education' | 'experience';

interface TimelineSelection {
    kind: TimelineKind;
    index: number;
}

const ICON_BY_KIND: Record<TimelineKind, LucideIcon> = {
    education: GraduationCap,
    experience: Briefcase,
};

const { t, localeProperties } = useI18n();
const content = useAboutContent();
const currentYearMonth = useCurrentYearMonth();

const selection = ref<TimelineSelection>({ kind: 'education', index: 0 });
const isDialogOpen = ref(false);
const hasOpenedDialog = ref(false);

const sortedEducation = computed(() =>
    sortTimelineByRecency(content.value.timeline.education, currentYearMonth.value)
);

const sortedProfessional = computed(() =>
    sortTimelineByRecency(content.value.timeline.professional, currentYearMonth.value)
);

function formatPeriod(period: TimelinePeriod) {
    return formatTimelinePeriod(
        period,
        localeProperties.value.language ?? 'pt-BR',
        t('about.present')
    );
}

const educationEntries = computed<TimelineEntry[]>(() =>
    sortedEducation.value.map((education) => ({
        period: formatPeriod(education),
        title: education.title,
        organization: education.institution,
    }))
);

const experienceEntries = computed<TimelineEntry[]>(() =>
    sortedProfessional.value.map((experience) => ({
        period: formatPeriod(experience),
        title: experience.title,
        organization: experience.company,
    }))
);

const selectedDetails = computed(() => {
    const { kind, index } = selection.value;

    if (kind === 'education') {
        const education = sortedEducation.value[index];

        return (
            education && {
                subtitle: education.institution,
                listTitle: t('about.educationDetailsTitle'),
                period: formatPeriod(education),
                ...education,
            }
        );
    }

    const experience = sortedProfessional.value[index];

    return (
        experience && {
            subtitle: experience.company,
            listTitle: t('about.experienceDetailsTitle'),
            period: formatPeriod(experience),
            ...experience,
        }
    );
});

function openEntry(kind: TimelineKind, index: number) {
    selection.value = { kind, index };
    hasOpenedDialog.value = true;
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

    <LazyAboutDetailsDialog
        v-if="hasOpenedDialog && selectedDetails"
        v-model:open="isDialogOpen"
        :icon="ICON_BY_KIND[selection.kind]"
        :eyebrow="selectedDetails.period"
        :title="selectedDetails.title"
        :subtitle="selectedDetails.subtitle"
        :description="selectedDetails.description"
        :list-title="selectedDetails.listTitle"
        :items="selectedDetails.activities"
    />
</template>

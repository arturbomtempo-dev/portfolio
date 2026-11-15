<script setup lang="ts">
import type { RoadmapArea } from '~/types/roadmap';

interface Props {
    areas: RoadmapArea[];
}

const props = defineProps<Props>();

const AREA_QUERY_KEY = 'area';
const DETAILS_SCROLL_OFFSET_IN_PX = 96;

const { t } = useI18n();
const route = useRoute();
const details = useTemplateRef('details');

const defaultAreaId = computed(() => props.areas[0]?.id);

const selectedAreaId = computed({
    get: () => {
        const queryValue = route.query[AREA_QUERY_KEY];

        return props.areas.some((area) => area.id === queryValue)
            ? String(queryValue)
            : defaultAreaId.value;
    },
    set: (areaId) => {
        const query = {
            ...route.query,
            [AREA_QUERY_KEY]: areaId === defaultAreaId.value ? undefined : areaId,
        };

        navigateTo({ query }, { replace: true });
    },
});

const selectedArea = computed(() => props.areas.find((area) => area.id === selectedAreaId.value));

function isAboveTheViewport(element: HTMLElement) {
    const { top } = element.getBoundingClientRect();

    return top < 0 || top > window.innerHeight * 0.6;
}

async function selectArea(areaId: string) {
    selectedAreaId.value = areaId;
    await nextTick();

    const element = details.value;

    if (element && isAboveTheViewport(element)) {
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - DETAILS_SCROLL_OFFSET_IN_PX,
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
    }
}
</script>

<template>
    <section aria-labelledby="roadmap-areas">
        <RoadmapSectionHeading
            id="roadmap-areas"
            :title="t('roadmap.areas.title')"
            :description="t('roadmap.areas.description')"
        />
        <ul
            :aria-label="t('roadmap.areas.label')"
            class="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
            <li v-for="area in props.areas" :key="area.id">
                <RoadmapAreaCard
                    :area="area"
                    :is-selected="area.id === selectedAreaId"
                    @select="selectArea(area.id)"
                />
            </li>
        </ul>
        <div :id="ROADMAP_AREA_PANEL_ID" ref="details">
            <RoadmapAreaDetails v-if="selectedArea" :key="selectedArea.id" :area="selectedArea" />
        </div>
    </section>
</template>

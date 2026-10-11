<script setup lang="ts">
import type { ContributionDay } from '#shared/types/github';

interface Props {
    weeks: ContributionDay[][];
    label: string;
    isLoading?: boolean;
}

interface MonthLabel {
    column: number;
    text: string;
}

interface Tooltip {
    text: string;
    left: number;
    top: number;
}

const props = withDefaults(defineProps<Props>(), {
    isLoading: false,
});

const DAYS_PER_WEEK = 7;
const LABELED_WEEKDAY_INDEXES = [1, 3, 5];
const MINIMUM_WEEKS_BETWEEN_MONTH_LABELS = 3;
const REFERENCE_SUNDAY = '2023-01-01';

const { t, localeProperties } = useI18n();

const wrapperRef = useTemplateRef('wrapper');
const scrollerRef = useTemplateRef('scroller');
const tooltip = ref<Tooltip>();

const languageTag = computed(() => localeProperties.value.language ?? 'pt-BR');

function parseIsoDate(isoDate: string) {
    return new Date(`${isoDate}T00:00:00`);
}

const gridStyle = computed(() => ({
    gridTemplateColumns: `repeat(${props.weeks.length}, minmax(0, 1fr))`,
}));

const weekColumns = computed(() =>
    props.weeks.map((days, weekIndex) => {
        const firstDay = days[0];
        const leadingEmptyDays =
            weekIndex === 0 && firstDay?.date ? parseIsoDate(firstDay.date).getDay() : 0;

        return { key: firstDay?.date || `week-${weekIndex}`, leadingEmptyDays, days };
    })
);

const monthLabels = computed<MonthLabel[]>(() => {
    const formatter = new Intl.DateTimeFormat(languageTag.value, { month: 'short' });
    const labels: MonthLabel[] = [];
    let previousMonth: number | undefined;

    props.weeks.forEach((days, weekIndex) => {
        const firstDay = days[0];

        if (!firstDay?.date) {
            return;
        }

        const date = parseIsoDate(firstDay.date);

        if (date.getMonth() !== previousMonth) {
            labels.push({ column: weekIndex + 1, text: formatter.format(date) });
            previousMonth = date.getMonth();
        }
    });

    const [firstLabel, secondLabel] = labels;
    const isFirstLabelCrowded =
        firstLabel &&
        secondLabel &&
        secondLabel.column - firstLabel.column < MINIMUM_WEEKS_BETWEEN_MONTH_LABELS;

    return isFirstLabelCrowded ? labels.slice(1) : labels;
});

const weekdayLabels = computed(() => {
    const formatter = new Intl.DateTimeFormat(languageTag.value, { weekday: 'short' });
    const referenceSunday = parseIsoDate(REFERENCE_SUNDAY);

    return Array.from({ length: DAYS_PER_WEEK }, (_, dayIndex) => {
        const date = new Date(referenceSunday);
        date.setDate(referenceSunday.getDate() + dayIndex);

        return LABELED_WEEKDAY_INDEXES.includes(dayIndex) ? formatter.format(date) : '';
    });
});

function getTooltipText(day: ContributionDay) {
    const count = new Intl.NumberFormat(languageTag.value).format(day.count);
    const date = formatLongDate(day.date, languageTag.value);

    return t('about.github.tooltip', { count, date }, day.count);
}

function showTooltip(event: PointerEvent, day: ContributionDay) {
    const wrapper = wrapperRef.value;

    if (props.isLoading || !wrapper || !(event.currentTarget instanceof HTMLElement)) {
        return;
    }

    const wrapperRect = wrapper.getBoundingClientRect();
    const cellRect = event.currentTarget.getBoundingClientRect();

    tooltip.value = {
        text: getTooltipText(day),
        left: cellRect.left - wrapperRect.left + cellRect.width / 2,
        top: cellRect.top - wrapperRect.top,
    };
}

function hideTooltip() {
    tooltip.value = undefined;
}

function scrollToMostRecentWeeks() {
    const scroller = scrollerRef.value;

    if (scroller) {
        scroller.scrollLeft = scroller.scrollWidth;
    }
}

onMounted(scrollToMostRecentWeeks);

watch(
    () => props.weeks,
    async () => {
        await nextTick();
        scrollToMostRecentWeeks();
    }
);
</script>

<template>
    <div ref="wrapper" class="relative">
        <div ref="scroller" class="overflow-x-auto pb-2" @scroll="hideTooltip">
            <div
                role="img"
                :aria-label="props.label"
                :class="cn('flex min-w-170 gap-2', props.isLoading && 'animate-pulse')"
                @pointerleave="hideTooltip"
            >
                <div
                    aria-hidden="true"
                    class="sticky left-0 z-10 flex shrink-0 flex-col gap-1 bg-card pr-1 lg:bg-transparent"
                >
                    <span class="h-4" />
                    <div class="grid flex-1 grid-rows-7 gap-0.75">
                        <span
                            v-for="(weekdayLabel, dayIndex) in weekdayLabels"
                            :key="dayIndex"
                            class="flex items-center text-xs leading-none text-muted-foreground capitalize"
                        >
                            {{ weekdayLabel }}
                        </span>
                    </div>
                </div>

                <div aria-hidden="true" class="flex flex-1 flex-col gap-1">
                    <div class="grid h-4 gap-0.75" :style="gridStyle">
                        <span
                            v-for="monthLabel in monthLabels"
                            :key="`${monthLabel.column}-${monthLabel.text}`"
                            class="text-xs leading-none whitespace-nowrap text-muted-foreground capitalize"
                            :style="{ gridColumnStart: monthLabel.column }"
                        >
                            {{ monthLabel.text }}
                        </span>
                    </div>
                    <div class="grid gap-0.75" :style="gridStyle">
                        <div
                            v-for="week in weekColumns"
                            :key="week.key"
                            class="grid grid-rows-7 gap-0.75"
                        >
                            <span
                                v-for="emptyDayIndex in week.leadingEmptyDays"
                                :key="`empty-${emptyDayIndex}`"
                            />
                            <span
                                v-for="(day, dayIndex) in week.days"
                                :key="day.date || dayIndex"
                                :class="
                                    cn(
                                        'aspect-square w-full rounded-xs transition-shadow',
                                        getContributionLevelClass(day.level),
                                        !props.isLoading && 'hover:ring-1 hover:ring-foreground/50'
                                    )
                                "
                                @pointerenter="showTooltip($event, day)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="tooltip"
            aria-hidden="true"
            class="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md border border-border/50 bg-popover px-3 py-1.5 text-xs font-medium whitespace-nowrap text-popover-foreground shadow-lg"
            :style="{ left: `${tooltip.left}px`, top: `${tooltip.top - 8}px` }"
        >
            {{ tooltip.text }}
        </div>
    </div>
</template>

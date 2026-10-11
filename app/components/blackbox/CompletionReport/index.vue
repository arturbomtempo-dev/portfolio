<script setup lang="ts">
import { ArrowLeft, ArrowRight, CircleCheck, RotateCcw, X } from '@lucide/vue';
import type { GameState, MissionCopy, MissionDefinition } from '~/types/blackbox';

interface Props {
    mission: MissionDefinition;
    copy: MissionCopy;
    state: GameState;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    close: [];
    restart: [];
    exit: [];
}>();

const MAX_DIFFICULTY = 3;

const { t } = useI18n();
const localePath = useLocalePath();

const headingRef = useTemplateRef('heading');
const isConfirmingRestart = ref(false);

const solvedChallenges = computed(() =>
    props.mission.challenges.filter((challenge) => props.state.solved.includes(challenge.id))
);

const skills = computed(() => [
    ...new Set(
        solvedChallenges.value.flatMap(
            (challenge) => props.copy.challenges[challenge.id]?.skills ?? []
        )
    ),
]);

const stats = computed(() => [
    { label: t('blackbox.report.time'), value: getElapsedTime(props.state, Date.now()) },
    { label: t('blackbox.report.hints'), value: String(props.state.hintsUsed) },
    { label: t('blackbox.report.commands'), value: String(props.state.commandsRun) },
    {
        label: t('blackbox.status.evidence'),
        value: `${props.state.evidence.length}/${Object.keys(props.copy.evidenceLabels).length}`,
    },
]);

const bonusLabels = computed(() =>
    props.state.bonusConcepts.map((concept) => props.copy.conceptLabels[concept] ?? concept)
);

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        emit('close');
    }
}

onMounted(() => {
    headingRef.value?.focus();
});
</script>

<template>
    <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="blackbox-report-title"
        class="absolute inset-0 z-20 overflow-y-auto bg-terminal-background/95 backdrop-blur-sm"
        @keydown="handleKeyDown"
    >
        <div class="mx-auto max-w-3xl px-5 py-8 motion-safe:animate-report-in sm:px-8 sm:py-12">
            <div class="mb-8 flex items-start justify-between gap-4">
                <div>
                    <p class="mb-3 text-xs tracking-widest text-terminal-muted uppercase">
                        {{ t('blackbox.report.eyebrow') }} · {{ props.mission.incidentId }}
                    </p>
                    <h2
                        id="blackbox-report-title"
                        ref="heading"
                        tabindex="-1"
                        class="text-2xl font-bold text-terminal-foreground outline-none sm:text-3xl"
                    >
                        {{ props.copy.title }}
                        <span class="text-terminal-muted">· {{ props.copy.subtitle }}</span>
                    </h2>
                    <p
                        class="mt-4 inline-flex items-center gap-2 rounded-full border border-terminal-green/40 bg-terminal-green/10 px-3 py-1 text-sm font-medium text-terminal-green"
                    >
                        <CircleCheck class="size-4" />
                        {{ t('blackbox.report.resolved') }}
                    </p>
                </div>
                <BlackboxActionButton variant="ghost" class="px-2" @click="emit('close')">
                    <X />
                    <span class="sr-only">{{ t('blackbox.report.close') }}</span>
                </BlackboxActionButton>
            </div>

            <dl class="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div
                    v-for="stat in stats"
                    :key="stat.label"
                    class="flex flex-col-reverse gap-1 rounded-lg border border-terminal-border bg-terminal-chrome/60 p-4"
                >
                    <dt class="text-xs text-terminal-muted">{{ stat.label }}</dt>
                    <dd class="text-xl font-bold text-terminal-foreground">{{ stat.value }}</dd>
                </div>
            </dl>

            <div class="space-y-8 text-sm leading-relaxed">
                <section>
                    <h3 class="mb-2 text-xs tracking-widest text-terminal-violet uppercase">
                        {{ t('blackbox.report.summary') }}
                    </h3>
                    <p class="text-terminal-foreground">{{ props.copy.report.summary }}</p>
                </section>

                <section>
                    <h3 class="mb-2 text-xs tracking-widest text-terminal-violet uppercase">
                        {{ t('blackbox.report.cause') }}
                    </h3>
                    <p class="text-terminal-foreground">{{ props.copy.report.cause }}</p>
                </section>

                <section>
                    <h3 class="mb-2 text-xs tracking-widest text-terminal-violet uppercase">
                        {{ t('blackbox.report.fix') }}
                    </h3>
                    <p class="text-terminal-foreground">{{ props.copy.report.fix }}</p>
                </section>

                <section>
                    <h3 class="mb-3 text-xs tracking-widest text-terminal-violet uppercase">
                        {{ t('blackbox.report.challenges') }}
                    </h3>
                    <ul class="space-y-2">
                        <li
                            v-for="challenge in solvedChallenges"
                            :key="challenge.id"
                            class="flex items-center justify-between gap-4 rounded-md border border-terminal-border px-3 py-2"
                        >
                            <span class="flex items-center gap-2">
                                <span class="text-terminal-green" aria-hidden="true">✓</span>
                                {{ props.copy.challenges[challenge.id]?.title }}
                            </span>
                            <span
                                class="flex gap-1"
                                role="img"
                                :aria-label="
                                    t('blackbox.report.difficulty', {
                                        level: challenge.difficulty,
                                        total: MAX_DIFFICULTY,
                                    })
                                "
                            >
                                <span
                                    v-for="level in MAX_DIFFICULTY"
                                    :key="level"
                                    aria-hidden="true"
                                    :class="
                                        cn(
                                            'size-1.5 rounded-full',
                                            level <= challenge.difficulty
                                                ? 'bg-terminal-amber'
                                                : 'bg-terminal-border'
                                        )
                                    "
                                />
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 class="mb-3 text-xs tracking-widest text-terminal-violet uppercase">
                        {{ t('blackbox.report.evidence') }}
                    </h3>
                    <ul class="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                        <li
                            v-for="evidence in props.state.evidence"
                            :key="evidence"
                            class="flex items-start gap-2 text-terminal-foreground/90"
                        >
                            <span class="text-terminal-amber" aria-hidden="true">◆</span>
                            {{ props.copy.evidenceLabels[evidence] ?? evidence }}
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 class="mb-3 text-xs tracking-widest text-terminal-violet uppercase">
                        {{ t('blackbox.report.skills') }}
                    </h3>
                    <ul class="flex flex-wrap gap-2">
                        <li
                            v-for="skill in skills"
                            :key="skill"
                            class="rounded-full border border-terminal-green/30 bg-terminal-green/10 px-3 py-1 text-xs text-terminal-green"
                        >
                            {{ skill }}
                        </li>
                    </ul>
                    <p v-if="bonusLabels.length" class="mt-4 text-terminal-blue">
                        {{ t('blackbox.report.extra') }}: {{ bonusLabels.join(', ') }}.
                    </p>
                </section>
            </div>

            <div
                class="mt-10 flex flex-col items-start justify-between gap-3 rounded-lg border border-terminal-border bg-terminal-chrome/60 p-4 sm:flex-row sm:items-center"
            >
                <p class="text-sm text-terminal-muted">{{ t('blackbox.report.projectsCta') }}</p>
                <NuxtLink
                    :to="localePath('/projects')"
                    class="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-terminal-green hover:underline focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none"
                >
                    {{ t('blackbox.report.projectsLink') }}
                    <ArrowRight class="size-4 transition-transform group-hover:translate-x-0.5" />
                </NuxtLink>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BlackboxActionButton variant="primary" @click="emit('exit')">
                    <ArrowLeft />
                    {{ t('blackbox.report.back') }}
                </BlackboxActionButton>

                <template v-if="isConfirmingRestart">
                    <p class="text-sm text-terminal-amber sm:ml-2">
                        {{ t('blackbox.report.restartConfirm') }}
                    </p>
                    <div class="flex gap-2">
                        <BlackboxActionButton @click="emit('restart')">
                            {{ t('blackbox.report.confirm') }}
                        </BlackboxActionButton>
                        <BlackboxActionButton variant="ghost" @click="isConfirmingRestart = false">
                            {{ t('blackbox.report.cancel') }}
                        </BlackboxActionButton>
                    </div>
                </template>
                <BlackboxActionButton v-else @click="isConfirmingRestart = true">
                    <RotateCcw />
                    {{ t('blackbox.report.restart') }}
                </BlackboxActionButton>
            </div>
        </div>
    </div>
</template>

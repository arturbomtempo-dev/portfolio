<script setup lang="ts">
import { FileText, SkipForward, SquareTerminal } from '@lucide/vue';
import type { TerminalOutput } from '~/types/blackbox';

type SessionPhase = 'booting' | 'ready';

const FIRST_LINE_DELAY_IN_MS = 520;
const BOOT_LINE_DELAY_IN_MS = 120;
const INTRO_LINE_DELAY_IN_MS = 55;
const REPORT_DELAY_IN_MS = 1100;

const { t } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const viewportHeight = useVisualViewportHeight();
const {
    mission,
    state,
    lines,
    copy,
    commandHistory,
    isRunning,
    isComplete,
    promptPath,
    appendOutput,
    clearLines,
    restore,
    resetProgress,
    execute,
    complete,
} = useBlackboxSession();

const promptRef = useTemplateRef('prompt');
const scrollerRef = useTemplateRef('scroller');

const phase = ref<SessionPhase>('booting');
const isMaximized = ref(false);
const isMinimized = ref(false);
const isReportOpen = ref(false);
const hasOpeningAnimation = ref(true);

let bootTimers: ReturnType<typeof setTimeout>[] = [];
let pendingBootOutput: TerminalOutput = [];

const rootStyle = computed(() =>
    viewportHeight.value ? { height: `${viewportHeight.value}px` } : undefined
);

const windowTitle = computed(() => `${t('blackbox.ui.environment')}: ${promptPath.value}`);

function scrollToBottom() {
    nextTick(() => {
        const scroller = scrollerRef.value;

        if (scroller) {
            scroller.scrollTop = scroller.scrollHeight;
        }
    });
}

function focusPrompt() {
    if (phase.value === 'ready' && !isReportOpen.value && !isMinimized.value) {
        promptRef.value?.focus();
    }
}

function clearBootTimers() {
    bootTimers.forEach((timer) => clearTimeout(timer));
    bootTimers = [];
}

function finishBoot() {
    clearBootTimers();

    if (pendingBootOutput.length) {
        appendOutput(pendingBootOutput);
        pendingBootOutput = [];
    }

    phase.value = 'ready';
    scrollToBottom();
    nextTick(focusPrompt);
}

function playOutput(output: TerminalOutput, lineDelays: number[]) {
    pendingBootOutput = [...output];
    phase.value = 'booting';

    if (prefersReducedMotion()) {
        finishBoot();
        return;
    }

    let elapsed = FIRST_LINE_DELAY_IN_MS;

    output.forEach((_, index) => {
        elapsed += lineDelays[index] ?? INTRO_LINE_DELAY_IN_MS;
        bootTimers.push(
            setTimeout(() => {
                const nextLine = pendingBootOutput.shift();

                if (nextLine) {
                    appendOutput([nextLine]);
                    scrollToBottom();
                }

                if (!pendingBootOutput.length) {
                    finishBoot();
                }
            }, elapsed)
        );
    });
}

function getWelcomeOutput(isRestored: boolean): TerminalOutput {
    if (!isRestored) {
        return copy.value.introLines;
    }

    return [
        [
            {
                text: t('blackbox.session.restored', {
                    solved: state.value.solved.length,
                    total: mission.challenges.length,
                }),
                tone: 'info',
            },
        ],
    ];
}

function startSession() {
    const isRestored = restore();
    const welcomeOutput = getWelcomeOutput(isRestored);
    const output: TerminalOutput = [...copy.value.bootLines, [], ...welcomeOutput];
    const delays = [
        ...copy.value.bootLines.map(() => BOOT_LINE_DELAY_IN_MS),
        BOOT_LINE_DELAY_IN_MS,
        ...welcomeOutput.map(() => INTRO_LINE_DELAY_IN_MS),
    ];

    playOutput(output, delays);
}

function skipBoot() {
    if (phase.value === 'booting') {
        finishBoot();
    }
}

function isClearShortcut(event: KeyboardEvent) {
    return (event.metaKey || event.ctrlKey) && !event.altKey && event.key.toLowerCase() === 'l';
}

function handleWindowKeyDown(event: KeyboardEvent) {
    if (phase.value === 'booting' && event.key !== 'Tab' && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        skipBoot();
        return;
    }

    if (
        phase.value === 'ready' &&
        !isReportOpen.value &&
        !isMinimized.value &&
        isClearShortcut(event)
    ) {
        event.preventDefault();
        clearLines();
        focusPrompt();
    }
}

async function exitBlackbox() {
    if (window.history.state?.back) {
        router.back();
        return;
    }

    await navigateTo(localePath('/'));
}

async function runCommand(input: string) {
    const effects = await execute(input);

    scrollToBottom();

    if (effects.shouldExit) {
        await exitBlackbox();
        return;
    }

    if (effects.hasCompleted) {
        setTimeout(() => {
            isReportOpen.value = true;
        }, REPORT_DELAY_IN_MS);
    }
}

function requestRestart() {
    isReportOpen.value = false;
    isMinimized.value = false;
    runCommand('reset');
    nextTick(focusPrompt);
}

function restartFromReport() {
    resetProgress();
    isReportOpen.value = false;
    appendOutput([[{ text: t('blackbox.reset.done'), tone: 'success' }], []]);
    playOutput(
        copy.value.introLines,
        copy.value.introLines.map(() => INTRO_LINE_DELAY_IN_MS)
    );
}

function closeReport() {
    isReportOpen.value = false;
    nextTick(focusPrompt);
}

function toggleMaximize() {
    isMaximized.value = !isMaximized.value;
    nextTick(focusPrompt);
}

function minimize() {
    isMinimized.value = true;
}

function restoreWindow() {
    isMinimized.value = false;
    nextTick(focusPrompt);
}

function focusPromptOnClick() {
    if (phase.value === 'booting') {
        skipBoot();
        return;
    }

    if (!window.getSelection()?.toString()) {
        focusPrompt();
    }
}

onMounted(() => {
    hasOpeningAnimation.value = !prefersReducedMotion();
    window.addEventListener('keydown', handleWindowKeyDown);
    startSession();
});

onBeforeUnmount(() => {
    clearBootTimers();
    window.removeEventListener('keydown', handleWindowKeyDown);
});
</script>

<template>
    <div
        :class="
            cn(
                'relative flex h-dvh w-full items-center justify-center overflow-hidden transition-[padding] duration-300',
                isMaximized ? 'p-0' : 'p-2 sm:p-6 lg:p-10'
            )
        "
        :style="rootStyle"
    >
        <div
            aria-hidden="true"
            class="pointer-events-none absolute inset-0 bg-radial-[at_50%_0%] from-terminal-green/10 via-transparent to-transparent"
        />

        <h1 class="sr-only">{{ copy.title }} · {{ copy.subtitle }}</h1>

        <BlackboxTerminalWindow
            :title="windowTitle"
            :incident-id="mission.incidentId"
            :is-resolved="isComplete"
            :is-maximized="isMaximized"
            :has-opening-animation="hasOpeningAnimation"
            :class="
                cn(
                    'relative size-full transition-[max-width,max-height,opacity,transform] duration-300',
                    isMaximized ? 'max-h-none max-w-none' : 'max-h-208 max-w-5xl',
                    isMinimized && 'pointer-events-none translate-y-8 scale-95 opacity-0'
                )
            "
            :aria-hidden="isMinimized || undefined"
            @close="exitBlackbox"
            @minimize="minimize"
            @toggle-maximize="toggleMaximize"
            @restart="requestRestart"
        >
            <div
                ref="scroller"
                class="relative flex-1 overflow-y-auto overscroll-contain px-4 py-4 text-[0.8125rem] leading-relaxed sm:px-5 sm:text-sm"
                @click="focusPromptOnClick"
            >
                <BlackboxTerminalOutput :lines="lines" />

                <BlackboxCommandPrompt
                    v-show="phase === 'ready'"
                    ref="prompt"
                    :prompt-path="promptPath"
                    :history="commandHistory"
                    :is-busy="isRunning"
                    :complete="complete"
                    @submit="runCommand"
                />

                <button
                    v-if="phase === 'ready' && isComplete && !isReportOpen"
                    type="button"
                    class="mt-4 inline-flex items-center gap-2 rounded-md border border-terminal-green/40 bg-terminal-green/10 px-3 py-2 text-xs text-terminal-green transition-colors hover:bg-terminal-green/20 focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none"
                    @click.stop="isReportOpen = true"
                >
                    <FileText class="size-4" />
                    {{ t('blackbox.ui.report') }}
                </button>
            </div>

            <div
                v-if="phase === 'booting'"
                class="absolute right-3 bottom-3 z-10 flex items-center gap-3"
            >
                <span class="hidden text-xs text-terminal-muted sm:inline">
                    {{ t('blackbox.ui.skipHint') }}
                </span>
                <button
                    type="button"
                    class="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-terminal-border bg-terminal-chrome px-3 text-xs text-terminal-foreground transition-colors hover:border-terminal-green/60 focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none"
                    @click="skipBoot"
                >
                    <SkipForward class="size-3.5" />
                    {{ t('blackbox.ui.skip') }}
                </button>
            </div>

            <BlackboxCompletionReport
                v-if="isReportOpen"
                :mission="mission"
                :copy="copy"
                :state="state"
                @close="closeReport"
                @restart="restartFromReport"
                @exit="exitBlackbox"
            />
        </BlackboxTerminalWindow>

        <button
            v-if="isMinimized"
            type="button"
            class="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-terminal-border bg-terminal-chrome px-5 py-3 font-mono text-sm text-terminal-foreground shadow-2xl shadow-black/60 transition-colors hover:border-terminal-green/60 focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none motion-safe:animate-terminal-line"
            @click="restoreWindow"
        >
            <SquareTerminal class="size-4 text-terminal-green" />
            <span class="text-terminal-muted">{{ t('blackbox.ui.minimized') }} ·</span>
            {{ t('blackbox.ui.restoreWindow') }}
        </button>
    </div>
</template>

import { BLACKBOX_COPY_EN } from '~/data/blackbox/en';
import { BLACKBOX_COPY_ES } from '~/data/blackbox/es';
import { BLACKBOX_MISSION } from '~/data/blackbox/mission';
import { BLACKBOX_COPY_PT } from '~/data/blackbox/pt';
import type {
    CommandEffects,
    GameState,
    MissionCopy,
    PendingConfirmation,
    TerminalLine,
    TerminalOutput,
} from '~/types/blackbox';
import type { LocaleCode } from '~/types/locale';

const STORAGE_KEY = 'blackbox-session';
const MAX_TERMINAL_LINES = 1200;
const MAX_COMMAND_HISTORY = 100;

const COPY_BY_LOCALE: Record<LocaleCode, MissionCopy> = {
    pt: BLACKBOX_COPY_PT,
    en: BLACKBOX_COPY_EN,
    es: BLACKBOX_COPY_ES,
};

function readStoredState() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        return stored ? restoreGameState(JSON.parse(stored), BLACKBOX_MISSION) : undefined;
    } catch {
        return undefined;
    }
}

function writeStoredState(state: GameState) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
        return;
    }
}

function clearStoredState() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        return;
    }
}

export function useBlackboxSession() {
    const { t, locale } = useI18n();

    const state = ref<GameState>(createInitialGameState(BLACKBOX_MISSION));
    const lines = ref<TerminalLine[]>([]);
    const commandHistory = ref<string[]>([]);
    const pendingConfirmation = ref<PendingConfirmation>();
    const isRunning = ref(false);
    let nextLineId = 0;

    const copy = computed(() => COPY_BY_LOCALE[locale.value]);
    const isComplete = computed(() => isMissionComplete(BLACKBOX_MISSION, state.value));
    const promptPath = computed(() =>
        formatPromptPath(state.value.cwd, BLACKBOX_MISSION.homeDirectory)
    );
    const hasProgress = computed(
        () => state.value.solved.length > 0 || state.value.evidence.length > 0
    );

    function translate(key: string, named?: Record<string, unknown>) {
        return t(key, named ?? {});
    }

    function appendOutput(output: TerminalOutput, isCommand = false) {
        const newLines = output.map((segments) => ({ id: nextLineId++, segments, isCommand }));

        lines.value = [...lines.value, ...newLines].slice(-MAX_TERMINAL_LINES);
    }

    function appendCommandEcho(input: string) {
        appendOutput(
            [
                [
                    { text: `${t('blackbox.ui.environment')}:`, tone: 'success', isBold: true },
                    { text: promptPath.value, tone: 'directory', isBold: true },
                    { text: '$ ', tone: 'muted' },
                    { text: input, tone: 'command' },
                ],
            ],
            true
        );
    }

    function clearLines() {
        lines.value = [];
    }

    function persist() {
        writeStoredState(state.value);
    }

    function restore() {
        const storedState = readStoredState();

        if (!storedState) {
            return false;
        }

        state.value = isPathInsideMission(storedState.cwd, BLACKBOX_MISSION)
            ? storedState
            : { ...storedState, cwd: BLACKBOX_MISSION.homeDirectory };

        return storedState.solved.length > 0 || storedState.evidence.length > 0;
    }

    function resetProgress() {
        state.value = createInitialGameState(BLACKBOX_MISSION);
        pendingConfirmation.value = undefined;
        commandHistory.value = [];
        clearStoredState();
        clearLines();
    }

    function rememberCommand(input: string) {
        if (commandHistory.value.at(-1) !== input) {
            commandHistory.value = [...commandHistory.value, input].slice(-MAX_COMMAND_HISTORY);
        }
    }

    function answerConfirmation(input: string): CommandEffects {
        pendingConfirmation.value = undefined;

        if (isAffirmativeAnswer(input)) {
            resetProgress();
            appendOutput([[{ text: t('blackbox.reset.done'), tone: 'success' }]]);

            return {};
        }

        appendOutput([[{ text: t('blackbox.reset.cancelled'), tone: 'muted' }]]);

        return {};
    }

    async function execute(input: string): Promise<CommandEffects> {
        const trimmedInput = input.trim();

        appendCommandEcho(trimmedInput);

        if (pendingConfirmation.value) {
            return answerConfirmation(trimmedInput);
        }

        if (!trimmedInput) {
            return {};
        }

        rememberCommand(trimmedInput);
        isRunning.value = true;

        try {
            const result = await runCommand(trimmedInput, {
                state: state.value,
                mission: BLACKBOX_MISSION,
                copy: copy.value,
                t: translate,
                now: Date.now(),
            });

            state.value = result.state;

            if (result.effects.shouldClear) {
                clearLines();
            }

            appendOutput(result.output);

            if (result.effects.shouldConfirmReset) {
                pendingConfirmation.value = 'reset';
            }

            persist();

            return result.effects;
        } finally {
            isRunning.value = false;
        }
    }

    function complete(input: string) {
        return completeCommandLine(input, state.value.cwd, BLACKBOX_MISSION, BLACKBOX_COMMANDS);
    }

    return {
        mission: BLACKBOX_MISSION,
        state,
        lines,
        copy,
        commandHistory,
        pendingConfirmation,
        isRunning,
        isComplete,
        hasProgress,
        promptPath,
        appendOutput,
        clearLines,
        restore,
        resetProgress,
        execute,
        complete,
    };
}

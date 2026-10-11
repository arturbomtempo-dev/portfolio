<script setup lang="ts">
import { CornerDownLeft } from '@lucide/vue';

interface Props {
    promptPath: string;
    history: string[];
    isBusy: boolean;
    complete: (input: string) => string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    submit: [command: string];
}>();

const INPUT_ID = 'blackbox-command';
const QUICK_COMMANDS = ['help', 'ls', 'status', 'hint'];

const { t } = useI18n();

const inputRef = useTemplateRef('input');
const command = ref('');
const historyIndex = ref<number>();

function focus() {
    inputRef.value?.focus({ preventScroll: true });
}

function submitCommand() {
    if (props.isBusy) {
        return;
    }

    emit('submit', command.value);
    command.value = '';
    historyIndex.value = undefined;
}

function runQuickCommand(quickCommand: string) {
    command.value = quickCommand;
    submitCommand();
    focus();
}

function showHistoryEntry(direction: -1 | 1) {
    if (!props.history.length) {
        return;
    }

    const lastIndex = props.history.length - 1;
    const currentIndex = historyIndex.value ?? props.history.length;
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), lastIndex + 1);

    historyIndex.value = nextIndex > lastIndex ? undefined : nextIndex;
    command.value =
        historyIndex.value === undefined ? '' : (props.history[historyIndex.value] ?? '');
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        showHistoryEntry(-1);
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        showHistoryEntry(1);
    } else if (event.key === 'Tab' && command.value.trim()) {
        event.preventDefault();
        command.value = props.complete(command.value);
    }
}

defineExpose({ focus });
</script>

<template>
    <div class="mt-3">
        <form
            class="-mx-2 flex flex-wrap items-center gap-2 rounded-md px-2 py-2 transition-colors focus-within:bg-terminal-chrome/70 md:gap-y-0 md:py-1"
            @submit.prevent="submitCommand"
        >
            <label :for="INPUT_ID" class="shrink-0 font-bold">
                <span class="text-terminal-green">{{ t('blackbox.ui.environment') }}:</span>
                <span class="text-terminal-blue">{{ props.promptPath }}</span>
                <span class="text-terminal-muted">$</span>
                <span class="sr-only">{{ t('blackbox.ui.command') }}</span>
            </label>
            <input
                :id="INPUT_ID"
                ref="input"
                v-model="command"
                type="text"
                maxlength="300"
                autocomplete="off"
                autocapitalize="off"
                autocorrect="off"
                spellcheck="false"
                enterkeyhint="send"
                :aria-busy="props.isBusy"
                class="h-10 min-w-32 flex-1 basis-40 rounded-md border border-terminal-border bg-terminal-background px-3 text-base text-terminal-foreground caret-terminal-green outline-none md:h-auto md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-1 md:text-sm"
                @keydown="handleKeyDown"
            />
            <button
                type="submit"
                :disabled="props.isBusy"
                class="flex size-10 items-center justify-center rounded-md border border-terminal-border bg-terminal-chrome text-terminal-green focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none disabled:opacity-50 md:hidden"
            >
                <CornerDownLeft class="size-4" />
                <span class="sr-only">{{ t('blackbox.ui.send') }}</span>
            </button>
        </form>

        <div
            role="group"
            :aria-label="t('blackbox.ui.suggestions')"
            class="mt-3 flex flex-wrap gap-2 md:hidden"
        >
            <button
                v-for="quickCommand in QUICK_COMMANDS"
                :key="quickCommand"
                type="button"
                :disabled="props.isBusy"
                class="min-h-9 rounded-full border border-terminal-border bg-terminal-chrome px-3.5 text-xs text-terminal-muted transition-colors hover:text-terminal-green focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none disabled:opacity-50"
                @click="runQuickCommand(quickCommand)"
            >
                {{ quickCommand }}
            </button>
        </div>
    </div>
</template>

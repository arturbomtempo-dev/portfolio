<script setup lang="ts">
import type { TerminalLine, TerminalTone } from '~/types/blackbox';

interface Props {
    lines: TerminalLine[];
}

const props = defineProps<Props>();

const { t } = useI18n();

const CLASS_BY_TONE: Record<TerminalTone, string> = {
    default: 'text-terminal-foreground',
    muted: 'text-terminal-muted',
    info: 'text-terminal-blue',
    success: 'text-terminal-green',
    warning: 'text-terminal-amber',
    error: 'text-terminal-red',
    accent: 'text-terminal-violet',
    command: 'text-terminal-foreground',
    path: 'text-terminal-cyan',
    directory: 'text-terminal-blue',
    evidence: 'text-terminal-amber',
};
</script>

<template>
    <div role="log" aria-live="polite" :aria-label="t('blackbox.ui.output')">
        <p
            v-for="line in props.lines"
            :key="line.id"
            :class="
                cn(
                    'min-h-lh wrap-break-word whitespace-pre-wrap motion-safe:animate-terminal-line',
                    line.isCommand && 'mt-3 first:mt-0'
                )
            "
        >
            <span
                v-for="(segment, segmentIndex) in line.segments"
                :key="segmentIndex"
                :class="cn(CLASS_BY_TONE[segment.tone ?? 'default'], segment.isBold && 'font-bold')"
                >{{ segment.text }}</span
            >
        </p>
    </div>
</template>

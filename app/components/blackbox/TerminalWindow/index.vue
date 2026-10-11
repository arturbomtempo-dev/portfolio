<script setup lang="ts">
import { LogOut, Maximize2, Minimize2, Minus, RotateCcw, X } from '@lucide/vue';
import type { HTMLAttributes } from 'vue';

interface Props {
    title: string;
    incidentId: string;
    isResolved: boolean;
    isMaximized: boolean;
    hasOpeningAnimation: boolean;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    class: undefined,
});

const emit = defineEmits<{
    close: [];
    minimize: [];
    toggleMaximize: [];
    restart: [];
}>();

const { t } = useI18n();

const TRAFFIC_LIGHT_CLASSES =
    'flex size-6 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-terminal-foreground/60 focus-visible:outline-none';
const TRAFFIC_LIGHT_DOT_CLASSES =
    'flex size-3 items-center justify-center rounded-full text-black/60 [&_svg]:size-2 [&_svg]:opacity-0 group-hover/lights:[&_svg]:opacity-100 group-focus-within/lights:[&_svg]:opacity-100';
const TITLE_BAR_BUTTON_CLASSES =
    'inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-xs text-terminal-muted transition-colors hover:bg-terminal-background hover:text-terminal-foreground focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:outline-none [&_svg]:size-3.5';
</script>

<template>
    <section
        :aria-label="`${props.title} · ${props.incidentId}`"
        :class="
            cn(
                'relative flex flex-col overflow-hidden border border-terminal-border bg-terminal-background font-mono shadow-2xl shadow-black/60',
                props.isMaximized ? 'rounded-none border-0' : 'rounded-xl',
                props.hasOpeningAnimation && 'motion-safe:animate-terminal-open',
                props.class
            )
        "
    >
        <header
            :class="
                cn(
                    'relative flex h-11 shrink-0 items-center gap-2 border-b border-terminal-border bg-terminal-chrome px-2 sm:px-3',
                    props.hasOpeningAnimation && 'motion-safe:animate-terminal-chrome'
                )
            "
        >
            <div class="group/lights relative z-10 flex items-center">
                <button
                    type="button"
                    :aria-label="t('blackbox.ui.close')"
                    :title="t('blackbox.ui.close')"
                    :class="TRAFFIC_LIGHT_CLASSES"
                    @click="emit('close')"
                >
                    <span :class="cn(TRAFFIC_LIGHT_DOT_CLASSES, 'bg-window-close')">
                        <X :stroke-width="3" />
                    </span>
                </button>
                <button
                    type="button"
                    :aria-label="t('blackbox.ui.minimize')"
                    :title="t('blackbox.ui.minimize')"
                    :class="TRAFFIC_LIGHT_CLASSES"
                    @click="emit('minimize')"
                >
                    <span :class="cn(TRAFFIC_LIGHT_DOT_CLASSES, 'bg-window-minimize')">
                        <Minus :stroke-width="3" />
                    </span>
                </button>
                <button
                    type="button"
                    :aria-label="
                        props.isMaximized ? t('blackbox.ui.restoreSize') : t('blackbox.ui.maximize')
                    "
                    :aria-pressed="props.isMaximized"
                    :title="
                        props.isMaximized ? t('blackbox.ui.restoreSize') : t('blackbox.ui.maximize')
                    "
                    :class="TRAFFIC_LIGHT_CLASSES"
                    @click="emit('toggleMaximize')"
                >
                    <span :class="cn(TRAFFIC_LIGHT_DOT_CLASSES, 'bg-window-maximize')">
                        <Minimize2 v-if="props.isMaximized" :stroke-width="3" />
                        <Maximize2 v-else :stroke-width="3" />
                    </span>
                </button>
            </div>

            <span
                class="relative z-10 ml-2 hidden items-center gap-2 rounded-full border border-terminal-border px-2.5 py-1 text-[0.6875rem] tracking-widest text-terminal-muted uppercase lg:inline-flex"
            >
                <span
                    aria-hidden="true"
                    :class="
                        cn(
                            'size-1.5 rounded-full',
                            props.isResolved ? 'bg-terminal-green' : 'bg-terminal-amber'
                        )
                    "
                />
                {{ props.incidentId }} ·
                {{
                    props.isResolved
                        ? t('blackbox.ui.sessionResolved')
                        : t('blackbox.ui.sessionActive')
                }}
            </span>

            <p
                class="pointer-events-none absolute inset-x-24 truncate text-center text-xs text-terminal-muted sm:inset-x-48 lg:inset-x-80"
            >
                {{ props.title }}
            </p>

            <div class="relative z-10 ml-auto flex items-center gap-1">
                <button type="button" :class="TITLE_BAR_BUTTON_CLASSES" @click="emit('restart')">
                    <RotateCcw />
                    <span class="hidden sm:inline">{{ t('blackbox.ui.restart') }}</span>
                    <span class="sr-only sm:hidden">{{ t('blackbox.ui.restart') }}</span>
                </button>
                <button type="button" :class="TITLE_BAR_BUTTON_CLASSES" @click="emit('close')">
                    <LogOut />
                    <span class="hidden sm:inline">{{ t('blackbox.ui.exit') }}</span>
                    <span class="sr-only sm:hidden">{{ t('blackbox.ui.exit') }}</span>
                </button>
            </div>
        </header>

        <slot />
    </section>
</template>

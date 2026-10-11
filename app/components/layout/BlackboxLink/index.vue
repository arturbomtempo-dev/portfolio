<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    class: undefined,
});

const { t } = useI18n();
const localePath = useLocalePath();
const { enter } = useBlackboxEntry();

function isPlainLeftClick(event: MouseEvent) {
    return (
        !event.defaultPrevented &&
        event.button === 0 &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        !event.altKey
    );
}

function openWithTransition(event: MouseEvent) {
    if (!isPlainLeftClick(event) || !(event.currentTarget instanceof HTMLElement)) {
        return;
    }

    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();

    enter(rect.left + rect.width / 2, rect.top + rect.height / 2);
}
</script>

<template>
    <NuxtLink
        :to="localePath('/blackbox')"
        :class="
            cn(
                'group/blackbox inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 font-mono text-xs font-medium tracking-widest text-muted-foreground transition-colors duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-foreground focus-visible:border-primary focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
                props.class
            )
        "
        @click="openWithTransition"
    >
        <span aria-hidden="true" class="relative flex size-1.5">
            <span
                class="absolute inset-0 rounded-full bg-signal opacity-0 group-hover/blackbox:animate-ping group-hover/blackbox:opacity-75 motion-reduce:hidden"
            />
            <span class="relative size-1.5 rounded-full bg-signal" />
        </span>
        <span>{{ t('nav.blackbox') }}</span>
        <span
            aria-hidden="true"
            class="h-3 w-1.5 bg-primary opacity-0 group-hover/blackbox:animate-caret-blink group-hover/blackbox:opacity-100 group-focus-visible/blackbox:opacity-100"
        />
    </NuxtLink>
</template>

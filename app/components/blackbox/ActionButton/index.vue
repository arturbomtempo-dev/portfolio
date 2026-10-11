<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

type ActionVariant = 'primary' | 'secondary' | 'ghost';

interface Props {
    variant?: ActionVariant;
    to?: string;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'secondary',
    to: undefined,
    class: undefined,
});

const NuxtLink = resolveComponent('NuxtLink');

const BASE_CLASSES =
    'inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 font-mono text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:ring-offset-2 focus-visible:ring-offset-terminal-background focus-visible:outline-none [&_svg]:size-4 [&_svg]:shrink-0';

const VARIANT_CLASSES: Record<ActionVariant, string> = {
    primary: 'bg-terminal-green text-terminal-background hover:bg-terminal-green/90',
    secondary:
        'border border-terminal-border bg-terminal-chrome text-terminal-foreground hover:border-terminal-green/60 hover:text-terminal-green',
    ghost: 'text-terminal-muted hover:bg-terminal-chrome hover:text-terminal-foreground',
};

const classes = computed(() => cn(BASE_CLASSES, VARIANT_CLASSES[props.variant], props.class));
</script>

<template>
    <component
        :is="props.to ? NuxtLink : 'button'"
        :to="props.to"
        :type="props.to ? undefined : 'button'"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface Props {
    variant?: ButtonVariant;
    size?: ButtonSize;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    to: undefined,
    type: 'button',
    class: undefined,
});

const BASE_CLASSES =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'h-9 rounded-md px-3',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 rounded-md px-8',
    icon: 'size-10',
};

const NuxtLink = resolveComponent('NuxtLink');

const isLink = computed(() => props.to !== undefined);

const classes = computed(() =>
    cn(BASE_CLASSES, VARIANT_CLASSES[props.variant], SIZE_CLASSES[props.size], props.class)
);
</script>

<template>
    <component
        :is="isLink ? NuxtLink : 'button'"
        :to="props.to"
        :type="isLink ? undefined : props.type"
        :class="classes"
    >
        <slot />
    </component>
</template>

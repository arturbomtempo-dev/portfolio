<script setup lang="ts">
type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'md' | 'lg' | 'icon';

interface Props {
    variant?: ButtonVariant;
    size?: ButtonSize;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    to: undefined,
    type: 'button',
});

const BASE_CLASSES =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-primary/50 bg-background text-foreground hover:bg-primary/10',
    ghost: 'text-foreground hover:bg-black/5 dark:hover:bg-white/10',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
    icon: 'size-9 rounded-lg',
};

const NuxtLink = resolveComponent('NuxtLink');

const isLink = computed(() => props.to !== undefined);
</script>

<template>
    <component
        :is="isLink ? NuxtLink : 'button'"
        :to="props.to"
        :type="isLink ? undefined : props.type"
        :class="[BASE_CLASSES, VARIANT_CLASSES[props.variant], SIZE_CLASSES[props.size]]"
    >
        <slot />
    </component>
</template>

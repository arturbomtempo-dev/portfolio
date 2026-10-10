<script setup lang="ts" generic="TValue extends string">
import type { HTMLAttributes } from 'vue';

interface FilterOption {
    value: TValue;
    label: string;
}

interface Props {
    options: FilterOption[];
    label: string;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    class: undefined,
});

const selectedValue = defineModel<TValue>({ required: true });

defineSlots<{
    icon?(slotProps: { value: TValue }): unknown;
}>();

const ACTIVE_CLASSES = 'bg-primary hover:bg-primary-glow';
const INACTIVE_CLASSES = 'border-primary/50 hover:bg-primary/10';
</script>

<template>
    <div
        role="group"
        :aria-label="props.label"
        :class="cn('flex flex-wrap justify-center gap-4', props.class)"
    >
        <UiBaseButton
            v-for="option in props.options"
            :key="option.value"
            :variant="option.value === selectedValue ? 'primary' : 'outline'"
            :class="option.value === selectedValue ? ACTIVE_CLASSES : INACTIVE_CLASSES"
            :aria-pressed="option.value === selectedValue"
            @click="selectedValue = option.value"
        >
            <slot name="icon" :value="option.value" />
            {{ option.label }}
        </UiBaseButton>
    </div>
</template>

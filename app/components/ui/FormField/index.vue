<script setup lang="ts">
interface Props {
    id: string;
    label: string;
    error?: string;
}

const props = withDefaults(defineProps<Props>(), {
    error: undefined,
});

defineSlots<{
    default(slotProps: { fieldId: string; errorId: string; isInvalid: boolean }): unknown;
}>();

const errorId = computed(() => `${props.id}-error`);
const isInvalid = computed(() => Boolean(props.error));
</script>

<template>
    <div>
        <label :for="props.id" class="mb-2 block text-sm font-medium">{{ props.label }}</label>
        <slot :field-id="props.id" :error-id="errorId" :is-invalid="isInvalid" />
        <p v-if="props.error" :id="errorId" role="alert" class="mt-1 text-sm text-destructive">
            {{ props.error }}
        </p>
    </div>
</template>

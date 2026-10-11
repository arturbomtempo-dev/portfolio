<script setup lang="ts">
interface Props {
    statusCode: number;
    title: string;
    description: string;
    requestedPath?: string;
}

const props = withDefaults(defineProps<Props>(), {
    requestedPath: undefined,
});

defineSlots<{
    actions(): unknown;
}>();

const { t } = useI18n();
</script>

<template>
    <UiBaseCard :is-hoverable="false" class="animate-fade-in p-6 text-center sm:p-12">
        <p
            aria-hidden="true"
            class="glow-text mb-2 font-heading text-8xl font-bold opacity-50 sm:text-9xl"
        >
            {{ props.statusCode }}
        </p>
        <h1 class="mb-4 text-3xl font-bold sm:text-4xl">{{ props.title }}</h1>
        <p class="mx-auto max-w-md text-lg text-muted-foreground">{{ props.description }}</p>
        <p v-if="props.requestedPath" class="mt-6">
            <span class="sr-only">{{ t('errors.requestedPath') }}:</span>
            <code
                class="inline-block max-w-full rounded-md border border-border/50 bg-muted/50 px-3 py-1 font-mono text-sm break-all text-muted-foreground"
            >
                {{ props.requestedPath }}
            </code>
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <slot name="actions" />
        </div>
    </UiBaseCard>
</template>

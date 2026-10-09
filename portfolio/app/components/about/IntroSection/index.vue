<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <section class="mb-16 animate-fade-in text-center">
        <h1 class="glow-text mb-4 text-4xl font-bold sm:text-5xl">{{ t('about.title') }}</h1>
        <p class="mx-auto max-w-3xl text-lg text-muted-foreground">
            {{ t('about.description') }}
        </p>
    </section>
</template>

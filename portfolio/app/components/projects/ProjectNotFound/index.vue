<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <section class="animate-fade-in p-8 text-center sm:p-12">
        <h1 class="mb-4 text-2xl font-bold sm:text-3xl">
            {{ t('projectDetails.notFound.title') }}
        </h1>
        <p class="mx-auto mb-8 max-w-md text-lg text-muted-foreground">
            {{ t('projectDetails.notFound.message') }}
        </p>
        <NuxtLink
            :to="localePath('/projects')"
            class="group inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
        >
            <ArrowLeft class="size-4 transition-transform group-hover:-translate-x-1" />
            {{ t('projectDetails.backButton') }}
        </NuxtLink>
    </section>
</template>

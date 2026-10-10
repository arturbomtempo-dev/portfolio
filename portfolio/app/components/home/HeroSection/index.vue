<script setup lang="ts">
import { User } from '@lucide/vue';
import { PROFILE } from '~/data/profile';

const AVATAR_SIZE_IN_PX = 160;

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
    <section class="flex min-h-screen items-center justify-center px-6 sm:px-8">
        <div class="mx-auto max-w-4xl animate-fade-in text-center">
            <div class="mb-8">
                <div
                    class="mx-auto mb-6 size-40 overflow-hidden rounded-full border-4 border-primary/30 shadow-glow"
                >
                    <img
                        :src="PROFILE.avatarUrl"
                        :alt="t('home.avatarAlt')"
                        :width="AVATAR_SIZE_IN_PX"
                        :height="AVATAR_SIZE_IN_PX"
                        fetchpriority="high"
                        class="size-full object-cover"
                    />
                </div>
                <p class="mb-2 text-base text-muted-foreground sm:text-lg">
                    {{ t('home.greeting') }}
                </p>
                <h1 class="glow-text mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
                    {{ PROFILE.name }}
                </h1>
                <p
                    class="mb-6 font-heading text-lg font-semibold text-primary sm:text-xl md:text-2xl"
                >
                    {{ t('home.role') }}
                </p>
                <p class="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
                    {{ t('home.description') }}
                </p>
            </div>

            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <UiBaseButton
                    :to="localePath('/about')"
                    size="lg"
                    class="group mx-auto w-1/2 bg-primary hover:bg-primary-glow sm:mx-0 sm:w-auto"
                >
                    {{ t('home.aboutButton') }}
                    <User class="ml-2 transition-transform group-hover:translate-x-1" />
                </UiBaseButton>
                <UiBaseButton
                    :to="localePath('/contact')"
                    variant="outline"
                    size="lg"
                    class="mx-auto w-1/2 border-primary/50 hover:bg-primary/10 sm:mx-0 sm:w-auto"
                >
                    {{ t('home.contactButton') }}
                </UiBaseButton>
            </div>
        </div>
    </section>
</template>

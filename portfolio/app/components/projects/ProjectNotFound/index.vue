<script setup lang="ts">
import { ArrowLeft, House } from '@lucide/vue';

const NOT_FOUND_STATUS_CODE = 404;

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
</script>

<template>
    <UiErrorState
        :status-code="NOT_FOUND_STATUS_CODE"
        :title="t('projectDetails.notFound.title')"
        :description="t('projectDetails.notFound.message')"
        :requested-path="route.path"
    >
        <template #actions>
            <UiBaseButton
                :to="localePath('/projects')"
                class="group bg-primary hover:bg-primary-glow"
            >
                <ArrowLeft class="transition-transform group-hover:-translate-x-1" />
                {{ t('projectDetails.backButton') }}
            </UiBaseButton>
            <UiBaseButton
                :to="localePath('/')"
                variant="outline"
                class="border-primary/50 hover:bg-primary/10"
            >
                <House />
                {{ t('errors.actions.backHome') }}
            </UiBaseButton>
        </template>
    </UiErrorState>
</template>

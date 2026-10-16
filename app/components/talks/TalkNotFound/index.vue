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
        :title="t('eventDetails.notFound.title')"
        :description="t('eventDetails.notFound.message')"
        :requested-path="route.path"
    >
        <template #actions>
            <UiBaseButton :to="localePath('/events')" class="group">
                <ArrowLeft class="transition-transform group-hover:-translate-x-1" />
                {{ t('eventDetails.backButton') }}
            </UiBaseButton>
            <UiBaseButton :to="localePath('/')" variant="outline-primary">
                <House />
                {{ t('errors.actions.backHome') }}
            </UiBaseButton>
        </template>
    </UiErrorState>
</template>

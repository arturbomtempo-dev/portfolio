<script setup lang="ts">
import type { NuxtError } from '#app';
import { FolderOpen, House, RotateCw } from '@lucide/vue';

interface Props {
    error: NuxtError;
}

const props = defineProps<Props>();

const NOT_FOUND_STATUS_CODE = 404;
const UNEXPECTED_STATUS_CODE = 500;
const PRIMARY_ACTION_CLASSES = 'group bg-primary hover:bg-primary-glow';
const SECONDARY_ACTION_CLASSES = 'border-primary/50 hover:bg-primary/10';

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const localeHead = useLocaleHead();

const statusCode = computed(() => props.error.statusCode ?? UNEXPECTED_STATUS_CODE);
const isNotFound = computed(() => statusCode.value === NOT_FOUND_STATUS_CODE);
const messageKey = computed(() => (isNotFound.value ? 'notFound' : 'unexpected'));

function leaveErrorPage(path: string) {
    clearError({ redirect: localePath(path) });
}

function retryCurrentPage() {
    reloadNuxtApp({ path: route.fullPath, force: true });
}

useHead(() => ({
    htmlAttrs: localeHead.value.htmlAttrs,
}));

useSeoMeta({
    title: () => t(`errors.${messageKey.value}.seo.title`),
    robots: 'noindex, nofollow',
});
</script>

<template>
    <NuxtLayout>
        <div class="flex min-h-screen items-center justify-center px-6 py-20">
            <div class="mx-auto w-full max-w-2xl sm:px-8">
                <UiErrorState
                    :status-code="statusCode"
                    :title="t(`errors.${messageKey}.title`)"
                    :description="t(`errors.${messageKey}.description`)"
                    :requested-path="isNotFound ? route.path : undefined"
                >
                    <template #actions>
                        <template v-if="isNotFound">
                            <UiBaseButton
                                :class="PRIMARY_ACTION_CLASSES"
                                @click="leaveErrorPage('/')"
                            >
                                <House />
                                {{ t('errors.actions.backHome') }}
                            </UiBaseButton>
                            <UiBaseButton
                                variant="outline"
                                :class="SECONDARY_ACTION_CLASSES"
                                @click="leaveErrorPage('/projects')"
                            >
                                <FolderOpen />
                                {{ t('errors.actions.viewProjects') }}
                            </UiBaseButton>
                        </template>
                        <template v-else>
                            <UiBaseButton :class="PRIMARY_ACTION_CLASSES" @click="retryCurrentPage">
                                <RotateCw class="transition-transform group-hover:rotate-90" />
                                {{ t('errors.actions.tryAgain') }}
                            </UiBaseButton>
                            <UiBaseButton
                                variant="outline"
                                :class="SECONDARY_ACTION_CLASSES"
                                @click="leaveErrorPage('/')"
                            >
                                <House />
                                {{ t('errors.actions.backHome') }}
                            </UiBaseButton>
                        </template>
                    </template>
                </UiErrorState>
            </div>
        </div>
    </NuxtLayout>
</template>

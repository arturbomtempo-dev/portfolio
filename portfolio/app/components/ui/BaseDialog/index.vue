<script setup lang="ts">
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

interface Props {
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    class: undefined,
});

const isOpen = defineModel<boolean>('open', { required: true });

const { t } = useI18n();

const CONTENT_CLASSES =
    'fixed top-[50%] left-[50%] z-50 grid max-h-[85vh] w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto rounded-xl border bg-background p-4 shadow-lg duration-200 sm:p-6 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-bottom-[2%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-[2%]';

const contentClasses = computed(() => cn(CONTENT_CLASSES, props.class));
</script>

<template>
    <DialogRoot v-model:open="isOpen">
        <DialogPortal>
            <DialogOverlay
                class="fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
            />
            <DialogContent :class="contentClasses">
                <slot />
                <DialogClose
                    class="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
                >
                    <Icon name="portfolio:x" class="h-4 w-4" />
                    <span class="sr-only">{{ t('common.close') }}</span>
                </DialogClose>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

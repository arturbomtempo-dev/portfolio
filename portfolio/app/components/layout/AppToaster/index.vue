<script setup lang="ts">
const TOASTER_STYLE = {
    '--normal-bg': 'var(--background)',
    '--normal-text': 'var(--foreground)',
    '--normal-border': 'var(--border)',
};

const TOAST_CLASSES = {
    toast: 'shadow-lg!',
    description: 'text-muted-foreground!',
    actionButton: 'bg-primary! text-primary-foreground!',
    cancelButton: 'bg-muted! text-muted-foreground!',
};

const colorMode = useColorMode();

const theme = computed(() => (colorMode.value === 'light' ? 'light' : 'dark'));
</script>

<template>
    <Toaster :theme="theme" :style="TOASTER_STYLE" :toast-options="{ classes: TOAST_CLASSES }" />
</template>

<script setup lang="ts">
const { t } = useI18n();
const colorMode = useColorMode();

function toggleTheme() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
    <UiBaseButton
        variant="ghost"
        size="icon"
        class="relative"
        :aria-label="t('header.toggleTheme')"
        @click="toggleTheme"
    >
        <Icon
            name="lucide:sun"
            class="size-[1.2rem] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90"
        />
        <Icon
            name="lucide:moon"
            class="absolute size-[1.2rem] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0"
        />
    </UiBaseButton>
</template>

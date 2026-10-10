<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue';
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
        class="relative h-9 w-9 rounded-lg text-foreground transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10"
        :aria-label="t('header.toggleTheme')"
        @click="toggleTheme"
    >
        <Sun
            class="[transform:rotate(0)_scale(1)] text-foreground transition-all duration-300 dark:[transform:rotate(-90deg)_scale(0)]"
        />
        <Moon
            class="absolute [transform:rotate(90deg)_scale(0)] text-foreground transition-all duration-300 dark:[transform:rotate(0)_scale(1)]"
        />
    </UiBaseButton>
</template>

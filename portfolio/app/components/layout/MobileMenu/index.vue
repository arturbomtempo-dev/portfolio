<script setup lang="ts">
import type { NavigationItem } from '~/types/navigation';

interface Props {
    items: NavigationItem[];
}

const props = defineProps<Props>();

const { t } = useI18n();
</script>

<template>
    <nav
        :aria-label="t('header.mainNavigation')"
        class="mx-auto max-w-xs animate-fade-in border-t border-border/50 py-4"
    >
        <ul class="flex flex-col gap-1">
            <li v-for="item in props.items" :key="item.to">
                <NuxtLink
                    :to="item.to"
                    class="block w-full px-4 py-3 text-center text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground [&.router-link-active]:text-foreground"
                >
                    <span class="link-underline [--link-underline-offset:-0.25rem]">
                        {{ item.label }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

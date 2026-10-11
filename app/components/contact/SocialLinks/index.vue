<script setup lang="ts">
import { SOCIAL_LINKS } from '~/data/socialLinks';

const SOCIAL_ICON_SIZE_CLASS = 'size-7';

const { t } = useI18n();

function isWebLink(href: string) {
    return href.startsWith('http');
}
</script>

<template>
    <nav
        :aria-label="t('contact.socialLinksLabel')"
        class="mb-12 flex animate-fade-in justify-center gap-6"
    >
        <NuxtLink
            v-for="link in SOCIAL_LINKS"
            :key="link.href"
            :to="link.href"
            :target="isWebLink(link.href) ? '_blank' : undefined"
            :aria-label="t(link.labelKey)"
            :class="
                cn(
                    'text-muted-foreground transition-all duration-300 hover:scale-110',
                    link.hoverClass
                )
            "
        >
            <component :is="link.icon" :class="SOCIAL_ICON_SIZE_CLASS" />
        </NuxtLink>
    </nav>
</template>

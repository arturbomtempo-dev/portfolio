<script setup lang="ts">
const MOBILE_MENU_ID = 'mobile-menu';

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { items } = useNavigation();

const isMobileMenuOpen = ref(false);

const mobileMenuButtonLabel = computed(() =>
    isMobileMenuOpen.value ? t('header.closeMenu') : t('header.openMenu')
);

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

watch(
    () => route.fullPath,
    () => {
        isMobileMenuOpen.value = false;
    }
);
</script>

<template>
    <header class="glass-card fixed inset-x-0 top-0 z-50 border-b">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
            <div class="flex h-16 items-center justify-between">
                <NuxtLink
                    :to="localePath('/')"
                    class="font-heading text-xl font-bold text-foreground transition-colors hover:text-primary"
                >
                    <span class="glow-text">
                        {{ t('header.logo') }}<span class="text-primary">.</span>
                    </span>
                </NuxtLink>

                <div class="flex items-center gap-6">
                    <nav :aria-label="t('header.mainNavigation')" class="hidden md:block">
                        <ul class="flex items-center gap-6">
                            <li v-for="item in items" :key="item.to">
                                <NuxtLink
                                    :to="item.to"
                                    class="link-underline text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground [&.router-link-active]:text-foreground"
                                >
                                    {{ item.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-2">
                        <LayoutThemeToggle />
                        <LayoutLanguageSelect />
                        <UiBaseButton
                            variant="ghost"
                            size="icon"
                            class="md:hidden"
                            :aria-label="mobileMenuButtonLabel"
                            :aria-expanded="isMobileMenuOpen"
                            :aria-controls="MOBILE_MENU_ID"
                            @click="toggleMobileMenu"
                        >
                            <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="24" />
                        </UiBaseButton>
                    </div>
                </div>
            </div>

            <LayoutMobileMenu
                v-if="isMobileMenuOpen"
                :id="MOBILE_MENU_ID"
                :items="items"
                class="md:hidden"
            />
        </div>
    </header>
</template>

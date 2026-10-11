<script setup lang="ts">
import { Check, ChevronDown, Globe } from '@lucide/vue';

const MENU_ID = 'language-menu';

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const rootRef = useTemplateRef('root');
const triggerRef = useTemplateRef('trigger');
const menuRef = useTemplateRef('menu');

const isOpen = ref(false);

function getOptionElements() {
    return Array.from(menuRef.value?.querySelectorAll('a') ?? []);
}

function focusOption(index: number) {
    const options = getOptionElements();
    const wrappedIndex = (index + options.length) % options.length;

    options[wrappedIndex]?.focus();
}

function focusCurrentOption() {
    const currentIndex = locales.value.findIndex((option) => option.code === locale.value);

    focusOption(Math.max(currentIndex, 0));
}

async function open() {
    isOpen.value = true;
    await nextTick();
    focusCurrentOption();
}

function close(shouldRestoreFocus = false) {
    isOpen.value = false;

    if (shouldRestoreFocus) {
        triggerRef.value?.focus();
    }
}

function toggle() {
    if (isOpen.value) {
        close();
    } else {
        open();
    }
}

function handleMenuKeyDown(event: KeyboardEvent) {
    const options = getOptionElements();
    const focusedIndex = options.findIndex((option) => option === document.activeElement);

    const actions: Record<string, () => void> = {
        ArrowDown: () => focusOption(focusedIndex + 1),
        ArrowUp: () => focusOption(focusedIndex - 1),
        Home: () => focusOption(0),
        End: () => focusOption(options.length - 1),
        Escape: () => close(true),
        Tab: () => close(),
    };

    const action = actions[event.key];

    if (!action) {
        return;
    }

    if (event.key !== 'Tab') {
        event.preventDefault();
    }

    action();
}

function handleTriggerKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        open();
    }
}

function closeWhenClickingOutside(event: PointerEvent) {
    if (isOpen.value && !rootRef.value?.contains(event.target as Node)) {
        close();
    }
}

watch(locale, () => close());

onMounted(() => {
    document.addEventListener('pointerdown', closeWhenClickingOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', closeWhenClickingOutside);
});
</script>

<template>
    <div ref="root" class="relative">
        <button
            ref="trigger"
            type="button"
            :aria-label="t('header.selectLanguage')"
            :aria-expanded="isOpen"
            :aria-controls="MENU_ID"
            class="flex h-10 w-21.25 items-center justify-between gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
            @click="toggle"
            @keydown="handleTriggerKeyDown"
        >
            <Globe class="size-3.5" />
            <span class="line-clamp-1">{{ locale.toUpperCase() }}</span>
            <ChevronDown class="size-4 opacity-50" />
        </button>

        <Transition
            enter-active-class="animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
            leave-active-class="animate-out fade-out-0 zoom-out-95"
        >
            <ul
                v-show="isOpen"
                :id="MENU_ID"
                ref="menu"
                class="absolute top-full left-0 z-50 mt-1 max-h-96 min-w-23.25 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
                @keydown="handleMenuKeyDown"
            >
                <li v-for="option in locales" :key="option.code">
                    <NuxtLink
                        :to="switchLocalePath(option.code)"
                        :hreflang="option.language"
                        :lang="option.language"
                        :aria-current="option.code === locale ? 'true' : undefined"
                        class="relative flex w-full items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        @click="close(true)"
                    >
                        <span class="absolute left-2 flex size-3.5 items-center justify-center">
                            <Check v-if="option.code === locale" class="size-4" />
                        </span>
                        {{ option.code.toUpperCase() }}
                    </NuxtLink>
                </li>
            </ul>
        </Transition>
    </div>
</template>

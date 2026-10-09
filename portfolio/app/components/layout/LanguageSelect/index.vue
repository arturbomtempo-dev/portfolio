<script setup lang="ts">
import {
    SelectContent,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    SelectPortal,
    SelectRoot,
    SelectTrigger,
    SelectViewport,
} from 'reka-ui';

type LocaleCode = ReturnType<typeof useI18n>['locale']['value'];

const { t, locale, locales, setLocale } = useI18n();

const selectedLocale = computed({
    get: () => locale.value,
    set: (code: LocaleCode) => setLocale(code),
});
</script>

<template>
    <SelectRoot v-model="selectedLocale">
        <SelectTrigger
            :aria-label="t('header.selectLanguage')"
            class="flex h-10 w-[85px] items-center justify-between gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
        >
            <Icon name="portfolio:globe" class="h-3.5 w-3.5" />
            <span class="line-clamp-1">{{ locale.toUpperCase() }}</span>
            <Icon name="portfolio:chevron-down" class="h-4 w-4 opacity-50" />
        </SelectTrigger>

        <SelectPortal>
            <SelectContent
                position="popper"
                class="relative z-50 max-h-96 min-w-[85px] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:-translate-x-1 data-[side=left]:slide-in-from-right-2 data-[side=right]:translate-x-1 data-[side=right]:slide-in-from-left-2 data-[side=top]:-translate-y-1 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
            >
                <SelectViewport
                    class="h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] p-1"
                >
                    <SelectItem
                        v-for="option in locales"
                        :key="option.code"
                        :value="option.code"
                        class="relative flex w-full cursor-pointer items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
                    >
                        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                            <SelectItemIndicator>
                                <Icon name="portfolio:check" class="h-4 w-4" />
                            </SelectItemIndicator>
                        </span>
                        <SelectItemText>{{ option.code.toUpperCase() }}</SelectItemText>
                    </SelectItem>
                </SelectViewport>
            </SelectContent>
        </SelectPortal>
    </SelectRoot>
</template>

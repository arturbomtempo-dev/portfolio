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
            class="flex h-9 w-[85px] items-center justify-between gap-1.5 rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
            <Icon name="lucide:globe" class="size-3.5 shrink-0" />
            <span>{{ locale.toUpperCase() }}</span>
            <Icon name="lucide:chevron-down" class="size-4 shrink-0 opacity-50" />
        </SelectTrigger>

        <SelectPortal>
            <SelectContent
                position="popper"
                :side-offset="4"
                class="z-50 min-w-[85px] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md"
            >
                <SelectViewport class="p-1">
                    <SelectItem
                        v-for="option in locales"
                        :key="option.code"
                        :value="option.code"
                        class="relative flex cursor-pointer items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
                    >
                        <SelectItemIndicator class="absolute left-2 inline-flex items-center">
                            <Icon name="lucide:check" class="size-4" />
                        </SelectItemIndicator>
                        <SelectItemText>{{ option.code.toUpperCase() }}</SelectItemText>
                    </SelectItem>
                </SelectViewport>
            </SelectContent>
        </SelectPortal>
    </SelectRoot>
</template>

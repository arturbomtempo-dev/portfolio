<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { TalkType } from '~/types/talk';

interface Props {
    type: TalkType;
    class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
    class: undefined,
});

const { t } = useI18n();
</script>

<template>
    <span
        :class="
            cn(
                'inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm',
                props.class
            )
        "
    >
        <TalksTalkTypeIcon :type="props.type" class="size-3.5" />
        {{ t(`talks.types.${props.type}`) }}
    </span>
</template>

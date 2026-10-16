<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { EventType } from '~/types/event';

interface Props {
    type: EventType;
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
        <EventsEventTypeIcon :type="props.type" class="size-3.5" />
        {{ t(`events.types.${props.type}`) }}
    </span>
</template>

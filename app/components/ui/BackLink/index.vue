<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';

interface Props {
    to: string;
    shouldReturnToPreviousPage?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    shouldReturnToPreviousPage: false,
});

const router = useRouter();

function getPathWithoutQuery(fullPath: string) {
    return fullPath.split(/[?#]/)[0];
}

function isPlainLeftClick(event: MouseEvent) {
    return (
        event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
    );
}

function isPreviousPageTheTarget() {
    const previousPath: unknown = window.history.state?.back;

    return typeof previousPath === 'string' && getPathWithoutQuery(previousPath) === props.to;
}

function returnToPreviousPage(event: MouseEvent) {
    if (props.shouldReturnToPreviousPage && isPlainLeftClick(event) && isPreviousPageTheTarget()) {
        event.preventDefault();
        router.back();
    }
}
</script>

<template>
    <NuxtLink
        :to="props.to"
        class="back-link focus-visible:outline-none"
        @click.capture="returnToPreviousPage"
    >
        <ArrowLeft class="size-4" />
        <slot />
    </NuxtLink>
</template>

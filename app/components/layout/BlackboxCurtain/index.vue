<script setup lang="ts">
const { origin, openBlackbox } = useBlackboxEntry();

const curtainStyle = computed(() =>
    origin.value
        ? { '--curtain-x': `${origin.value.x}px`, '--curtain-y': `${origin.value.y}px` }
        : undefined
);
</script>

<template>
    <div
        v-if="origin"
        aria-hidden="true"
        class="fixed inset-0 z-100 animate-blackbox-curtain bg-terminal-backdrop"
        :style="curtainStyle"
        @animationend="openBlackbox"
    />
</template>

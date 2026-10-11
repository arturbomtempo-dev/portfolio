<script setup lang="ts">
const NOT_FOUND_STATUS_CODE = 404;

const route = useRoute();

throw createError({
    statusCode: NOT_FOUND_STATUS_CODE,
    statusMessage: `Page not found: ${route.path}`,
    fatal: true,
});
</script>

<template></template>

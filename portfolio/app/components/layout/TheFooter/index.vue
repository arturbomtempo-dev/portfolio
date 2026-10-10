<script setup lang="ts">
const { t } = useI18n();

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="glass-card mt-20 py-7">
        <p class="text-center text-sm text-muted-foreground">
            {{ t('footer.rights', { year: currentYear }) }}
        </p>
    </footer>
</template>

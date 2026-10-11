<script setup lang="ts">
const { t } = useI18n();

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="glass-card mt-20 py-7">
        <div class="mx-auto w-full max-w-350 px-6 lg:px-8">
            <p class="text-center text-sm text-balance text-muted-foreground">
                {{ t('footer.rights', { year: currentYear }) }}
            </p>
        </div>
    </footer>
</template>

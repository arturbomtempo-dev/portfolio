<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
    title: () => t('contact.seo.title'),
    description: () => t('contact.seo.description'),
    ogTitle: () => t('contact.seo.ogTitle'),
    ogDescription: () => t('contact.seo.ogDescription'),
    ogType: 'website',
});
</script>

<template>
    <div class="min-h-screen px-6 py-20 sm:px-8">
        <div class="mx-auto w-full max-w-4xl px-8">
            <UiPageHeader
                :title="t('contact.title')"
                :description="t('contact.description')"
                description-class="max-w-2xl"
                class="mb-12"
            />
            <ContactSocialLinks />
            <ContactMessageForm />
        </div>
    </div>
</template>

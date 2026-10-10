<script setup lang="ts">
import { Send } from '@lucide/vue';
import { toast } from 'vue-sonner';
import { z } from 'zod';

interface FormSubmitResponse {
    success: boolean | string;
    message?: string;
}

const NAME_MIN_LENGTH = 5;
const MESSAGE_MIN_LENGTH = 50;
const MESSAGE_ROWS = 6;
const NOTIFICATION_EMAIL_SUBJECT = 'Nova mensagem do portfólio!';
const FORM_SUBMIT_OPTIONS = {
    _captcha: 'false',
    _template: 'table',
    _subject: NOTIFICATION_EMAIL_SUBJECT,
};

const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();

const contactSchema = computed(() =>
    z.object({
        name: z
            .string()
            .min(1, t('contact.validation.nameRequired'))
            .min(NAME_MIN_LENGTH, t('contact.validation.nameMinLength')),
        email: z
            .string()
            .min(1, t('contact.validation.emailRequired'))
            .pipe(z.email(t('contact.validation.emailInvalid'))),
        message: z
            .string()
            .min(1, t('contact.validation.messageRequired'))
            .min(MESSAGE_MIN_LENGTH, t('contact.validation.messageMinLength')),
    })
);

const { values, errors, isSubmitting, handleSubmit, reset } = useSchemaForm(contactSchema, {
    name: '',
    email: '',
    message: '',
});

const honeypot = ref('');

function isAcceptedSubmission(response: FormSubmitResponse) {
    return String(response.success) === 'true';
}

const submitMessage = handleSubmit(async (message) => {
    try {
        const response = await $fetch<FormSubmitResponse>(
            runtimeConfig.public.contactFormEndpoint,
            {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: { ...message, ...FORM_SUBMIT_OPTIONS, _honey: honeypot.value },
            }
        );

        if (!isAcceptedSubmission(response)) {
            throw new Error(response.message);
        }

        toast.success(t('contact.feedback.successTitle'), {
            description: t('contact.feedback.successDescription'),
        });
        reset();
    } catch {
        toast.error(t('contact.feedback.errorTitle'), {
            description: t('contact.feedback.errorDescription'),
        });
    }
});
</script>

<template>
    <UiBaseCard
        :is-hoverable="false"
        class="mx-auto max-w-full animate-fade-in p-6 sm:max-w-4xl sm:p-8"
    >
        <form novalidate class="space-y-6" @submit.prevent="submitMessage">
            <UiFormField id="contact-name" :label="t('contact.form.name')" :error="errors.name">
                <template #default="{ fieldId, errorId, isInvalid }">
                    <UiTextInput
                        :id="fieldId"
                        v-model="values.name"
                        name="name"
                        autocomplete="name"
                        :placeholder="t('contact.form.namePlaceholder')"
                        :is-invalid="isInvalid"
                        :aria-describedby="isInvalid ? errorId : undefined"
                        class="bg-muted/30 transition-colors"
                    />
                </template>
            </UiFormField>

            <UiFormField id="contact-email" :label="t('contact.form.email')" :error="errors.email">
                <template #default="{ fieldId, errorId, isInvalid }">
                    <UiTextInput
                        :id="fieldId"
                        v-model="values.email"
                        type="email"
                        name="email"
                        autocomplete="email"
                        :placeholder="t('contact.form.emailPlaceholder')"
                        :is-invalid="isInvalid"
                        :aria-describedby="isInvalid ? errorId : undefined"
                        class="bg-muted/30 transition-colors"
                    />
                </template>
            </UiFormField>

            <UiFormField
                id="contact-message"
                :label="t('contact.form.message')"
                :error="errors.message"
            >
                <template #default="{ fieldId, errorId, isInvalid }">
                    <UiTextArea
                        :id="fieldId"
                        v-model="values.message"
                        name="message"
                        :rows="MESSAGE_ROWS"
                        :placeholder="t('contact.form.messagePlaceholder')"
                        :is-invalid="isInvalid"
                        :aria-describedby="isInvalid ? errorId : undefined"
                        class="resize-none bg-muted/30 transition-colors"
                    />
                </template>
            </UiFormField>

            <input
                v-model="honeypot"
                type="text"
                name="_honey"
                tabindex="-1"
                autocomplete="off"
                aria-hidden="true"
                class="hidden"
            />

            <UiBaseButton
                type="submit"
                size="lg"
                :disabled="isSubmitting"
                class="group w-full bg-primary hover:bg-primary-glow"
            >
                <template v-if="isSubmitting">{{ t('contact.form.submitting') }}</template>
                <template v-else>
                    {{ t('contact.form.submit') }}
                    <Send class="ml-2 transition-transform group-hover:translate-x-1" />
                </template>
            </UiBaseButton>
        </form>
    </UiBaseCard>
</template>

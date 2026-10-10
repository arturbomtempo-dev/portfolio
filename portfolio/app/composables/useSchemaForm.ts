import type { z } from 'zod';

type FieldErrors<TValues> = Partial<Record<keyof TValues, string>>;

export function useSchemaForm<TSchema extends z.ZodObject>(
    schema: MaybeRefOrGetter<TSchema>,
    initialValues: z.input<TSchema>
) {
    type Values = z.input<TSchema>;

    const values = reactive({ ...initialValues }) as Values;
    const errors = ref<FieldErrors<Values>>({});
    const hasSubmitted = ref(false);
    const isSubmitting = ref(false);

    function validate() {
        const result = toValue(schema).safeParse(values);
        const nextErrors: FieldErrors<Values> = {};

        if (!result.success) {
            for (const issue of result.error.issues) {
                const field = issue.path[0] as keyof Values;
                nextErrors[field] ??= issue.message;
            }
        }

        errors.value = nextErrors;

        return result;
    }

    function reset() {
        Object.assign(values, initialValues);
        errors.value = {};
        hasSubmitted.value = false;
    }

    function handleSubmit(onValid: (data: z.output<TSchema>) => Promise<void>) {
        return async () => {
            hasSubmitted.value = true;
            const result = validate();

            if (!result.success) {
                return;
            }

            isSubmitting.value = true;

            try {
                await onValid(result.data);
            } finally {
                isSubmitting.value = false;
            }
        };
    }

    watch(
        [() => ({ ...values }), () => toValue(schema)],
        () => {
            if (hasSubmitted.value) {
                validate();
            }
        },
        { deep: true }
    );

    return { values, errors, isSubmitting, handleSubmit, reset };
}

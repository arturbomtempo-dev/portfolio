<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface Props {
    text: string;
    class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();

const sections = computed(() => parseRichText(props.text));
</script>

<template>
    <div :class="cn('space-y-4 leading-relaxed text-foreground/90', props.class)">
        <div v-for="(section, sectionIndex) in sections" :key="sectionIndex" class="space-y-2.5">
            <template v-for="(block, blockIndex) in section" :key="blockIndex">
                <p v-if="block.type === 'paragraph'" class="whitespace-pre-line">
                    {{ block.text }}
                </p>
                <ul v-else class="space-y-2">
                    <li v-for="item in block.items" :key="item" class="flex gap-3">
                        <span
                            aria-hidden="true"
                            class="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/15"
                        />
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

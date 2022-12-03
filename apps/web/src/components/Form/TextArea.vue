<script lang="ts" setup>import { placeholder } from '@babel/types';
import { id } from 'date-fns/locale';
import { ref, readonly } from 'vue';
import InputGroup from './InputGroup.vue';

interface ITextareaProps {
    modelValue?: string
    placeholder?: string
    name?: string
    id?: string
    width?: string
    readonly?: boolean
    disabled?: boolean
    rows?: number
    value?: string
}
defineProps<ITextareaProps>()

const emit = defineEmits<ITextareaEmits>()

interface ITextareaEmits {
    (e: 'update:modelValue', value: string): void
}

const input = ref<HTMLInputElement>()
defineExpose({ input })
</script>

<template>
    <div class="block" :class="width ?? 'w-full'">
        <p class="text-sm pb-1">
            <slot name="label" />
        </p>
        <InputGroup :class="disabled ? 'opacity-50' : ''">
            <textarea
                :id="id"
                ref="input"
                :readonly="readonly"
                :name="name"
                :disabled="disabled"
                :rows="rows ?? 6"
                class="input"
                :placeholder="placeholder"
                :value="value"
                @input="emit('update:modelValue', ($event.target as any).value)"
            />
        </InputGroup>
    </div>
</template>

<style scoped>
.input {
    @apply w-full p-2 h-16 text-sm rounded-sm bg-white dark:bg-black outline-none;
}
input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
}
</style>

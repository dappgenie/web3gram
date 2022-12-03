<script lang="ts" setup>
import { placeholder } from '@babel/types';
import { id } from 'date-fns/locale';
import { type } from 'os';
import { InputHTMLAttributes, readonly, ref } from 'vue'

interface ITextInputProps {
    modelValue?: any
    placeholder?: string
    type?: InputHTMLAttributes['type']
    label?: string
    name?: string
    id?: string
    readonly?: boolean
    disabled?: boolean
    outline?: 'bottom' | 'none' | 'all'
}
defineProps<ITextInputProps>()

const emit = defineEmits<ITextInputEmits>()

interface ITextInputEmits {
    (e: 'update:modelValue', value: string): void
}
const iconAttributes = { class: 'flex-none bg-blue' }

const input = ref<HTMLInputElement>()
defineExpose({ input })
</script>

<template>
    <FormInputGroup
        :outline="outline"
        :is-label="label ? true : false"
        :class="disabled ? 'opacity-50' : ''"
    >
        <template #label>
            {{ label }}
        </template>
        <template #left>
            <slot :attributes="iconAttributes" name="left" />
        </template>
        <slot>
            <input
                :id="id"
                ref="input"
                :readonly="readonly"
                :type="type ?? 'text'"
                :name="name"
                :disabled="disabled"
                class="bg-transparent w-full flex-1 outline-none text-gray-700 dark:text-gray-100"
                :placeholder="placeholder"
                :value="modelValue"
                @input="emit('update:modelValue', ($event.target as any).value)"
            />
        </slot>
        <template #right>
            <slot :attributes="iconAttributes" name="right" />
        </template>
    </FormInputGroup>
</template>

<style scoped>
input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
}
</style>

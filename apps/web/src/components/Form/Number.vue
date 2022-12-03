<script lang="ts" setup>
interface INumberProps {
    modelValue: number
    id?: string
    name?: string
    disabled?: boolean
    placeholder?: string
    readonly?: boolean
}
interface INumberEmits {
    (e: 'update:modelValue', value: number): void
}
const props = defineProps<INumberProps>()
const emit = defineEmits<INumberEmits>()
const add = () => {
    let value: number = props.modelValue
    value++
    emit('update:modelValue', value)
}
const subtract = () => {
    let value: number = props.modelValue
    value--
    emit('update:modelValue', value)
}
</script>

<template>
    <div flex justify-between items-center gap-x-2>
        <button class="button-class" @click="subtract()">
            <div text-primary i-mdi:minus />
        </button>
        <input
            :id="id"
            ref="input"
            :readonly="readonly"
            type="number"
            :name="name"
            :disabled="disabled"
            class="bg-transparent w-8 text-center flex-1 outline-none text-gray-700 dark:text-gray-100"
            :placeholder="placeholder"
            :value="modelValue"
            @input="emit('update:modelValue', ($event.target as any).value)"
        />
        <button class="button-class" :disabled="disabled" @click="add()">
            <div text-primary i-mdi:plus />
        </button>
    </div>
</template>

<style scoped lang="css">
.button-class {
    @apply text-sm cursor-pointer p-1 background-secondary;
    @apply border rounded-full border-primary;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
</style>

<script lang="ts" setup>

interface ITextareaProps {
  modelValue?: string
  placeholder?: string
  name?: string
  id?: string
  width?: string
  readonly?: boolean
  disabled?: boolean
  rows?: number
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
    <FormInputGroup :class="disabled ? 'opacity-50' : ''">
      <textarea
        :id="id"
        ref="input"
        :readonly="readonly"
        :name="name"
        :disabled="disabled"
        :rows="rows ?? 6"
        class="input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as any).value)"
      />
    </FormInputGroup>
  </div>
</template>

<style scoped>
  .input {
    @apply w-full p-2 h-16 text-sm rounded-sm background-secondary outline-none;
  }
  input[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }
</style>

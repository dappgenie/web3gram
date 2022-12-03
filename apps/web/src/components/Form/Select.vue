<script lang="ts" setup>
import { HTMLAttributes, ref } from 'vue'
import { computed } from 'vue';

interface ISelectProps {
  modelValue?: any
  closeOnSelect?: boolean
  optionClass?: HTMLAttributes['class']
  contentClass?: HTMLAttributes['class']
  position?: 'right' | 'left' | 'center'
  parentClass?: string
  options?: any[]
  multi?: boolean
  multiCheck?: boolean
  list?: boolean
  inputType?: 'input' | 'button'
  placeholder?: string
  getValue?: (option: any) => any
  getLabel?: (option: any) => string
  name?: string
  id?: string
  width?: string
}
const props = defineProps<ISelectProps>()
const emit = defineEmits<ISelectEmits>()
interface ISelectEmits<V = any> {
  (e: 'input', value: V | V[]): void
  (e: 'update:modelValue', value: V | V[]): void
}

const {
  multi = false,
  getValue = (option: any) => option.value,
  getLabel = (option: any) => option.label,
} = props
const hasValue = computed(() => {
  return props.multi ? props.modelValue?.length > 0 : !!props.modelValue
})
// the current selection
const selection = computed(() => {
  const getOption = (val: any) =>
    props.options?.find(option => getValue(option) === val)
  return multi
    ? (props.modelValue ? props.modelValue : []).map(getOption)
    : getOption(props.modelValue)
})
// what to show as value
const valueText = computed(() => {
  if (multi)
    return props.list ? selection.value.map(getLabel).join(', ') : 'Select'

  else
    return selection.value ? getLabel(selection.value) : 'Select'
})
/* -------------------------------------------------------------------------- */
/*                               VALUE MATCHING                               */
/* -------------------------------------------------------------------------- */
const isSelected = <O = any>(option: O) => {
  return multi
    ? props.modelValue.some((value: any) => getValue(option) === value)
    : getValue(option) === props.modelValue
}

/* -------------------------------------------------------------------------- */
/*                              SELECTING OPTION                              */
/* -------------------------------------------------------------------------- */
const handleSelection = (option: any) => {
  const value = getValue(option)
  // if multi select, add value to modelValue
  if (multi) {
    let set = new Set(props.modelValue ?? [])
    if (isSelected(option))
      set.delete(value)
    else set = set.add(value)
    emit('input', Array.from(set))
    emit('update:modelValue', Array.from(set))
  }
  // if single select, set value to modelValue
  else {
    emit('input', option)
    emit('update:modelValue', option)
  }
}
const input = ref<HTMLInputElement>()
defineExpose({ input })
</script>

<template>
  <div class="block" :class="width ?? 'w-full'">
    <p class="text-sm pb-1">
      <slot name="label" />
    </p>
    <Dropdown :close-on-select="multi ? true : closeOnSelect" my-2 :get-label="getLabel" :get-value="getValue">
      <template #default>
        <Button v-if="inputType === 'button'" id="dropdown-btn-trigger" name="dropdown-btn-trigger">
          <template #content>
            <slot
              name="input" :selection="selection" :has-value="hasValue"
              class_details="p-2 text-sm rounded-md nav-bg-gray-200 dark:bg-gray-900 bg-[#EEF2FB] dark:bg-[#1C2434] shadow-text-box dark:shadow-text-box-dark"
            >
              <div class="input">
                {{ hasValue ? valueText : (placeholder ?? 'Select') }}
                <div i-mdi:menu-down class="w-6" />
              </div>
            </slot>
          </template>
        </Button>
        <div
          v-else id="dropdown-input-trigger"
          justify-between class="input p-2" :class="optionClass ?? 'input-option-class'"
          name="dropdown-input-trigger"
        >
          {{ hasValue ? valueText : (placeholder ?? 'Select') }}
          <div i-mdi:menu-down class="w-6" />
        </div>
      </template>
      <template #content>
        <slot :attributes="{ tabindex: 0 }" name="select-content">
          <button
            v-for="(option, idx) in options"
            :key="idx"
            class="dropdown-item flex flex-col w-full "
            @click="handleSelection(option)"
          >
            <FormCheckbox
              v-if="multiCheck" class="font-xs" :value="getValue(option)"
              @update:model-value="option.status = !option.status"
            >
              <template #title>
                {{ getLabel(option) }}
              </template>
            </FormCheckbox>
            <div v-else text-color-primary text-sm>
              {{ getLabel(option) }}
            </div>
          </button>
        </slot>
      </template>
    </Dropdown>
    <slot name="error" class_details="mt-1 text-[#b20000] dark:text-[#FF7777] text-xs  w-full max-w-xs 2xl:max-w-sm" />
  </div>
</template>

<style lang="postcss" scoped>
.input {
  @apply text-sm cursor-pointer flex justify-between items-center;
}

.input-option-class {
  @apply text-color-primary border border-color bg-white dark:bg-black rounded-lg;
}
</style>

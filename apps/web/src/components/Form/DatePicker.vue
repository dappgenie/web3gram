<script lang="ts" setup>
import { format } from 'date-fns'

interface IDatePickerProps {
  modelValue?: Date[]
  placeholder?: string
  single?: boolean
  name?: string
  id?: string
  type?: 'single' | 'multi' | 'normal'
}
const props = defineProps<IDatePickerProps>()
const emit = defineEmits<IDatePickerEmits>()
const { placeholder = 'Select Date' } = props

interface IDatePickerEmits {
  (e: 'update:modelValue', value: Date[]): void
}
/**
 * States
 */
const isOpen = ref<boolean>(false)
const startValue = ref('Select Date')
const endValue = ref('Select Date')
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const startValue2 = ref<any[]>([new Date().getDate(), DAYS[new Date().getDay()], MONTHS[new Date().getMonth()]])
// const startValue2 = ref<any[]>(['Start Date'])
const endValue2 = ref<any[]>([new Date().getDate(), DAYS[new Date().getDay()], MONTHS[new Date().getMonth()]])
// const endValue2 = ref<any[]>(['End Date'])
const dateValue = ref('Select Date')
const handleUpdate = (value: Date[]) => {
  startValue.value = value?.[0] ? format(value[0], 'dd/MM/yyyy') : placeholder
  endValue.value = value?.[1] ? format(value[1], 'dd/MM/yyyy') : placeholder
  startValue2.value = [value[0]?.getDate(), DAYS[value[0]?.getDay()], MONTHS[value[0]?.getMonth()]]
  endValue2.value = [value[1]?.getDate(), DAYS[value[1]?.getDay()], MONTHS[value[1]?.getMonth()]]

  dateValue.value = (startValue.value === 'Select Date' && endValue.value === 'Select Date') ? startValue.value : (props.single ? startValue.value : (value.length === 2) ? (`${startValue.value} - ${endValue.value}`) : 'Select Date')
  emit('update:modelValue', value)
}
</script>

<template>
  <div :id="id" :name="name">
    <Dropdown
      id="form-datepicker-dropdown" parent-class="w-full" :close-on-select="false"
      name="form-datepicker-dropdown"
    >
      <template #default>
        <div v-if="type === 'multi'" flex gap-x-6>
          <div class="border-r-1 w-full border-blue">
            <div class="text-xs text-primary font-medium">
              Check-in
            </div>
            <div flex justify-start items-center>
              <div text-blue mr-2 i-mdi:calendar-month />
              <button
                :id="`${id}-date-picker-trigger`" type="button" class="date-picker-trigger w-full text-left"
                :name="`${name}-date-picker-trigger`" @click="isOpen = true"
              >
                <div text-sm :class="{ 'has-value': !!modelValue }" class="date-picker-trigger-text">
                  {{ startValue }}
                </div>
              </button>
            </div>
          </div>
          <div class=" border-r-1 w-full border-blue ">
            <div class="text-xs text-primary font-medium">
              Check-out
            </div>
            <div flex justify-start items-center>
              <div text-blue mr-2 i-mdi:calendar-month />
              <button
                :id="`${id}-date-picker-trigger`" type="button" class="date-picker-trigger w-full text-left"
                :name="`${name}-date-picker-trigger`" @click="isOpen = true"
              >
                <div text-sm :class="{ 'has-value': !!modelValue }" class="date-picker-trigger-text">
                  {{ endValue }}
                </div>
              </button>
            </div>
          </div>
        </div>
        <FormInputGroup v-if="type === 'single'" :is-label="true">
          <template #label>
            Check-in - Check-out
          </template>
          <template #left>
            <div text-blue i-mdi:calendar-month />
          </template>
          <button
            :id="`${id}-date-picker-trigger`" type="button" class="date-picker-trigger w-full text-left"
            :name="`${name}-date-picker-trigger`" @click="isOpen = true"
          >
            <div :class="{ 'has-value': !!modelValue }" class="date-picker-trigger-text">
              {{ dateValue }}
            </div>
          </button>
        </FormInputGroup>

        <!-- normal -->
        <div v-if="type === 'normal'" class="flex w-full justify-center items-center gap-x-16 md:gap-x-28">
          <div class="w-fit flex-col justify-center border-blue">
            <div class="text-[10px]  text-primary font-medium">
              Check-in
            </div>
            <div flex justify-center items-center>
              <button
                :id="`${id}-date-picker-trigger`" type="button" class="date-picker-trigger w-full text-left"
                :name="`${name}-date-picker-trigger`" @click="isOpen = true"
              >
                <div flex justify-start>
                  <div :class="{ 'has-value': !!modelValue }" class="date-picker-trigger-text pe-2 text-[39px]">
                    {{ startValue2[0] }}
                  </div>
                  <div flex-col justify-start flex justify-center>
                    <div class="text-[10px]">
                      {{ startValue2[1] }}
                    </div>
                    <div class="text-[10px]">
                      {{ startValue2[2] }}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div class=" w-fit border-blue ">
            <div class="text-[10px]  text-primary font-medium">
              Check-out
            </div>
            <div flex justify-center items-center>
              <button
                :id="`${id}-date-picker-trigger`" type="button" class="date-picker-trigger w-full text-left"
                :name="`${name}-date-picker-trigger`" @click="isOpen = true"
              >
                <div flex justify-start>
                  <div :class="{ 'has-value': !!modelValue }" class="date-picker-trigger-text  pe-2 text-[39px]">
                    {{ endValue2[0] }}
                  </div>
                  <div flex-col justify-start flex justify-center>
                    <div class="text-[10px]">
                      {{ endValue2[1] }}
                    </div>
                    <div class="text-[10px]">
                      {{ endValue2[2] }}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <!-- normal end -->
      </template>
      <template #content>
        <FormCalendar
          :id="`${id}-date-picker-calendar`"
          :options="{ monthsToShow: single ? 1 : 2, mode: single ? 'single' : 'range' }" :model-value="modelValue" :name="`${id}-date-picker-calendar`"
          @update:modelValue="handleUpdate" @submit="isOpen = false"
        />
      </template>
      <template #searchMobile>
        <FormCalendar
          :id="`${id}-date-picker-calendar`"
          :options="{ monthsToShow: single ? 1 : 2, mode: single ? 'single' : 'range' }" :model-value="modelValue" :name="`${id}-date-picker-calendar`"
          @update:modelValue="handleUpdate" @submit="isOpen = false"
        />
      </template>
    </Dropdown>
  </div>
</template>

<style lang="css" scoped>

</style>

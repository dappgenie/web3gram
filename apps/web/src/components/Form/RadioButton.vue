<script lang="ts" setup>import { computed } from 'vue';

interface IRadiobuttonProps {
  id?: string
  name?: string
  modelValue?: any
  disabled?: boolean
  value?: any
}
const props = defineProps<IRadiobuttonProps>()
const emit = defineEmits<IRadiobuttonEmits>()
interface IRadiobuttonEmits {
  (e: 'change', value: any): void
}
const isChecked = computed(() => {
  return props.modelValue == props.value
})
</script>

<template>

  <label class="wrapper flex items-center">
    <input class="checkbox" type="radio" :checked="isChecked" :value="value"
      @change="$emit('change', $event.target.value)" />
    <span class="checkmark"></span>
    <slot name="title">Label</slot>
  </label>
</template>

<style scoped lang="css">
/* Customize the label (the wrapper) */
.wrapper {
  @apply block relative cursor-pointer pl-7;
  /* padding-left: 35px; */
  margin-bottom: 6px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

/* Hide the browser's default radio button */
.wrapper input {
  @apply absolute cursor pointer opacity-0 h-0 w-0;
}

/* Create a custom radio button */
.checkmark {
  @apply w-4 h-4 absolute top-0 left-0 rounded-full background-secondary border border-color;
  /* height: 21px;
  width: 21px; */
}

/* On mouse-over, add a grey background color */
.wrapper:hover input~.checkmark {
  @apply bg-gray-200 dark:bg-gray-800;
}

/* When the radio button is checked, add a blue background */
/* .wrapper input:checked ~ .checkmark {
  background-color: #1CD4A7;
} */
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  @apply absolute hidden;
}

/* Show the indicator (dot/circle) when checked */
.wrapper input:checked~.checkmark:after {
  @apply block;
}

/* Style the indicator (dot/circle) */
.wrapper .checkmark:after {
  @apply bg-primary dark:bg-white w-1.5 h-1.5 rounded-full top-1 left-1;
  /* top: 3px;
  left: 5px; */
}
</style>

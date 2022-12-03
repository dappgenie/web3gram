<script lang="ts" setup>
interface IEventProps {
  modelValue?: number
  value: number | undefined
  name?: string
  id?: string
  label?: boolean
  disabled?: boolean
  contentClass?: string
  ratingClass?: string
}
const props = defineProps<IEventProps>()
const val = ref(0)
const temp_value = ref(0)
const ratings = ref([1, 2, 3, 4, 5])
/*
 * Behaviour of the stars on mouseover.
 */
const star_over = (index: number) => {
  if (!props.disabled) {
    temp_value.value = props.value
    return val.value = index
  }
}

/*
 * Behaviour of the stars on mouseout.
 */
const star_out = () => {
  if (!props.disabled)
    return val.value = temp_value.value
}

/*
 * Set the rating.
 */
const set = (value: number) => {
  if (!props.disabled) {
    temp_value.value = value
    return val.value = value
  }
}
onMounted(() => {
  val.value = props.value
})
</script>

<template>
  <div class="star-rating" :class="ratingClass">
    <label
      v-for="rating in ratings" class="star-rating__star"
      :class="[{ 'is-selected': ((val >= rating) && val != null), 'is-disabled': disabled }, contentClass ?? 'w-4 h-4 m-0.5']" @click="set(rating)"
      @mouseover="star_over(rating)" @mouseout="star_out"
    >
      <input
        v-model="val" class="star-rating star-rating__checkbox" :class="contentClass ?? 'w-4 h-4'" type="radio" :value="rating" :name="name"
        :disabled="disabled"
      >
      <div :class="contentClass ?? 'w-4 h-4'" i-mdi:circle />
    </label>
    <label v-if="label && value === 5" text-xs ml-2>Excellent</label>
    <label v-if="label && value === 4" text-xs ml-2>Superb</label>
    <label v-if="label && value === 3" text-xs ml-2>Good</label>
    <label v-if="label && value === 2" text-xs ml-2>Ok</label>
  </div>
</template>

<style scoped lang="css">
.star-rating {
  @apply flex justify-start items-start;
}
.star-rating__star {
  @apply inline-block text-gray-400;
  transition: color .2s ease-out;
}

.star-rating__star:hover {
  @apply cursor-pointer;
}

.is-selected {
  @apply text-yellow
}

.is-disabled:hover {
  @apply cursor-default;
}

.star-rating__checkbox {
  @apply absolute overflow-hidden p-0 border-none;
  clip: rect(0 0 0 0);
}
</style>

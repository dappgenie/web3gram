<script lang="ts" setup>
import Slider from '@vueform/slider'
import { ref, computed, onMounted } from 'vue';
import '~/assets/css/slider.css'
interface ISliderProps {
  startValue: number
  endValue: number
}
interface ISliderEmits {
  (e: 'update:slider', value: any): void
}
const props = defineProps<ISliderProps>()
const emit = defineEmits<ISliderEmits>()

const value = ref([0, 50])
const computeValue = computed(() => {
  const startValue = (value.value[0] * 10) * 100
  const endValue = (value.value[1] * 10) * 100
  return {
    startValue,
    endValue,
  }
})
onMounted(() => {
  if (props.startValue && props.endValue)
    value.value = [props.startValue / 1000, props.endValue / 1000]
})
</script>

<template>
  <div>
    <Slider
      v-model="value"
      :tooltips="false"
      @update="emit('update:slider', computeValue)"
    />
    <div flex justify-between items-center mt-5>
      <div class="p-1 text-xs border border-color background-secondary">
        ${{ computeValue.startValue }}
      </div>
      <div class="p-1 text-xs border border-color background-secondary">
        ${{ computeValue.endValue }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
</style>


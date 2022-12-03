<script lang="ts" setup>
interface IFilterListItem {
  item: {
    name: string
    type: 'checkbox' | 'radio' | 'slider'
    attributes: Array<any>
    attributeType: 'string' | 'rating'
  }
}
const props = defineProps<IFilterListItem>()
let filterValue: {
  name: string
  type: 'checkbox' | 'radio' | 'slider'
  attributes: Array<any>
  attributeType: 'string' | 'rating'
} = reactive({
  name: '',
  type: 'checkbox',
  attributes: [],
  attributeType: 'string',
})
onMounted(() => {
  filterValue = props.item
})
</script>

<template>
  <div class="filter-list">
    <h1 class="title">
      {{ item.name }}
    </h1>
    <div v-if="item.type === 'checkbox'">
      <div v-for="(el, idx) of item.attributes" :key="idx">
        <FormCheckbox my-2>
          <template #title>
            {{ el }}
          </template>
        </FormCheckbox>
      </div>
    </div>
    <div v-if="item.type === 'slider'">
      <FormSlider :start-value="0" :end-value="50000" />
    </div>
    <div v-if="item.type === 'radio'">
      <FormRadioButton v-for="(el, idx) of item.attributes" :key="idx" :value="el">
        <template #title>
          <FormRating :value="el" :label="true" :disabled="true" content-class="w-3 h-3 m-[1px]" />
        </template>
      </FormRadioButton>
    </div>
  </div>
</template>

<style scoped lang="css">
.filter-list {
   @apply py-4 text-sm;
}
.title {
   @apply text-color-primary font-bold mb-4;
}
</style>

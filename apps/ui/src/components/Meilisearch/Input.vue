<script lang="ts" setup>
const { locationSearch } = storeToRefs(useSearchStore())
interface IMeilisearchProps {
  modelValue?: any
  id?: string
  name?: string
  outline?: 'bottom' | 'none' | 'all'
  disabled?: boolean
  label?: string
  placeholder?: string
}
interface IMeilisearchEmits {
  (e: 'update:modelValue', value: string): void
}
defineProps<IMeilisearchProps>()
const emit = defineEmits<IMeilisearchEmits>()

const meilisearch = new useMeilisearch()
const refFloating = ref<HTMLDivElement>()
const isOptionsVisible = ref(false)
onClickOutside(refFloating, (event) => {
  isOptionsVisible.value = false
})
const searchValue = ref('')
const searchData = ref<Record<string, any>>([])

const search = async () => {
  emit('update:modelValue', searchValue.value)
  const data = await meilisearch.search(searchValue.value,
    {
      attributesToHighlight: ['name'],
    })
    if(data) searchData.value = data
  isOptionsVisible.value = true
}
const selectSearch = (item: any) => {
  searchValue.value = item.name
  locationSearch.value = item
  isOptionsVisible.value = false
}
onMounted(async()=>{
  await meilisearch.init()
})
</script>

<template>
  <div relative w-full>
    <slot>
      <FormTextInput
        :id="`${id}-meilisearch-input`"
        v-model="searchValue"
        :outline="outline"
        :value="modelValue"
        :label="label"
        :name="`${id}-meilisearch-input`"
        :disabled="disabled"
        :placeholder="placeholder"
        @keyup="search()"
      >
        <template #left>
          <div class="flex justify-start text-blue" i-mdi:map-marker />
        </template>
      </FormTextInput>
    </slot>
    <div v-if="isOptionsVisible" ref="refFloating" class="dropdown">
      <div v-for="(item, idx) in searchData" :key="idx" class="dropdown-item" @click="selectSearch(item)">
        <div v-html="item._formatted.name"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
  .dropdown {
    @apply w-full background-secondary text-sm text-color-primary shadow-lg;
    @apply absolute z-20 max-h-[500px] overflow-hidden overflow-y-auto;
  }
</style>

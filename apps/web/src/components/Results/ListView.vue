<script lang="ts" setup>
import { IProperty } from '~/services/property';
interface IListViewProps {
  hotelList: any[]
  propertiesList: IProperty[]
}
const props = defineProps<IListViewProps>()
const prices = ['Price: Low to High', 'Price: High to Low']
const sortValue = ref<string>(prices[0])
onMounted(()=>{
  
})
watchEffect(()=> {
  console.log("🚀 ~🚀 ~ ~  ~ properties", props.propertiesList)
})
</script>

<template>
  <div w-full flex justify-between items-start mb-4>
    <div hidden lg:block class="w-[22%] mt-3">
      <div flex gap-x-4 justify-start items-center mb-3 text-xs h-full>
        <span text-color-secondary font-bold>Filter</span>
        <span text-blue hover:underline cursor-pointer>Clear all</span>
      </div>
      <div border border-color px-8 py-4 rounded-md>
        <div v-for="(item, idx) of hotelList" :key="idx" border-b last:border-none border-color>
          <ResultsFilterListItem :item="item" />
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap justify-between lg:w-[77%] xl:w-[75%]">
      <div w-full>
        <div class="flex w-full justify-between items-end -mt-3 mb-3 text-xs">
          <span text-color-secondary font-bold>315 Properties in Dubai</span>
          <div class="flex justify-end items-center -mb-3">
            <span text-xs pt-1 font-black whitespace-nowrap text-color-secondary> Sort By </span>
            <FormSelect v-model="sortValue" :options="prices" :get-label="(option) => option" :get-value="(option) => option" option-class="text-color-primary !text-xs" />
          </div>
        </div>
        <div w-full flex flex-wrap justify-between items-baseline>
          <ResultsCard v-for=" (data, idx) in propertiesList" :key="idx" card-type="list" :item="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>

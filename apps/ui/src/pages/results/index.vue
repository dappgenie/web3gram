<script lang="ts" setup>
import { get } from 'radash'
import { IPropertyListParams, IProperty } from '~/services/property';
import { FILTER_LIST } from '~/utils/repository'
const { addToast } = useToastStore()
const showFilter = ref(false)
const showSearch = ref(false)
const currentTab = ref(0)
const { locationSearch } = storeToRefs(useSearchStore())

const propertiesList = ref<IProperty[]>([])
const search = async () => {
  console.log('SEARCH');// load data
  const params = reactive({
    id: get(locationSearch.value, val => val.id),
    typeA: get(locationSearch.value, val => val.typeA)
  }) 
  const propertyService = useService('property');
  const { data: properties } = await useQuery(
    async (params: IPropertyListParams) => await propertyService.propertySearch(params),
    () => params,
    {
      onError() {
        addToast('Failed to load properties', 'error')
      }
    }
  );
  if(properties.value) propertiesList.value = properties.value
  watchEffect(()=> {
    if(properties.value) propertiesList.value = properties.value
  })
}
</script>

<template>
  <SearchBar @search="search()" @click-search="showSearch = true" @click-filter="showFilter = true" />
  <ResultsTab pt-0 md:pt-2 @change="currentTab = $event" />
  <ResultsListView :properties-list="propertiesList" v-if="currentTab === 0" :hotel-list="FILTER_LIST" />
  <ResultsMapView v-if="currentTab === 1" :hotel-list="FILTER_LIST" />
  <SideBar :show="showFilter" @click-back="showFilter = false">
    <template #title>
      Edit Filter
    </template>
    <template #content>
      <div v-for="(item, idx) of FILTER_LIST" :key="idx" border-b last:border-none border-color>
        <ResultsFilterListItem :item="item" />
      </div>
    </template>
    <template #button-content>
      <button underline>
        Clear Filter
      </button>
      <Button id="home-search-btn" name="home-search-btn" mt-4 color="base" rounded="none">
        <template #content>
          Check Availability
          <div class=" text-lg" i-mdi:arrow-right-thin />
        </template>
      </Button>
    </template>
  </SideBar>
  <SideBar :show="showSearch" @click-back="showSearch = false">
    <template #title>
      Edit Search
    </template>
    <template #content>
      <SearchBar @update-search="search()" :type="'mobileContent'" />
    </template>
    <template #button-content>
      <Button id="home-search-btn" w-full mx-8 overflow-x-hidden name="home-search-btn" mt-4 color="base"
        rounded="none">
        <template #content>
          Check Availability
          <div class=" text-lg" i-mdi:arrow-right-thin />
        </template>
      </Button>
    </template>
  </SideBar>
</template>

<style scoped lang="css">
.btn-icon {
  background-color: white;
}

input:focus {
  outline: none !important;
}

#specifyColor {
  accent-color: red;
}
</style>

<route lang="yaml">
meta:
  layout: home
  </route>

<script lang="ts" setup>
import { SEARCH_HOTEL_LIST } from '~/utils/repository'
interface IMapView {
  hotelList: any[]
}
defineProps<IMapView>()
const prices = ['Price: Low to High', 'Price: High to Low']
const sortValue = ref<string>(prices[0])
const mapData = SEARCH_HOTEL_LIST.map((data)=> ({name: data.name, price: data.startingPrice, coordinates:{ lat: data.coordinates.lat, lng: data.coordinates.lng}}))
</script>

<template>
  <div class="w-100vw -ml-4 md:-ml-10 lg:ml-0 lg:w-full flex justify-between items-start md:my-4">
    <div class="card-container">
        <div class="card-list">
            <div hidden lg:flex w-full justify-between items-end mb-3 text-xs>
              <span text-color-secondary font-bold mb-1>315 Properties in Dubai</span>
              <div class="flex justify-end items-center -mb-3">
                <span text-xs pt-1 font-black whitespace-nowrap text-color-secondary> Sort By </span>
                <FormSelect v-model="sortValue" :options="prices" :get-label="(option) => option" :get-value="(option) => option" option-class="text-color-primary !text-xs" />
              </div>
            </div>
            <ResultsCard v-for=" (data, idx) in SEARCH_HOTEL_LIST" :key="idx" :card-type="'map'" :item="data" />
        </div>
    </div>
      <div class="google-map">
        <GoogleMapResults :data="SEARCH_HOTEL_LIST"/>
      </div>
    </div>
</template>


<style scoped lang="css">
.card-container {
    @apply w-full z-10 lg:w-[35%] mt-8 -ml-4 lg:ml-0;
    @apply absolute bottom-12 lg:relative overflow-x-scroll;
}
.card-list {
    @apply z-10 w-fit lg:w-full flex lg:block ml-10 md:ml-20 lg:ml-0;
}
.google-map {
    @apply w-screen lg:mt-9 flex flex-wrap justify-between lg:w-[63%] xl:w-[63%];
}
</style>

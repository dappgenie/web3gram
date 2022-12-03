<script lang="ts" setup>
import type { Rooms } from '~/utils/interface'
import { HOTEL_ROOM_LIST } from '~/utils/repository'

interface IRoomProps {
  item: Rooms
  // name: string
  // image: string[]
  // price: number
  // totalPrice: number
  // isSoldOut: boolean
  // isMarketPlace: boolean
  // isMarketPlacePrice: number
  // day: number
  // rooms: number
  // amenities: {
  //   type: 'wifi' | 'parking' | 'wallet'
  //   name: string
  // }[]
  // options: {
  //   name: string
  //   price: number
  //   subtitle?: string
  // }[]

  // id: string
  // name: string
  // amenities: {}[]
  // images: {}[]
  // bed_groups: {}[]
  // area: string
  // views: {}[]
  // occupancy: string
  // descriptions: string

}
const props = defineProps<IRoomProps>()

const popularAmenities = ['Television', 'Refrigerator', 'In-room climate control (air conditioning)', 'Free WiFi']

const imageData = props.item.images.map(img => (img.links[3].href))
// console.log('imageData', imageData)

// const mapData = item
</script>

<template>
  <div my-2 flex flex-col md:background-secondary md:shadow-md>
    <div class="h-33 w-full">
      <!-- <img :src="item.image[0]" alt=""> -->
      <SwiperImage :images="imageData" :delay="8500" />
    </div>
    <div grow  ps-2 py-2 text-start font-bold text-2xl>
          {{ item.name }}
    </div>
        <div grow  flex justify-between p-4>
          <div pb-2 flex>
            <div v-for="(data, idxs) in item.amenities" :key="idxs" flex>
              <ResultsAmenitiesList v-if="popularAmenities.includes(data.name)" mr-2 :type="data.name" />
            </div>
          </div>
          <div text-4xl font-bold>
            $150
          </div>
        </div>
        <div grow  pl-4 pb-2 text-start border-color border-b>
          <button text-blue>
            See all
          </button>
        </div>
        <div p-5 class=" grow border-color border-b-1 ">
          <div py-2 w-full text-lg font-medium>
            Additional options
          </div>
          <div py-2>
            <FormRadioButton v-for="(el, idx) of HOTEL_ROOM_LIST[0].options" :key="idx" :value="el">
              <template #title>
                <div flex justify-between items-center>
                  <div flex-col class="w-[80%]">
                    <div text-sm>
                      {{ el.name }}
                    </div>
                    <div text-xs>
                      {{ el.subtitle }}
                    </div>
                  </div>
                  <div text-end class="w-[20%]">
                    {{ el.price }}
                  </div>
                </div>
              </template>
            </FormRadioButton>
          </div>
        </div>
          <div v-if="!item.isSoldOut" p-5 py-2>
            <button font-bold py-2 mt-2 w-full class="border-black rounded-full border-2 ">
              <div flex w-full justify-between>
                <div class="w-[50%] flex-col flex justify-center border-black border-r-1 ">
                  <div text-2xl>
                    Total {{ item.totalPrice }}
                  </div>
                  <div text-sm>
                    {{ item.day }} Day, {{ item.rooms }} Rooms
                  </div>
                </div>
                <div class="w-[50%] align-center text-center flex-col flex justify-center">
                  <div flex justify-center>
                    <div> Buy Directly</div>
                    <div class="me-2 text-lg" i-mdi:arrow-right-thin />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div v-else p-5 py-2>
            <button font-bold py-2 mt-2 w-full disabled class="border-[#A5A5A5] text-[#A5A5A5] rounded-full border-2 ">
              <div w-full flex justify-between>
                <div class="w-[50%] flex-col border-[#A5A5A5] border-r-1 ">
                  <div text-2xl>
                    Total {{ item.totalPrice }}
                  </div>
                  <div text-sm>
                    {{ item.day }} Day, {{ item.rooms }} Rooms
                  </div>
                </div>
                <div class="w-[50%] flex-col justify-center align-center text-center">
                  <p>Direct Buy</p>
                  <h2>- Sold Out -</h2>
                </div>
              </div>
            </button>
          </div>
  </div>
</template>

<style scoped lang="css">
.bg-gradient {
  background: linear-gradient(275.36deg, #383838 0%, #8264F9 100%);
}
</style>

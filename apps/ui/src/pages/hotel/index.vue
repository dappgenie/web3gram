<script lang="ts" setup>
import { propertyDetails } from '.././../utils/repository/property'
import { HOTEL_ROOM_LIST, SEARCH_HOTEL_LIST } from '~/utils/repository'
import hotel_item_1 from '~/assets/images/search_hotels/hotel_image_1.png'
import hotel_item_2 from '~/assets/images/search_hotels/hotel_image_2.png'

const router = useRouter()
const moreButton = ref(true)
const isSwiper = ref(false)
const record = propertyDetails
</script>

<template>
  <SearchBar :disabled="true" />
  <!-- back button with image area -->
  <div>
    <!-- button full width -->
    <div py-6 text-sm flex justify-start w-full py-2>
      <div text-blue class="me-1 text-lg" i-mdi:arrow-left-thin />
      <button text-blue @click="router.push('/results')">
        Back to list
      </button>
    </div>
    <!-- image section -->
    <div class=" image-section">
      <div class="w-full lg:w-[68%]">
        <div class="mb-2  w-full">
          <!-- <img object-cover w-full h-full :src="hotel_item_1" alt="hotel"> -->

          <img object-cover w-full h-full :srcset="`${record.images[0].links[0].href} 350w, ${record.images[0].links[1].href} 70w ,${record.images[0].links[2].href} 1000w`" alt="hotel">
        </div>
      </div>
      <div class="side-section">
        <div class="w-[49%] lg:w-full h-[49%]">
          <img object-cover w-full h-full :srcset="`${record.images[1].links[0].href} 350w, ${record.images[1].links[1].href} 70w ,${record.images[1].links[2].href} 1000w`" alt="hotel">
        </div>
        <div relative class="w-[49%] h-[49%] lg:w-full">
          <img object-cover w-full h-full :srcset="`${record.images[2].links[0].href} 350w, ${record.images[2].links[1].href} 70w ,${record.images[2].links[2].href} 1000w`" alt="hotel">
          <div class="opacity-70 absolute top-0 bg-black w-full h-full cursor-pointer" @click="isSwiper = true">
            <h1 lg:text-xl text-sm font-bold text-white text-center h-full flex flex-col justify-center align-center>
              +5 more
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- back button with image area  end -->
  <div gap-x-2 pt-5 lg:py-7 border-b-1 class="border-[#E7E7E7]" object-contain lg:flex lg:justify-between>
    <div class="lg:w-[68%] w-full me-1">
      <div w-full class="border-[#E7E7E7] border-b-1 lg:p-4 lg:border-0">
        <div class="h-[35%]">
          <div flex justify-between>
            <div pb-3 font-bold text-xl lg:text-2xl>
              {{ record?.name }}
            </div>
            <div lg:flex lg:justify-between text-end texts-center align-center>
              <FormRating :value="3" pt-1 lg:pe-2 :disabled="true" justify-end content-class="w-3 h-3 m-[1px] flex" rating-class="!justify-end" /> <span text-xs align-center pt-1>156 Users Reviewed</span>
            </div>
          </div>
          <div border-b-1 pb-3 class="border-[#E7E7E7]" dark:border-primary text-left text-sm>
            <!-- {{
              (desc.length > 150)
                ? `${desc.substr(0, 150)}...`
                : desc
            }} -->
            <span v-if="moreButton"><span v-html="record.descriptions.attractions.substr(0, 150)" />... </span>
            <span v-if="!moreButton" v-html="record.descriptions.attractions" />
          </div>
          <div flex justify-start w-full text-sm py-2>
            <button text-blue @click="moreButton = !moreButton">
              {{ moreButton ? 'Read more' : 'Show less' }}
            </button>
          </div>
        </div>
        <div class="lg:mt-6 py-3 pb-6 h-[65%]">
          <div background-secondary shadow-md p-4>
            <div ps-2 py-2 text-start font-bold text-2xl>
              Amenities
            </div>
            <div pb-2 flex>
              <div v-for="(item, idxs) in SEARCH_HOTEL_LIST[0].amenities" :key="idxs" flex gap-x-1 lg:gap-x-2 mx-2>
                <ResultsAmenitiesList :type="item.type" /><div text-sm>
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div ps-2 text-start>
              <button text-blue>
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- map section start -->
    <div flex-col justify-between class="w-full py-5 lg:py-0 lg:w-[32%]">
      <div>
        <div w-full mb-1>
          <!-- <img :src="hotel_item_3" alt=""> -->
          <GoogleMapMarker h-56 :center="SEARCH_HOTEL_LIST[0].coordinates" />
        </div>
        <div py-1 text-left text-xs lg:text-sm>
          Benaulim Beach Road, South Goa, Benaulim, Goa, 403716,
        </div>
        <div hidden lg:flex text-start justify-start>
          <button text-blue>
            View in a map
          </button>
          <div text-blue class="me-1 text-lg" i-mdi:arrow-right-thin />
        </div>
      </div>
    </div>
    <!-- map section end -->
  </div>
  <!-- room listing area -->
  <div>
    <div font-bold py-5 text-2xl>
      Choose Your Room
    </div>
    <div class="w-full flex-wrap flex flex-row justify-between">
      <!-- <div v-for=" (data, idx) in record.rooms" :key="idx" class="w-full md:w-[48%] lg:w-[33%]"> -->
        <Accordion v-for=" (data, idx) in record.rooms" :key="idx" class="w-full md:w-[48%] lg:w-[33%] block md:hidden">
          <template #title>
            <div>{{ data.name }}</div>
          </template>
          <template #content>
            <RoomCard :item="data" />
          </template>
        </Accordion>
        <RoomCard v-for=" (data, idx) in record.rooms" :key="idx" class="w-full md:w-[48%] lg:w-[33%] hidden md:flex" :item="data" />
      <!-- </div> -->
    </div>
  </div>
  <ModalCustom :hide-title="true" :show="isSwiper" @close="isSwiper = false">
    <template #content>
      <div class="swiperImage">
        <SwiperImage :delay="10000" :images="Rooms" />
      </div>
    </template>
  </ModalCustom>
</template>

<style scoped lang="css">
.swiperImage{
  @apply lg:w-[700px] w-[350px];
}
.image-section{
@apply gap-x-2 overflow-hidden h-auto lg:flex lg:justify-between !lg:h-[30rem];

}
.side-section{
 @apply lg:gap-y-2 gap-x-1  lg:w-[32%] flex flex-wrap justify-between !lg:h-[30rem] h-[15rem] lg:h-full;
 /* @apply lg:gap-y-2 gap-x-1  lg:w-[32%] flex flex-wrap justify-between ; */
}
</style>

<route lang="yaml">
meta:
  layout: home
    </route>

<script lang="ts" setup>
import hotel_image_1 from '~/assets/images/home/hotel_image_1.png'
import hotel_image_2 from '~/assets/images/home/hotel_image_2.webp'
import hotel_image_3 from '~/assets/images/home/hotel_image_3.webp'
const { width } = useWindowSize()
const el = ref(null)
const elHeight = ref()
const { height } = useElementSize(el)
interface ISearchDetails {
  location: string
  range: {
    start: Date
    end: Date
  }
  rooms: [{
    adults: number
    children: number[]
  }]
}

const imagesList = [hotel_image_1, hotel_image_2, hotel_image_3]
const searchDetails = reactive<ISearchDetails>({
  location: '',
  range: {
    start: new Date(2020, 0, 6),
    end: new Date(2020, 0, 23),
  },
  rooms: [{
    adults: 1,
    children: [],
  }],
})
const roomInfo = computed(() => {
  let totalTravellers = 0
  searchDetails.rooms.forEach((room) => {
    totalTravellers += room.adults + room.children.length
  })
  const roomData = (searchDetails.rooms.length > 1) ? `${searchDetails.rooms.length} rooms` : `${searchDetails.rooms.length} room`
  const travellersData = (totalTravellers > 1) ? `${totalTravellers} travellers` : `${totalTravellers} traveller`
  let value = `${roomData}, ${travellersData}`
  if (!(totalTravellers || searchDetails.rooms))
    value = 'Add guests'
  return value
})
const roomDetails = ref(roomInfo)
watchEffect(() => {
  const { height } = useElementSize(el)
  elHeight.value = height
})
</script>

<template>
  <div flex flex-col lg:flex-row justify-between items-center lg:my-8 :style="{ height: (width < 1024) ? 'auto' : `${height}px` }">
    <div class="relative w-screen lg:w-[59.2%] h-[15rem] lg:h-full">
      <SwiperImage :images="imagesList" :delay="8500" />
      <h3 class="absolute z-10 w-3/5 left-6 top-6 text-xl font-bold leading-8 text-left text-black">
        Buy & trade on-demand inventory of hotel rooms across the globe
      </h3>
    </div>
    <div ref="el" class="w-full lg:w-[39.2%] mt-4 lg:mt-0 h-fit">
      <div p-6 background-secondary>
        <MeilisearchInput text-sm label="Location" :placeholder="'Search'"/>
        <!-- <FormTextInput
          id="home-location-input" name="home-location-input" label="Location"
          placeholder="Enter Location"
        /> -->
        <div class="details">
          <div class="w-full lg:w-3/5">
            <FormDatePicker type="single" />
          </div>
          <div class="w-full lg:w-2/5 flex gap-2 mt-4 sm:mt-0">
            <Dropdown
              id="deployed-dropdown" v-model="searchDetails.rooms"
              parent-class="w-full" name="deployed-dropdown"
              :options="[1, 2, 3, 4]" label="Rooms" :close-on-select="true"
              :get-label="(option: number) => option"
              :get-value="(option: number) => option" @update:model-value="searchDetails.rooms = $event"
            >
              <template #default>
                <FormTextInput
                  id="room-details-dropdown-trigger" v-model="roomDetails"
                  name="room-details-dropdown-trigger" label="Rooms Details" placeholder="Add Guest"
                >
                <template #left>
                  <div class="flex justify-start text-blue" i-mdi:account-supervisor />
                </template>
                  <template #right="{ attributes }">
                    <div ms-3 v-bind="attributes" i-mdi:menu-down />
                  </template>
                </FormTextInput>
              </template>
              <template #content>
                <div p-6>
                  <TravellerDetails w-80 :rooms="searchDetails.rooms" />
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
      <div p-6 background-secondary mt-2>
        <FormCheckbox>
          <template #title>
            Show all available options and combinations within this date range
          </template>
        </FormCheckbox>
        <Button id="home-search-btn" name="home-search-btn" mt-4 color="base" rounded="none">
          <template #content>
            Search
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.details {
    @apply flex flex-col sm:flex-row gap-2 justify-between items-center text-sm mt-6;
}

#specifyColor {
    accent-color: red;
}
</style>

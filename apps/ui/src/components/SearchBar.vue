<script lang="ts" setup>

const { location, dateRange, rooms } = storeToRefs(useSearchStore())

interface ISearchBarProps {
  type?: 'mobileContent'
  disabled?: boolean
}
defineProps<ISearchBarProps>()
const emit = defineEmits<ISearchBarEmits>()
interface ISearchBarEmits<V = any> {
  (e: 'clickFilter'): void
  (e: 'clickSearch'): void
  (e: 'search'): void
}
const roomInfo = computed(() => {
  let totalTravellers = 0
  rooms.value.forEach((room) => {
    totalTravellers += room.adults + room.children.length
  })
  const roomData = (rooms.value.length > 1) ? `${rooms.value.length} rooms` : `${rooms.value.length} room`
  const travellersData = (totalTravellers > 1) ? `${totalTravellers} travellers` : `${totalTravellers} traveller`
  let value = `${roomData}, ${travellersData}`
  if (!(totalTravellers || rooms.value))
    value = 'Add guests'
  return value
})
const updateDate = (value: Date[]) => {
  dateRange.value = {
    start_date: value[0],
    end_date: value[1]
  }
}
const roomDetails = ref(roomInfo)
const inSearch = ref(false)
const startDate = ref('13 Nov')
const endDate = ref('15 Nov 2022')


</script>

<template>
  <div>
    <div v-if="type !== 'mobileContent'"
      class="mt-8 m-auto justify-between hidden lg:flex w-full items-center background-secondary rounded-full shadow-md max-h-2xl gap-x-2 lg:gap-x-6 w-full"
      @click="inSearch = true">
      <div class="w-[35%] px-6 py-4">
        <MeilisearchInput :disabled="disabled" v-model="location" text-sm :outline="'bottom'"
          :placeholder="'Enter your location'" />
      </div>
      <div class="w-65%" flex justify-between items-center>
        <div class="flex flex-col w-[50%] py-4">
          <FormDatePicker class="col-span-1" type="multi" />
        </div>
        <div class="items-center flex justify-between  lg:w-[40%] xl:w-[22%] 2xl:w-[20%] py-4">
          <Dropdown id="deployed-dropdown" v-model="rooms" parent-class="w-full" name="deployed-dropdown"
            :options="[1, 2, 3, 4]" label="Rooms" :close-on-select="true" :get-label="(option: number) => option"
            :get-value="(option: number) => option" @update:model-value="rooms = $event">
            <template #default>
              <FormTextInput id="room-details-dropdown-trigger" v-model="roomDetails" text-sm outline="none"
                name="room-details-dropdown-trigger" label="Rooms Details" placeholder="Add Guest">
                <template #left>
                  <div class="flex justify-start text-blue" i-mdi:account-supervisor />
                </template>
                <template #right="{ attributes }">
                  <div v-bind="attributes" i-mdi:menu-down />
                </template>
              </FormTextInput>
            </template>
            <template #content>
              <div p-6>
                <TravellerDetails w-80 :rooms="rooms" />
              </div>
            </template>
          </Dropdown>
        </div>
        <div class=" w-[20%] flex rounded-full rounded-l-lg bg-blue max-h-2xl" @click="emit('search')">
          <button class="h-18 w-full m-auto px-5 c-white text-center" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- for upto large screen onwards -->
    <div v-if="type !== 'mobileContent'"
      class="flex justify-around lg:hidden items-center w-full overflow-hidden py-2 mt-4 md:mt-8 gap-x-2"
      @click="inSearch = true">
      <div class="w-[95%]  border border-color rounded-xl overflow-hidden">
        <button w-full @click="emit('clickSearch')">
          <div flex justify-start items-center>
            <div ml-2 mr-4 my-2>
              <div text-blue text-xl i-mdi:magnify />
            </div>
            <div py-2>
              <h1 text-xs font-bold flex justify-start>
                {{ location }}
              </h1>
              <div flex justify-start class="text-[10px]">
                <p>{{ startDate }} - {{ endDate }}</p>
                <div text-base i-mdi:circle-small />
                <div>adults {{ rooms[0].adults }}</div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <button flex justify-end @click="emit('clickFilter')">
        <div class="filter-icon" i-mdi:filter-outline />
      </button>
    </div>

    <!-- for upto large screen onwards end -->
    <div v-if="type === 'mobileContent'">
      <div>
        <div class="w-full px-4 py-3 mt-0 md:mt-8 md:py-4 border rounded-full">
          <MeilisearchInput text-sm :outline="'none'" :placeholder="'Enter your location'" />
        </div>
        <div class="w-full" flex-col justify-between items-center>
          <div class="flex flex-col w-full py-4">
            <FormDatePicker class="col-span-1" type="normal" @update:model-value="updateDate($event)" />
          </div>
          <div class="items-center  w-full py-4">
            <TravellerDetails :rooms="rooms" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.filter-icon {
  @apply flex justify-start text-3xl;
  background: linear-gradient(294.67deg, #383838 3.61%, #8264F9 94.59%);
}
</style>

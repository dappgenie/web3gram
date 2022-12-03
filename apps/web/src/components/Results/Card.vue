<script lang="ts" setup>
import { useImageSize } from '~/composables/imageSize';
import { IProperty } from '~/services/property';
import { Images } from '~/services/property';

interface IEventProps {
  cardType: 'map' | 'list' | 'map-view'
  item: IProperty
}
const props = defineProps<IEventProps>()
const imagesData = (img: Images) => {
  console.log("🚀 ~ file: Card.vue ~ line 12 ~ imagesData ~ img", img)
  const image = useImageSize(img)
  console.log("🚀 ~ file: Card.vue ~ line 14 ~ imagesData ~ image", image)
  return image
}
</script>

<template>
  <div v-if="cardType === 'list'" class="list-card">
    <img :src="imagesData(item?.images[0])" alt="eventImg">
    <div class="content">
      <div flex-col w-full justify-between class="w-full lg:w-[66%] xl:w-[63%]" px-3>
        <div w-full class="w-full h-fit lg:border-b-1 lg:border-[#E7E7E7]" pb-3 dark:border-primary items-center>
          <div w-full flex justify-between lg:justify-start>
            <div pe-3 text-lg lg:text-2xl font-bold>
              {{ item?.name }}
            </div>
            <div border-1 sans rounded-full h-6 mt-1 px-2 py-1 text-color-secondary border-color
              class="text-[10px] w-auto whitespace-nowrap">
              5 Star Hotel
            </div>
          </div>
          <div flex justify-start mt-1>
            <div class="text-[#646465]" i-mdi:map-marker />
            <div text-xs lg:text-sm ps-2 flex text-primary justify-between pe-1 sans>
              {{ item.location.main.name }}
              <div invisible lg:visible flex text-primary justify-between>
                <button text-sm cursor-pointer ms-2 font-medium text-blue>
                  See Map
                </button>
                <div class=" text-blue text-lg" i-mdi:arrow-right-thin />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-[70%] lg:h-fit 2xl:h-[70%] flex flex-col justify-around">
          <div class="w-[90%] my-3">
            <div flex justify-start text-xs text-color-primary gap-x-2>
              <FormRating :value="3" :disabled="true" content-class="w-3 h-3 m-[1px]" />
              312 reviews
            </div>
            <div class="text-xs w-full">
              {{ item?.descriptions.headline }}
            </div>
          </div>
          <div border-1 rounded-full hidden lg:block
            class="w-[120px] ps-2 items-center border-#A179F5 text-#A179F5 text-[13px] lg:mt-2 xl:mt-3 2xl:mt-0">
            Fully Refundable
          </div>
          <div v-if="item?.rooms" class="hidden lg:inline-block justify-start w-full lg:flex lg:mt-2 xl:mt-3 2xl:mt-0">
            <div v-for="(data, idx) in item?.rooms[0]?.amenities" :key="idx" flex gap-x-2 mx-2>
              <ResultsAmenitiesList :type="data?.name" />
              <div text-sm>
                {{ data?.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- for upto larger screen only -->
      <div class="border-[#E7E7E7] border-b-1 px-3 dark:border-primary  inline-block lg:hidden" py-4 w-full flex
        text-primary justify-between>
        <div text-blue text-sm>
          <button>View Details</button>
        </div>
        <div flex text-primary justify-start>
          <button cursor-pointer text-sm ms-2 font-medium text-blue>
            See Map
          </button>
          <div class=" text-blue text-lg" i-mdi:arrow-right-thin />
        </div>
      </div>
      <!-- for upto larger screen only end -->

      <!-- for upto larger screen only -->
      <div class="border-[#E7E7E7] border-b-1 inline-block lg:hidden" p-4 w-full flex text-primary justify-between>
        <div border-1 rounded-full dark:border-primary
          class="w-[120px] ps-2 items-center border-#A179F5 text-#A179F5 text-[13px]">
          Fully Refundable
        </div>
        <div v-if="item?.rooms" flex justify-start>
          <div class="flex justify-end w-[95%]">
            <div v-for="(data, idx) in item.rooms[0].amenities" :key="idx" flex mx-2>
              <ResultsAmenitiesList :type="data.name" />
            </div>
          </div>
        </div>
      </div>
      <!-- for upto larger screen only end -->

      <div class="price_section">
        <div px-4 text-left lg:text-right>
          <div invisible lg:visible sans class="text-[11px] ">
            Starting From
          </div>
          <div lg:text-4xl text-3xl font-normal font-sans>
            $350
          </div>
          <div text-sm font-medium sans>
            Total $385
          </div>
        </div>
        <div>
          <div text-center font-medium class="text-primary text-xs mb-2">
            <span class="text-secondary">Hurry up!</span> only 2 rooms left
          </div>
          <button class="choose-btn">
            Choose Room
            <div py-1 i-mdi:arrow-right-thin />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="cardType === 'map'" class="map-card">
    <img :src="imagesData(item?.images[0])" alt="eventImg">
    <div w-full text-left ml-4>
      <div class="name">
        {{ item?.name }}
      </div>
      <div class="location">
        <div class="text-color-secondary" i-mdi:map-marker />
        <div>{{ item?.location }}</div>
      </div>
      <div class="amenities">
        <div v-for="(data, idx) in item.rooms[0].amenities" :key="idx">
          {{ data.name }}<span v-if="idx < (item.rooms[0].amenities?.length - 1)">,&nbsp;</span>
        </div>
      </div>
      <div flex justify-between items-end mb-6>
        <div flex justify-start text-xs text-color-primary gap-x-2>
          <FormRating :value="3" :disabled="true" content-class="w-3 h-3 m-[1px]" />
          312 reviews
        </div>
        <div lg:text-xl text-lg>
          $300
        </div>
      </div>
      <div text-blue text-xs>
        <button>View Details</button>
      </div>
      <button class="choose-btn">
        Choose Room
        <div py-1 i-mdi:arrow-right-thin />
      </button>
    </div>
  </div>

  <div v-if="cardType === 'map-view'" class="map-view-card flex-col">
    <!-- <SwiperImage :images="item?.images" :delay="8500" /> -->
    <div w-full text-left mt-2>
      <div class="text-sm font-bold">
        {{ item?.name }}
      </div>
      <div class="text-xs mt-1 mb-2  flex text-primary justify-start items-center space-x-1">
        <div i-mdi:map-marker />
        <div>{{ item?.location.main.name }}</div>
      </div>
      <div class="flex justify-start w-full mt-2">
        <div v-for="(data, idx) in item.rooms[0].amenities" :key="idx" flex gap-x-2 mx-2>
          <ResultsAmenitiesList :size="'text-sm'" :type="data.name" />
        </div>
      </div>
      <div flex justify-between items-center mb-4>
        <div flex justify-start items-center text-xs gap-x-1>
          <FormRating :value="4" :disabled="true" content-class="w-2 h-3 m-[1px]" />
          412 reviews
        </div>
        <div lg:text-lg font-bold text-lg>
          $300
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.map-view-card {
  @apply relative flex justify-between text-black;
}

.map-card {
  @apply relative w-[85vw] md:w-[60vw] lg:w-full mr-2 lg:mr-0 background-secondary shadow-md flex p-4 justify-between mb-2;
}

.map-card img {
  @apply w-1/4 object-cover;
}

.map-card .name {
  @apply text-base font-bold mb-1;
}

.map-card .location {
  @apply text-xs mb-2 lg:text-sm flex text-color-secondary justify-start items-center space-x-1;
}

.map-card .amenities {
  @apply text-xs text-primary font-bold mb-3 flex justify-start items-center flex-wrap;
}

.map-card .choose-btn {
  @apply absolute bottom-0 right-0 bg-black dark:bg-[#292931] p-2 w-36 flex items-center text-white justify-center;
}

.list-card {
  @apply w-full md:w-[49%] lg:w-full shadow-md;
  @apply lg:flex mb-6 last:mb-0 justify-around;
}

.list-card img {
  @apply w-full lg:w-[30%] 2xl:w-[35%] object-cover;
}

.list-card .choose-btn {
  @apply h-[60px] btn text-center;
  @apply bg-black dark:bg-[#292931] p-2 w-full flex items-center text-white justify-center;
}

.list-card .choose-btn:hover {
  background: linear-gradient(275.36deg, #2f69ff, #c856ff);
  ;
}

.map-card .choose-btn:hover {
  background: linear-gradient(275.36deg, #2f69ff, #c856ff);
  ;
}

.list-card .content {
  @apply w-full lg:w-[70%] 2xl:w-[65%] pt-5 space-y-2;
  @apply lg:flex justify-between flex-col lg:flex-row lg:py-2;
  @apply background-secondary text-left;
}

.price_section {
  @apply w-full lg:w-[32%] xl:w-[37%] h-full flex lg:flex-col justify-between;
  @apply lg:border-[#E7E7E7] lg:border-l-1 dark:border-primary;
}
</style>

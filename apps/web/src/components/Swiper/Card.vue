<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Swiper as ISwiper } from "swiper";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { ref } from "vue";
const {width} = useWindowSize()
let swiperRef = ref<ISwiper>();
const paginationLength = computed(() => {
  return swiperRef.value?.pagination.bullets.length
})

const setSwiperRef = (swiper: ISwiper) => {
  swiperRef = swiper;
};
interface ISwiperImageProps {
    items?: string[]
}
defineProps<ISwiperImageProps>()
let currentIndex = $ref(0)
const next = () => {
  swiperRef?.slideNext()
  if ((paginationLength.value - 1) > currentIndex) currentIndex++
  else currentIndex = 0
}
const previous = () => {
  swiperRef?.slidePrev()
  if (currentIndex > 0) currentIndex--
  else currentIndex = paginationLength.value - 1
}

</script>

<template>
  <div w-full>
    <div w-full flex justify-between items-center my-4>
      <h1 font-sans text-xl font-bold>Browse our hottest destinations and hotels</h1>
      <div flex justify-end items-center gap-2>
        <button cursor-pointer p-1 background-secondary @click="previous()">
          <div text-xl text-primary i-mdi:chevron-left />
        </button>
        <button cursor-pointer p-1 background-secondary @click="next()">
          <div text-xl text-primary i-mdi:chevron-right />
        </button>
      </div>
    </div>
    <swiper 
      :slidesPerView="((width>1024)? 4 :((width<1024)&&(width>=768)?3:((width<768)&&(width>=640)?2:1 ) ))" 
      :spaceBetween="30" 
      :slidesPerGroup="4" 
      :loop="true" 
      :loopFillGroupWithBlank="false"
      :modules="[Pagination, Navigation]" 
      class="mySwiper" 
      @swiper="setSwiperRef">
      <swiper-slide v-for="(item, idx) in items" :key="idx">
        <CardEvent :item="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="css">
.swiper {
  @apply w-full h-fit;
}

.swiper-slide {
  @apply flex h-fit text-center text-primary text-sm background-secondary justify-center items-center;
}

.swiper-slide img {
  @apply block w-full h-full object-cover;
}
</style>

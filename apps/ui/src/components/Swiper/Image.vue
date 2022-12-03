<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import "~/assets/css/swiper.css";

interface ISwiperImageProps {
  images: string[]
  delay?: number
}
const props = defineProps<ISwiperImageProps>()
</script>

<template>
  <swiper
    :space-between="30"
    :centered-slides="true"
    :autoplay="{
      delay: props.delay ?? 2500,
      disableOnInteraction: false,
    }"
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="[Autoplay, Navigation, Pagination]"
    class="mySwiper"
  >
    <swiper-slide v-for="(image, idx) of images" :key="idx">
      <!-- <ProgressiveImage object-cover :src="bg1" /> -->
      <img w-full :src="image" alt="swiperImage">
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="css">
.mySwiper {
    @apply w-full h-full;
}

.swiper-slide {
    @apply flex text-center text-primary text-sm background-secondary justify-center items-center;
}

.swiper-slide img {
    @apply block w-full h-full object-cover;
}
.swiper-pagination-bullet-active {
    @apply !bg-secondary;
}
.swiper-button-next, .swiper-button-prev {
    @apply !text-secondary;
}
</style>

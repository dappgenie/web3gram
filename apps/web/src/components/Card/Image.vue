<script lang="ts" setup>
import { useElementHover } from '@vueuse/core'
import { ref } from 'vue';
import Custom from '../Modal/Custom.vue';
const refEl = ref()
const isOpen = ref(false)
const isHovered = useElementHover(refEl)
</script>

<template>
  <div ref="refEl" class="card" @click="isOpen=true">
    <img src="@/assets/images/home/popular_hotel_1.png" alt="Post"/>
    <div v-if="isHovered" class="banner">
      <div>23</div>
      <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#888888" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
    </div>
  </div>
  
  <Custom @close="isOpen = false" :show="isOpen">
    <template #content>
      <div class="card-open">
        <img class="image" src="@/assets/images/home/popular_hotel_1.png" alt="Post"/>
        <div class="list">
          <div class="name">
            <img class="profile" src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Fred Chadwick</span>
          </div>
          <div class="caption">To the moon and back</div>
          <div class="comment">
            <img class="user" src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Amazing!!</span>
          </div>
          <div class="comment">
            <img class="user" src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Superb!!</span>
          </div>
          <div class="comment">
            <img class="user" src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Fantastic!!</span>
          </div>
        </div>
      </div>
    </template>
  </Custom>
</template>

<style scoped lang="postcss">
.card {
  @apply w-[32%] xl:w-[24%] h-72 overflow-hidden cursor-pointer;
  img {
    @apply object-cover;
  }
}
.like {
  @apply w-full p-4;
}
.banner {
  @apply p-2 bg-black/40 text-black dark:text-white gap-x-2 font-black flex justify-start items-center;
}
.card-open {
  @apply h-[32rem] w-full m-0 flex justify-between;
}
.image {
  @apply h-full w-[59%] object-cover;
}
.list {
  @apply w-[39%] gap-y-2 p-10;
}
.name {
  @apply text-black dark:text-white flex justify-start gap-x-2 items-center;
}
.caption {
  @apply text-black dark:text-white text-sm mt-4;
}
.profile {
  @apply text-black dark:text-white w-20 h-20 rounded-full object-cover;
}
.comment {
  @apply text-black dark:text-white text-sm flex py-2 justify-start gap-x-2 m-3 border-b border-gray-400 items-center;
}
.user {
  @apply text-black dark:text-white w-14 h-14 rounded-full object-cover;
}
</style>

<script lang="ts" setup>
import { useElementHover } from '@vueuse/core'
import { ref } from 'vue';
import Custom from '../Modal/Custom.vue';
const refEl = ref()
const isOpen = ref(false)
const isHovered = useElementHover(refEl)
</script>

<template>
  <div ref="refEl" class="w-[32%] xl:w-[24%] h-36 overflow-hidden">
    <img object-cover src="@/assets/images/home/popular_hotel_1.png" alt="Post"/>
    <div v-if="isHovered" w-full p-4>23<div i-mdi:cards-heart-outline/></div>
  </div>
  
  <Custom @close="isOpen = false" :show="isOpen">
    <template #content>
      <div h-[16rem] w-[70%] flex justify-between>
        <img h-full w-full object-cover src="@/assets/images/home/popular_hotel_1.png" alt="Post"/>
        <div gap-y-2>
          <div flex justify-start gap-x-2 items-center>
            <img w-20 h-20 rounded-full object-cover src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Fred Chadwick</span>
          </div>
          <div>To the moon and back</div>
          <div flex justify-start gap-x-2 m-3 border-b border-gray-400 items-center>
            <img w-14 h-14 rounded-full object-cover src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Amazing!!</span>
          </div>
          <div flex justify-start gap-x-2 m-3 border-b border-gray-400 items-center>
            <img w-14 h-14 rounded-full object-cover src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Superb!!</span>
          </div>
          <div flex justify-start gap-x-2 m-3 items-center>
            <img w-14 h-14 rounded-full object-cover src="@/assets/images/home/popular_hotel_1.png" alt="PP"/>
            <span>Fantastic!!</span>
          </div>
        </div>
      </div>
    </template>
  </Custom>
</template>

<style scoped lang="postcss"></style>

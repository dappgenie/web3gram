<script lang="ts" setup>
</script>

<template>
  <div class="container m-auto">
    <div>
      <img w-full h-72 object-cover src="@/assets/images/home/hotel_image_1.png" alt="cover"/>
      <div m-auto background-secondary>
        <img class="w-36 m-auto -mt-20 h-36 rounded-full object-cover shadow-lg border border-color" src="@/assets/images/home/event_image_2.png" alt="cover"/>
        <div text-lg font-black m-auto mt-2 text-center w-full>Fred Mark</div>
      </div>
      <div class="h-36 px-8 py-8 background-secondary text-color-secondary w-full flex justify-end items-center gap-x-12 -mt-28">
        <div grid>
          <span text-sm font-bold>Posts</span>
          <span>60</span>
        </div>
        <div grid>
          <span text-sm font-bold>Followers</span>
          <span>100</span>
        </div>
        <div grid>
          <span text-sm font-bold>Following</span>
          <span>260</span>
        </div>
      </div>
    </div>
    <ProfilePost/>
    <div w-full>
      <ProfileTab/>
    </div>
  </div>
</template>

<style scoped lang="css"></style>

<route lang="yaml">
  meta:
    layout: home
  </route>

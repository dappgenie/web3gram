<script lang="ts" setup>
interface IEventProps {
  item: {
    name: string
    date: string
    location: string
    price: string
    image: string
  }
}
defineProps<IEventProps>()
</script>

<template>
  <div class="card">
    <img :src="item.image" alt="eventImg" />
    <div class="content">
      <div font-bold text-lg text-color-primary>
        {{ item.name }}
      </div>
      <div flex justify-start items-center gap-2>
        <div i-mdi:calendar-month /><div>{{ item.date }}</div>
      </div>
      <div flex justify-start items-center gap-2 text-color-secondary>
        <div i-mdi:map-marker /><div>{{ item.location }}</div>
      </div>
      <div pt-4 text-color-secondary>
        From
      </div>
      <div font-bold text-lg text-color-primary>
        ${{ item.price }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.card {
    @apply w-full;
}
.card img {
    @apply w-full h-64 2xl:h-80 object-cover;
}
.card .content {
    @apply px-4 py-5 text-xs space-y-2;
    @apply background-secondary text-left;
}
</style>

<script lang="ts" setup>
interface IEventProps {
  value: number
}
defineProps<IEventProps>()
</script>

<template>
  <div className="rating">
    <div class="rating-container">
      <div v-if="value >= 1" class="text-starColor" i-mdi:star />  <div v-if="value == 0.5" class="text-starColor" i-mdi:star-half />
      <div v-if="value >= 2" class="text-starColor" i-mdi:star />  <div v-if="value == 1.5" class="text-starColor" i-mdi:star-half />
      <div v-if="value >= 3" class="text-starColor" i-mdi:star />  <div v-if="value == 2.5" class="text-starColor" i-mdi:star-half />
      <div v-if="value >= 4" class="text-starColor" i-mdi:star />  <div v-if="value == 3.5" class="text-starColor" i-mdi:star-half />
      <div v-if="value >= 5" class="text-starColor" i-mdi:star />  <div v-if="value == 4.5" class="text-starColor" i-mdi:star-half />
    </div>
  </div>
</template>

<style scoped lang="css">
  .rating-container {
    display:flex;
    justify-content: center;
  }
</style>

<!-- <template>
    <div class="rating-container">
        <font-awesome-icon icon="star"  v-for="idx in completeRange" v-bind:key="idx + 'st'" />
        <font-awesome-icon :icon="['fas', 'star-half-alt']"  v-for="idx in halfRange" v-bind:key="idx + 'stt'" />
        <font-awesome-icon :icon="['far', 'star']"  v-for="idx in totalRange" v-bind:key="idx" />
    </div>
  </template>

  <script>
  const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i)

  export default {
    name: 'RatingComponent',
    props: {
      value: Number,
      total: Number
    },
    data () {
      return {
        completeRange: range(0, this.value - 1),
        halfRange: range(0, this.value % 1 === 0 ? 0 : 1),
        totalRange: range(0, this.total - this.value)
      }
    },
    created: function () {
      if (this.value > this.total) {
        throw new Error('total lower than value')
      }
    }
  }
  </script>

  <style scoped>
  .rating-container {
    display:flex;
    justify-content: center;
  }
  </style> -->

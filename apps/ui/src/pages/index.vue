<script lang="ts" setup>
const asyncMain = defineAsyncComponent(() => import('~/components/Home/Main.vue'))
</script>

<template>
  <asyncMain />
</template>

<route lang="yaml">
meta:
  layout: home
</route>


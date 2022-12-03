<script lang="ts" setup>
const name = 'Page'
</script>

<template>
    <p class="border-l">Hello World {{ name }}</p>
</template>

<style scoped lang="postcss"></style>

<route lang="yaml">
meta:
    layout: home
</route>

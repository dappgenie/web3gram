<script lang="ts" setup>
import { defineAsyncComponent } from '@vue/runtime-core'

const asyncMain = defineAsyncComponent(
    () => import('~/components/Home/Main.vue')
)
</script>

<template>
    <asyncMain />
</template>

<route lang="yaml">
meta:
    layout: home
</route>

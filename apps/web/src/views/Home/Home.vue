<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const asyncMain = defineAsyncComponent(
    () => import('@/components/Home/Main.vue')
)
</script>

<template>
    <asyncMain />
</template>

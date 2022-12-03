<script lang="ts" setup>
import { HOTELS_LIST } from '~/utils/repository';
</script>

<template>
    <div mt-16>
        <SwiperCard :items="HOTELS_LIST"/>
    </div>
</template>

<style module lang="css"></style>
<script lang="ts" setup>
import { EVENTS_LIST } from '~/utils/repository';
</script>

<template>
    <div mt-16>
        <SwiperCard :items="EVENTS_LIST"/>
    </div>
</template>

<style module lang="css"></style>
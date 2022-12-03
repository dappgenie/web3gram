<script lang="ts" setup>
import Post from '@/components/Profile/Post.vue';
import Tab from '@/components/Profile/Tab.vue';

</script>

<template>
    <div class="container m-auto">
        <div>
            <img class="image" src="@/assets/images/home/hotel_image_1.png" alt="cover" />
            <div class="m-auto bg-white dark:bg-black">
                <img
                    class="w-36 m-auto -mt-20 h-36 rounded-full object-cover shadow-lg border border-color"
                    src="@/assets/images/home/event_image_2.png"
                    alt="cover"
                />
                <div class="text-lg font-black m-auto mt-2 text-center w-full">
                    Fred Mark
                </div>
            </div>
            <div
                class="h-36 px-8 py-8 bg-white dark:bg-black text-color-secondary w-full flex justify-end items-center gap-x-12 -mt-28"
            >
                <div class="grid">
                    <span class="text-sm font-bold">Posts</span>
                    <span>60</span>
                </div>
                <div class="grid">
                    <span class="text-sm font-bold">Followers</span>
                    <span>100</span>
                </div>
                <div class="grid">
                    <span class="text-sm font-bold">Following</span>
                    <span>260</span>
                </div>
            </div>
        </div>
        <Post />
        <div w-full>
            <Tab />
        </div>
    </div>
</template>

<style scoped lang="postcss">
.image {
    @apply w-full h-64 object-cover;
}
</style>

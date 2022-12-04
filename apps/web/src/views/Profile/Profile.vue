<script lang="ts" setup>
import Image from '@/components/Card/Image.vue';
import Post from '@/components/Profile/Post.vue';
import Tab from '@/components/Profile/Tab.vue';

</script>

<template>
    <div class="container m-auto">
        <div>
            <img
                class="cover-pic"
                src="@/assets/images/NFTs/App.png"
                alt="cover"
            />
            <div class="profile">
                <img
                    class="profile-pic"
                    src="@/assets/images/user.jpeg"
                    alt="cover"
                />
                <div class="name">
                    Fred Mark
                </div>
            </div>
            <div
                class="profile-header"
            >
                <div class="title-box">
                    <span class="title">Posts</span>
                    <span>60</span>
                </div>
                <div class="title-box">
                    <span class="title">Followers</span>
                    <span>100</span>
                </div>
                <div class="title-box">
                    <span class="title">Following</span>
                    <span>260</span>
                </div>
            </div>
        </div>
        <Post />
        <div class="posts">
            <Tab />
            <div class="list">
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.cover-pic {
    width: 100%;
    @apply w-full h-72 object-cover;
}
.title-box {
    @apply grid;
    .title {
        @apply text-sm font-bold;
    }
}
.profile {
    @apply m-auto bg-white dark:bg-black;
}
.profile-pic {
    @apply w-36 m-auto -mt-20 h-36 rounded-full object-cover shadow-lg border border-gray-400;
}
.name {
    @apply text-lg text-black dark:text-white font-black m-auto mt-2 text-center w-full;
}
.profile-header {
    @apply h-36 px-8 py-8 bg-white dark:bg-black text-gray-300 w-full flex justify-end items-center gap-x-12 -mt-28;
}
.posts {
    @apply w-full;
}
.list {
    @apply flex flex-row flex-wrap justify-between;
}
</style>

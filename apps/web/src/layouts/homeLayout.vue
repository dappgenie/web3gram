<script lang="ts" setup>
import Header from '@/components/Header.vue';

</script>
<template>
    <main class="font-sans grid background">
        <Header />
        <div class="page">
            <RouterView />
            <Toasts />
        </div>
    </main>
</template>

<style scoped lang="postcss">
.page {
    @apply relative pb-12 px-4 md:px-10 xl:px-12 2xl:px-14 mt-16 lg:mt-20 bg-gray-200 dark:bg-gray-900 w-screen;
}
</style>

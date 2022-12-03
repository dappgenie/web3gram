<script lang="ts" setup>
import { ref } from 'vue';

interface ITabsEmits {
    (e: 'change', value: number): void
}
const emit = defineEmits<ITabsEmits>()
const selected = ref(0)
const selectOption = (option: number) => {
    selected.value = option
    emit('change', option)
}
</script>

<template>
    <div class="tab-box">
        <div class="tabs">
            <div
                class="tab"
                :class="[selected === 0 ? 'text-violet-500' : 'text-primary']"
                @click="selectOption(0)"
            >
                <label class="z-20 flex items-center justify-center">
                    <div class="mr-2" i-mdi:draw-pen />
                    My Arts</label>
            </div>
            <div
                class="tab"
                :class="[selected === 1 ? 'text-violet-500' : 'text-primary']"
                @click="selectOption(1)"
            >
                <label class="z-20 flex items-center justify-center"
                    ><div mr-2 i-mdi:format-list-bulleted-square />
                    My Collections</label
                >
            </div>
            <div
                class="tab"
                :class="[selected === 2 ? 'text-violet-500' : 'text-primary']"
                @click="selectOption(2)"
            >
                <label z-20 flex items-center justify-center
                    ><div mr-2 i-mdi:account-supervisor />
                    My Friends</label
                >
            </div>
            <span
                :class="[
                    'glider',
                    selected === 0
                        ? 'glider1'
                        : selected === 1
                        ? 'glider2'
                        : 'glider3',
                ]"
            ></span>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.tab-box {
    @apply relative flex w-full items-center justify-center my-8;
}
.tabs {
    @apply flex relative bg-[#EAEEF4] dark:bg-[#151515] shadow-lg rounded-lg z-10;
}

.tab {
    @apply flex items-center justify-center h-10 p-6 w-96 text-sm font-black cursor-pointer;
    transition: color 0.15s ease-in;
}

input[type='radio']:checked + label {
    @apply text-violet-500;
}

.glider1 {
    transform: translateX(0);
}

.glider2 {
    transform: translateX(100%);
}
.glider3 {
    transform: translateX(200%);
}

.glider {
    @apply absolute flex h-10 p-6 w-96 bg-white dark:bg-black z-10 rounded-lg;
    transition: 0.25s ease-out;
}
</style>

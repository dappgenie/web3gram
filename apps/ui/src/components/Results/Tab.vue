<script lang="ts" setup>

interface ITabsEmits {
  (e: "change", value: number): void;
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
        <div class="tab" :class="[selected===0 ? 'text-secondary' : 'text-primary']" @click="selectOption(0)">
            <label z-20 flex items-center justify-center><div mr-2 i-mdi:format-list-bulleted/>List</label>
        </div>
        <div class="tab" :class="[selected===1 ? 'text-secondary' : 'text-primary']" @click="selectOption(1)">           
            <label z-20 flex items-center justify-center><div mr-2 i-mdi:map-marker/>Map</label>
        </div>
		<span :class="['glider', selected===0 ? 'glider1' : 'glider2']"></span>
	</div>
</div>
</template>

<style scoped lang="css">

.tab-box {
    @apply relative flex w-full items-center justify-center my-4;
}
.tabs {
    @apply flex relative bg-[#EAEEF4] dark:bg-[#151515] shadow-lg rounded-lg z-10;
}

.tab {
    @apply flex items-center justify-center h-10 p-6 w-32 text-sm font-black cursor-pointer;
	transition: color 0.15s ease-in;
}

input[type="radio"]:checked+ label {
			@apply text-secondary;
		}

.glider1 {
			transform: translateX(0);
		}

.glider2 {
			transform: translateX(100%);
		}

.glider {
    @apply absolute flex h-10 p-6 w-32 bg-white dark:bg-black z-10 rounded-lg;
	transition: 0.25s ease-out;
}

</style>

<script lang="ts" setup>
interface IButtonProps {
    id?: string
    name?: string
    color?: 'base' | 'gradient' | 'primary' | 'warning' | 'success' | 'blue'
    iconPosition?: 'left' | 'right'
    rounded?: 'none' | 'sm' | 'lg' | 'xl' | '2xl' | 'full'
}
const props = defineProps<IButtonProps>()
</script>

<template>
    <button
        class="button-style"
    >
        <div v-if="iconPosition === 'left'" class="mr-2">
            <slot name="icon" />
        </div>
        <slot name="content"> Click </slot>
        <div v-if="iconPosition === 'right'" class="ml-2">
            <slot name="icon" />
        </div>
    </button>
</template>

<style scoped lang="postcss">
.button-style {
    @apply px-4 py-2.5 rounded-lg cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 flex justify-center items-center text-sm active:scale-105 transition-all bg-violet-800 hover:bg-violet-800/50 hover:dark:bg-violet-800/80 text-white;
}
.btn-base {
    @apply bg-black/90 dark:bg-gray-200 hover:bg-black/40 hover:dark:bg-gray-100 text-white dark:text-black;
}
.btn-blue {
    @apply bg-violet-800 hover:bg-violet-800/50 hover:dark:bg-violet-800/80 text-white;
}
.btn-primary {
    @apply bg-gray-400 dark:bg-violet-800 hover:bg-gray-400/80 dark:hover:bg-violet-800/80 text-white;
}
.btn-warning {
    @apply bg-red-700 dark:bg-red-900 hover:bg-red-600 dark:hover:bg-red-800 text-white;
}
.btn-success {
    @apply bg-green-700 dark:bg-green-800 hover:bg-green-600 dark:hover:bg-green-700 text-white;
}
.btn-gradient {
    @apply text-white bg-[length:100%_50%] bg-gradient-to-r from-[#2F69FF] to-[#C856FF];
    @apply hover:bg-gradient-to-l from-[#2F69FF] to-[#C856FF];
}
</style>

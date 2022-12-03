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
        :class="[
            color ? `btn-${color}` : 'btn-base',
            rounded ? `rounded-${rounded}` : 'rounded-none',
        ]"
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

<style scoped lang="css">
.btn-icon {
    @apply w-3 h-3;
}
.button-style {
    @apply btn flex justify-center items-center text-sm active:scale-105 transition-all;
}
.rounded-full {
    border-radius: 10em;
}
.btn-base {
    @apply bg-black/90 dark:bg-gray-200 hover:bg-[#black]/40 hover:dark:bg-gray-100 text-white dark:text-black;
}
.btn-blue {
    @apply bg-secondary hover:bg-sksecondary/50 hover:dark:bg-secondary/80 text-white;
}
.btn-primary {
    @apply bg-primary dark:bg-secondary hover:bg-primary/80 dark:hover:bg-secondary/80 text-white;
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

<script lang="ts" setup>
interface IInputGroup {
    isLabel?: boolean
    outline?: 'bottom' | 'none' | 'all'
}
defineProps<IInputGroup>()
</script>

<template>
    <div
        class="input-grp"
        :class="[
            outline ? `outline-${outline}` : 'outline-all',
            outline === 'none' ? 'block' : 'flex',
        ]"
    >
        <div
            v-if="isLabel"
            class="label"
            :class="
                outline === 'none' ? 'relative' : 'absolute -top-2 left-2 px-1'
            "
        >
            <slot name="label"> Label </slot>
        </div>
        <div flex items-center gap-x-2 w-full>
            <slot name="left" />
            <slot />
            <slot name="right" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.label {
    @apply bg-white dark:bg-black;
    @apply text-xs text-gray-300 font-medium;
}

.input-grp {
    @apply w-full relative px-2 items-center gap-x-2;
    @apply bg-transparent border-gray-400;
}

.outline-bottom {
    @apply border-b py-2.5;
}

.outline-none {
    @apply border-none;
}

.outline-all {
    @apply border rounded-md py-4;
}
</style>

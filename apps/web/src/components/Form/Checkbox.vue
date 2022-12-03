<script lang="ts" setup>
interface ICheckboxProps {
    modelValue?: boolean | undefined
    disabled?: boolean
    reverse?: boolean
}
defineProps<ICheckboxProps>()
const emit = defineEmits<ICheckboxEmits>()
interface ICheckboxEmits {
    (e: 'update:modelValue', value: boolean): void
}
</script>

<template>
    <label
        class="cursor-pointer label flex items-center justify-start text-sm text-white"
    >
        <div v-if="reverse" class="text-sm mr-4">
            <slot name="title" />
        </div>
        <label class="checkbox bounce">
            <input
                :value="modelValue"
                :checked="modelValue"
                type="checkbox"
                :disabled="disabled"
                @input="emit('update:modelValue', ($event.target as any).value)"
            />
            <svg stroke-secondary viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6" />
            </svg>
        </label>
        <div v-if="!reverse" class="text-sm ml-4 text-color-primary">
            <slot name="title" />
        </div>
    </label>
</template>

<style scoped lang="postcss">
.checkbox {
    @apply bg-transparent border-1 border-primary rounded-md;
    position: relative;
}
.checkbox input {
    @apply w-4 h-4 block;
}
.checkbox input {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    @apply relative bg-gray-200 dark:bg-gray-900 text-primary border-0 rounded-md m-0 p-0 cursor-pointer;
    transition: box-shadow 0.3s;
}
.shadow-light {
    @apply hover:shadow-btn-hover dark:hover:shadow-btn-dark-hover;
    filter: drop-shadow(0px -1px 1px #ffffff)
        drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.25))
        drop-shadow(1px 1px 3px rgba(198, 216, 255, 0.25));
}
.shadow-dark {
    @apply hover:shadow-btn-hover dark:hover:shadow-btn-dark-hover;
    filter: drop-shadow(-1px -1px 1px rgba(107, 107, 107, 0.25))
        drop-shadow(1px 1px 1px #0c0c0c);
}
.checkbox input:hover {
    --s: 2px;
    --b: var(--border-hover);
}
.checkbox input:checked {
    --b: var(--border-active);
}
.checkbox svg {
    @apply stroke-black dark:stroke-white pointer-events-none fill-none;
    @apply w-4 h-4 absolute top-0 left-0;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform: scale(var(--scale, 1)) translateZ(0);
}

.checkbox.bounce {
    --stroke: var(--tick);
}
.checkbox.bounce input:checked {
    --s: 11px;
}
.checkbox.bounce input:checked + svg {
    -webkit-animation: bounce 0.4s linear forwards 0.2s;
    animation: bounce 0.4s linear forwards 0.2s;
}
.checkbox.bounce svg {
    --scale: 0;
}

@-webkit-keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}
</style>

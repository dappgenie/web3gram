<script lang="ts" setup>import { onClickOutside } from '@vueuse/core';
import { ref, Teleport, Transition } from 'vue';

interface IModalProps {
    show: boolean
    hideClose?: boolean
    zIndex?: number
    hideTitle?: boolean
}
defineProps<IModalProps>()

const emit = defineEmits<IModalEmits>()

interface IModalEmits {
    (e: 'close'): void
    (e: 'backdrop'): void
}
const target = ref<HTMLDivElement>()

onClickOutside(target, (event) => {
    // console.log(' target.value', target.value)
    emit('close')
})
</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="show"
                :style="{ zIndex: zIndex ?? 100 }"
                class="modal"
                @click="emit('backdrop')"
            >
                <div
                    ref="target"
                    class="modal-item"
                    @click="$event.stopPropagation()"
                >
                    <div >
                        <div
                            v-if="!hideTitle"
                            class="title"
                        >
                            <slot name="title" />
                        </div>
                        <button
                            v-if="!hideClose"
                            class="close-btn"
                            @click.stop="emit('close')"
                        >
                            <div i-mdi:close />
                        </button>
                    </div>
                    <div p-4>
                        <slot name="content" />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="postcss" scoped>
.modal {
   @apply fixed top-0 left-0 w-screen h-screen flex overflow-y-auto bg-gray-100 bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70;
}
.modal-item {
    @apply m-auto bg-white dark:bg-black relative rounded-lg overflow-hidden overflow-y-auto shadow-lg;
}
.title {
    @apply z-20 w-full sticky top-0 flex justify-between items-center;
}
.close-btn {
    @apply absolute top-0 right-0 z-40 m-2 w-8 h-8 opacity-20 hover:opacity-100 transition duration-300 ease-in-out fill-gray-800 dark:fill-gray-100;
}
.modal-enter-active {
    animation: fade-in 0.3s;
}
.modal-enter-active .modal-content {
    animation: bounce-in 0.3s;
}
.modal-leave-active {
    animation: fade-in 0.3s reverse;
}
.modal-leave-active .modal-content {
    animation: bounce-in 0.3s reverse;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    /* 50% {
      transform: scale(1.15);
    } */
    100% {
        transform: scale(1);
    }
}
</style>

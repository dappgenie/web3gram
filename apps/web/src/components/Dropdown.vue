<script lang="ts" setup>
import { HTMLAttributes, onBeforeUnmount, ref, watchEffect } from 'vue'
import { onClickOutside, useElementSize, useWindowSize } from '@vueuse/core'
import {
    autoUpdate,
    computePosition,
    flip,
    offset,
    shift,
} from '@floating-ui/dom'
interface IDropdownProps {
    closeOnSelect?: boolean
    contentClass?: HTMLAttributes['class']
    maxHeight?: HTMLAttributes['class']
    position?: 'right' | 'left' | 'center'
    parentClass?: string
}

const props = defineProps<IDropdownProps>()

const isOptionsVisible = ref<boolean>(false)
const refReference = ref()
const refFloating = ref()
const isTop = ref(false)
const { height } = useWindowSize()
const dropdown = ref<HTMLDivElement>()

onClickOutside(refFloating, (event) => {
    isOptionsVisible.value = false
})

/* -------------------------------------------------------------------------- */
/*                                   TRIGGER                                  */
/* -------------------------------------------------------------------------- */

const floatingWidth = ref(useElementSize(refFloating).width)
const calculateFloatingPosition = async () => {
    const { x, y } = await computePosition(
        refReference.value,
        refFloating.value,
        {
            placement: 'bottom',
            strategy: 'absolute',
            middleware: [
                offset(6),
                {
                    name: 'sameWidth',
                    fn: ({ rects, x, y }) => {
                        const totalHeight =
                            rects.floating.height + rects.reference.height
                        const difference = height.value - rects.reference.y
                        isTop.value = totalHeight < difference ? true : false
                        refFloating.value.style.minWidth = `${rects.reference.width}px`
                        const w =
                            rects.reference.x -
                            rects.floating.width +
                            rects.reference.width
                        return { x: w, y }
                    },
                },
                flip(),
                shift({ padding: 10 }),
            ],
        }
    )

    Object.assign(refFloating.value.style, {
        left: `${x}px`,
        top: `${y}px`,
    })
}
let floatingUiCleanup: Function = () => {}
const onBlur = (e: FocusEvent) => {
    if (dropdown.value) {
        const isChild = dropdown.value.contains(e.relatedTarget as Node)
        if (isChild) {
            if (props.closeOnSelect ?? true) {
                setTimeout(() => {
                    isOptionsVisible.value = false
                }, 250)
            } else {
                // get focus back to the trigger
                ;(e.target as any).focus()
            }
        } else {
            isOptionsVisible.value = false
        }
    } else {
        isOptionsVisible.value = false
    }
}
const onClick = () => {
    isOptionsVisible.value = !isOptionsVisible.value
}
const events = {
    blur: onBlur,
    click: onClick,
}
onBeforeUnmount(() => floatingUiCleanup())
watchEffect(() => {
    if (floatingWidth.value)
        floatingUiCleanup = autoUpdate(
            refReference.value,
            refFloating.value,
            calculateFloatingPosition
        )
})
</script>

<template>
    <div :class="parentClass ?? 'relative'" ref="dropdown">
        <div ref="refReference" tabindex="0" v-on="events">
            <slot />
        </div>
        <Teleport to="body">
            <Transition
                :name="`bounce-${position ?? 'right'}`"
                :class="isTop ? 'origin-top-right' : 'origin-bottom-right'"
            >
                <div
                    ref="refFloating"
                    v-show="isOptionsVisible"
                    tabindex="0"
                    class="dropdown-content"
                    :class="[
                        contentClass,
                        maxHeight ?? 'max-h-[24rem]',
                        `pos-${position ?? 'right'}`,
                    ]"
                >
                    <slot name="content" />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style lang="css" scoped>
/* -------------------------------------------------------------------------- */
/*                                 TRANSITIONS                                */
/* -------------------------------------------------------------------------- */
.dropdown-content {
    @apply absolute py-2 mt-1 z-50 rounded-lg w-fit background-secondary overflow-hidden overflow-y-scroll shadow-xl;
}

.bounce-right-enter-active {
    animation: bounce-in 0.3s;
}

.bounce-right-leave-active {
    animation: bounce-in 0.3s reverse;
}

.bounce-left-enter-active {
    animation: bounce-in 0.3s;
    @apply origin-top-left;
}

.bounce-left-leave-active {
    animation: bounce-in 0.3s reverse;
    @apply origin-top-left;
}

.bounce-center-enter-active {
    animation: bounce-in 0.3s;
    @apply origin-top;
}

.bounce-center-leave-active {
    animation: bounce-in 0.3s reverse;
    @apply origin-top;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}
</style>

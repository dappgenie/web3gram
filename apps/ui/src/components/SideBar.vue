<script lang="ts" setup>
// emit - click:back
interface ISideBarEmits {
  (e: 'clickBack'): void
}
defineProps<ISideBarProps>()
const emit = defineEmits<ISideBarEmits>()
interface ISideBarProps {
  show: boolean
}
</script>

<template>
  <Teleport to="body">
    <Transition name="slide">
      <div v-if="show" class="content-head">
        <div relative h-screen w-screen>
          <div w-full fixed top-0 z-60 background flex flex-row justify-center px-4 md:px-8 py-6>
            <button absolute left-6 md:left-10 @click="emit('clickBack')">
              <div class="text-lg md:text-xl" i-mdi:arrow-left-thin />
            </button>
            <h2 text-base sans font-medium>
              <slot name="title" />
            </h2>
          </div>
          <div class="filter-content">
            <slot name="content" />
          </div>
          <div class="filter-btn-area">
            <slot name="button-content" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="css">
.content-head{
  @apply block lg:hidden fixed top-0 left-0 background z-50 w-screen h-screen overflow-y-auto transition-all;
}
.filter-content{
  @apply w-full fixed top-0 h-[80vh] overflow-y-auto px-10 md:px-24 mt-18;
}
.filter-btn-area{
  @apply  w-full background fixed bottom-0 py-6 flex justify-evenly items-baseline text-center
}
.slide-enter-active {
  animation: slide-in 0.4s;
}
.slide-leave-active {
  animation: slide-in 0.4s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(0);
  }
}
</style>

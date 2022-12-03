<script lang="ts" setup>
const isOpen = ref(false)
interface IButtonProps {
  isOpenOpen?: string
}
defineProps<IButtonProps>()
</script>

<template>
  <div
    class="w-full rounded-sm  overflow-hidden my-2"
  >
    <div
      class="px-3 py-3 md:px-6 md:py-3 w-full flex justify-between items-center dropdown-animate transition-all"
      :class="isOpen ? 'expand bg-gradient text-white' : 'h-fit text-white dark:text-black bg-black dark:bg-[#292931]'"
    >
      <slot name="title"> </slot>
      <div/>
      <div i-mdi:menu-up
        class="font-bold text-white dark:text-black duration-300 ease-in-out"
        :class="isOpen ? 'rotate-0' : 'rotate-180'"
        @click="isOpen = !isOpen"
      />
    </div>
    <div
      class="w-full dropdown-animate transition-all overflow-hidden background-secondary"
      :class="isOpen ? 'expand opacity-100' : 'max-h-0 opacity-0'"
    >
      <div px-3 pt-2 pb-4 md:px-7 md:pb-8>
        <slot name="content"> </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.dropdown-animate {
  transition: max-height 400ms, opacity 400ms;
}
.expand {
  max-height: 100vh;
}
.bg-gradient {
  background: linear-gradient(272.42deg, #2F69FF -3.48%, #C856FF 100%);
}
</style>

<script lang="ts" setup>
  interface IToastProps {
    show?: boolean
    hideClose?: boolean
    zIndex?: number
    content: string
    type?: 'success' | 'warning' | 'error' | 'info' | 'loading'
  }
  const props = defineProps<IToastProps>()
  const { clearToast } = useToastStore()
  let showToast = ref(false)
  const dismissToast = () => {
    clearToast(props.content);
  }
  onMounted(() => {
    showToast.value = true
    setTimeout(() => {
      dismissToast();
    }, 5000);
  })
</script>

<template>
    <Transition name="toast">
      <div class="toast-wrap transition-all" :class="props.type ? `bg-${props.type}` : 'bg-primary'" v-if="showToast">
        <div class="toast">
          <div class="main">
          <div v-if="type==='success'" mr-5 text-lg i-mdi:check-bold />
          <div v-if="type==='warning'" mr-5 text-lg i-mdi:alert />
          <div v-if="type==='error'" mr-5 text-lg i-mdi:close-box-outline />
          <div v-if="type==='info'" mr-5 text-lg i-mdi:information />
          <div v-if="type==='loading'" mr-5 text-lg i-mdi:circle-slice-2 />
          {{content}}
          <div v-if="!hideClose" @click="dismissToast()" class="toast-close-btn" i-mdi:close />
          </div>
        </div>
      </div>
    </Transition>
</template>

<style scoped lang="css">
  .toast-wrap {
    @apply overflow-hidden rounded-lg;
  }
  .toast {
    @apply flex ;
    @apply p-0.5 text-base font-bold rounded-lg;
    max-width: 400px;
  }
  .toast .main {
    @apply w-60 md:w-96 background-secondary ml-4 p-4 rounded-r-lg flex items-center;
  }
  .toast-close-btn {
    @apply btn w-2 absolute right-6;
  }
/* .bg-base {
        @apply  bg-primary dark:bg-secondary;
    } */
    .bg-success {
        @apply bg-[#2AABA0] dark:bg-[#2AABA0] text-[#2AABA0];
    }
    .bg-warning {
        @apply bg-[#FFA25E] dark:bg-[#FFA25E] text-[#FFA25E];
    }
    .bg-error {
        @apply bg-[#FF8484] dark:bg-[#FF8484] text-[#FF8484];
    }
    .bg-info {
        @apply bg-[#47A9F8] dark:bg-[#47A9F8] text-[#47A9F8];
    }
    .bg-loading {
        @apply bg-[#7F97A3] dark:bg-[#7F97A3] text-[#7F97A3];
    }
</style>

<script lang="ts" setup>
const { toastList } = storeToRefs(useToastStore())
</script>

<template>
  <div class="toasts-wrapper" v-if="toastList.length">
        <ToastsItem v-for="(toast, index) of toastList" :key="index" :type="toast.type" :content="toast.content"> </ToastsItem>
    <!-- <div v-for="(toast, index) of toastList" :key="index">
        <ToastsItem v-if="toast" :content="toast"> </ToastsItem>
    </div> -->
  </div>
</template>

<style scoped lang="css">
.toasts-wrapper {
  @apply flex items-center flex-col space-y-2 fixed right-8 bottom-4 z-30;
}

/* enter transitions */
.toast-enter-from {
  /* opacity: 0; */
  transform: translateY(60px);
}
.toast-enter-to {
  /* opacity: 1; */
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 1s ease;
}
/* leave transitions */
.toast-leave-from {
  /* opacity: 1; */
  transform: translateY(0);
}
.toast-leave-to {
  /* opacity: 0; */
  transform: translateY(60px);
}
.toast-leave-active {
  transition: all 1s ease;
}
</style>

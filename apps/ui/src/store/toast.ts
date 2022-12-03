import { acceptHMRUpdate, defineStore } from 'pinia'
export const useToastStore = defineStore('toast', () => {
  let showToast = ref(false)
  const toastList = ref<{
    content: string
    type: 'success' | 'warning' | 'error' | 'info' | 'loading'
  }[]>([])
  function toaster(value: boolean) {
    showToast = ref(value)
  }
  function addToast(content: string, type: 'success' | 'warning' | 'error' | 'info' | 'loading') {
    toastList.value.push({ content, type })
    console.log("🚀 ~ file: toast.ts ~ line 13 ~ addToast ~ toastList.value", toastList.value)
  }
  function clearToast(content: string) {
    console.log("🚀 ~ file: toast.ts ~ line 16 ~ clearToast ~ toastList.value", toastList.value)
    const index = toastList.value.findIndex(toast => {
      return toast.content === content
    })
    toastList.value.splice(index, 1)
  }
  return {
    showToast,
    toastList,
    toaster,
    addToast,
    clearToast,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot))

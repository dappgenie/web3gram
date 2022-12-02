import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
  /**
   * Default state of the loader.
   */
  const isLoader = ref(false)

  /**
   * Set the state of the loader.
   */
  function setLoader(value: boolean) {
    isLoader.value = value
  }

  return {
    isLoader,
    setLoader,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLoaderStore, import.meta.hot))

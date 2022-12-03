import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", ()=> {
  const address = ref('')
  function setAddress(newData: string) {
    address.value = newData;
  }

  return { address,setAddress }
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(
    acceptHMRUpdate(useUserStore, import.meta.webpackHot)
  );
}

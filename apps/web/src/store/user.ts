import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", ()=> {
  const address = ref('')
  const ensName = ref('')
  const ensURI = ref('')
  const ETHProvider = ref(null)
  const FVMProvider = ref(null)
  const biconomyEth = ref(null)
  const biconomyFvm = ref(null)
  function setAddress(newData: string) {
    address.value = newData;
  }
  function setENSName(newData: string) {
    ensName.value = newData;
  }
  function setEnsURI(newData: string) {
    ensURI.value = newData;
  }
  function setETHProvider(data: any) {
    ETHProvider.value = data;
  }
  function setFVMProvider(data: any) {
    FVMProvider.value = data;
  }
  function setBiconomyETH(data: any) {
    biconomyEth.value = data;
  }
  function setBiconomyFVM(data: any) {
    biconomyFvm.value = data;
  }

  return { ensURI,setEnsURI,address,setAddress ,setFVMProvider,setETHProvider,ETHProvider,FVMProvider,setENSName,ensName,setBiconomyETH,setBiconomyFVM,biconomyEth,biconomyFvm}
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(
    acceptHMRUpdate(useUserStore, import.meta.webpackHot)
  );
}

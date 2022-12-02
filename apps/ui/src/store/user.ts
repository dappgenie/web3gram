
import { acceptHMRUpdate, defineStore } from 'pinia'
// import { activeChainId } from '~/utils/functions/chainConfig';

export const useUserStore = defineStore('user', () => {

  const address = ref<string | undefined>('')
  const network = ref<any | null>(null)
  const smartContract = ref<string | undefined>('')
  const userInfo = ref<any | null>(null)

  function setWeb3State(value: any | null) {
    address.value = value?.address
    network.value = value?.network
    smartContract.value = value?.smartContract
  }
  function setUserInfo(info: any | null) {
    userInfo.value = info
  }
  function logout() {
    address.value = ''
    network.value = null
    smartContract.value = ''
      userInfo.value = null
  }

  return {
    userInfo,
    address,
    network,
    smartContract,
    setWeb3State,
    setUserInfo,
    logout
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

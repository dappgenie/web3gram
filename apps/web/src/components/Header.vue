<script lang="ts" setup>
import { isDark } from '@/composables/dark';
import { BiconomyService } from '@/sevices/biconomy';
import { ethers } from 'ethers'
// import { activeChainId } from '~/utils/factories/chainConfig'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from './Button.vue';
import DarkToggle from './DarkToggle.vue';
import Dropdown from './Dropdown.vue';
import '../assets/css/biconomy.css'
// const socialLogin = new useSocialLogin()
// const { logout } = useUserStore()
// const { isLoader } = storeToRefs(useLoaderStore())
// const { address } = storeToRefs(useUserStore())
import {useUserStore} from "@/store/user";
import { storeToRefs } from "pinia";
const {address,ensName } = storeToRefs(useUserStore())
const isOpen = ref<boolean>(false)
const isLoginOpen = ref<boolean>(false)
const router = useRouter()
const biconomyService = new BiconomyService();
const signin = () => {
  // if (!address.value) 
  isLoginOpen.value = true
    biconomyService.showModel()
}

const signout = () => {
    biconomyService.signOut()
    // socialLogin.disconnect()
    // logout()
}
const testFun = () => {
    biconomyService.postUserPost('bafybeig7gxwrpmn6zbm5iqtghc3j2o5xs45nalkp5btk2zjvbvdwlezoce')
    // socialLogin.disconnect()
    // logout()
}
onMounted(async () => {
  // await socialLogin.init(ethers.utils.hexValue(activeChainId))
  // if (address.value) await socialLogin.getUserInfo()
})
</script>

<template>
  <div class="header text-black dark:text-white">
    <div class="navbar">
      <img v-if="isDark" h-8 md:h-11 w-auto src="@/assets/images/logo_dark_alpha.svg" alt="logo" />
      <img v-else h-8 md:h-11 w-auto src="@/assets/images/logo_light_alpha.svg" alt="logo" />
      <div class="menu">
        <!-- <div @click="router.push('/newsfeed')">
          <svg width="28" height="28" viewBox="0 0 24 24"><path fill="#888888" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/></svg>
        </div> -->
        <div @click="router.push('/profile')"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="#888888" d="M15 14c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 15l-.6-.5C2.4 12.6 1 11.4 1 9.9c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8C8 7.7 9 8.6 9 9.9c0 1.5-1.4 2.7-3.4 4.6L5 15Z"/></svg></div>
        <!-- <div @click="router.push('/friends-requests')"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="#888888" d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9V20Z"/></svg></div>
        <div @click="router.push('/notifications')"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="#888888" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></svg></div> -->
        <div @click="router.push('/chat')"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="#888888" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8Z"/></svg></div>

        <!-- <DarkToggle /> -->
        <Button v-if="!address" id="connect-wallet-login-btn" name="connect-wallet-login-btn" color="blue" rounded="full" w-24
          @click="signin()">
          <template #content> Login </template>
        </Button>
        <Dropdown id="nav-dropdown" parent-class="w-fit text-black dark:text-white" name="nav-dropdown">
          <template #default>
            <Button v-if="address" id="connect-wallet-btn" name="connect-wallet-btn" color="blue" rounded="full" w-fit>
              <template #content>
                {{ensName ? ensName : `${address.substring(
                                        0,
                                        5
                                    )}...${address.substring(
                                        address.length - 3,
                                        address.length
                                    )}`}}
                <!-- {{
                                    `${address.substring(
                                        0,
                                        5
                                    )}...${address.substring(
                                        address.length - 3,
                                        address.length
                                    )}`
                                }} -->
              </template>
            </Button>
          </template>
          <template #content>
            <div p-2 m-auto w-fit>
              <div class="dropdown-option">My Profile</div>
              <div class="dropdown-option" @click="signout()">Logout</div>
            </div>
          </template>
        </Dropdown>
        <!-- <SocialLogin/> -->
      </div>
    </div>
  </div>
  <!-- <LoaderPreloader v-if="isLoader" />
    <Login v-if="isLoginOpen" /> -->
</template>

<style scoped lang="postcss">
.header {
  @apply w-screen top-0 z-50 fixed bg-gray-200 dark:bg-gray-900 flex justify-between items-center flex-col;
}

.navbar {
  @apply border-b border-[#E7E7E7] dark:border-gray-400 w-full flex justify-between items-center py-5 px-4 md:px-10 xl:px-12 2xl:px-14;
}
.dropdown-option {
  @apply px-6 py-3 text-sm text-black dark:text-white cursor-pointer;
}

.mob-nav {
  @apply font-bold bg-gray-200 dark:bg-gray-900 block space-y-3 text-center overflow-hidden transition-all;
}

.menu {
  @apply hidden md:flex justify-end items-center text-base font-bold gap-x-12;
}
</style>

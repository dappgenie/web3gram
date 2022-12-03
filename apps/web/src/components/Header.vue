<script lang="ts" setup>
import { isDark } from '@/composables/dark';
import { ethers } from 'ethers'
// import { activeChainId } from '~/utils/factories/chainConfig'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from './Button.vue';
import DarkToggle from './DarkToggle.vue';
import Dropdown from './Dropdown.vue';
// const socialLogin = new useSocialLogin()
// const { logout } = useUserStore()
// const { isLoader } = storeToRefs(useLoaderStore())
// const { address } = storeToRefs(useUserStore())
const isOpen = ref<boolean>(false)
const isLoginOpen = ref<boolean>(false)
const router = useRouter()
const signin = () => {
  // if (!address.value) 
  isLoginOpen.value = true
}
const signout = () => {
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
        <div btn i-mdi:home @click="router.push('/newsfeed')" />
        <div btn i-mdi:account-group @click="router.push('/friends-requests')" />
        <div btn i-mdi:bell @click="router.push('/notifications')" />
        <div btn i-mdi:chat @click="router.push('/chat')" />

        <DarkToggle />
        <Button id="connect-wallet-login-btn" name="connect-wallet-login-btn" color="blue" rounded="full" w-24
          @click="signin()">
          <template #content> Login </template>
        </Button>
        <Dropdown id="nav-dropdown" parent-class="w-fit text-black dark:text-white" name="nav-dropdown">
          <template #default>
            <Button id="connect-wallet-btn" name="connect-wallet-btn" color="blue" rounded="full" w-fit>
              <template #content>
                Address
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

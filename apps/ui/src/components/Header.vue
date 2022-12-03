<script lang="ts" setup>
import logo_light from '~/assets/images/logo_light_alpha.svg'
import logo_dark from '~/assets/images/logo_dark_alpha.svg'
import { ethers } from 'ethers';
import { activeChainId } from '~/utils/factories/chainConfig';
const socialLogin = new useSocialLogin()
const { logout } = useUserStore()
const { isLoader } = storeToRefs(useLoaderStore())
const { address } = storeToRefs(useUserStore())
const isOpen = ref<boolean>(false)
const isLoginOpen = ref<boolean>(false)
const signin = () => {
  if (!address.value)
    isLoginOpen.value = true
}
const signout = () => {
  socialLogin.disconnect()
  logout()
}
onMounted(async () => {
  await socialLogin.init(ethers.utils.hexValue(activeChainId))
  if (address.value)
    await socialLogin.getUserInfo();
})
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.navbar">
      <img v-if="isDark" h-8 md:h-11 w-auto :src="logo_dark" alt="logo">
      <img v-else h-8 md:h-11 w-auto :src="logo_light" alt="logo">
      <div flex md:hidden gap-6 justify-end items-center>
        <DarkToggle />
        <button btn text-xl text-color-primary active:text-2xl i-mdi:menu @click="isOpen = !isOpen" />
      </div>
      <div :class="$style.menu">
        <div  i-mdi:home/>
        <div i-mdi:account-group/>
        <div i-mdi:bell/>
        <div i-mdi:chat/>

        <DarkToggle />
        <Button
          v-if="!address" id="connect-wallet-login-btn" name="connect-wallet-login-btn" color="blue" rounded="full"
          w-24 @click="signin()"
        >
          <template #content>
            Login
          </template>
        </Button>
        <Dropdown v-else id="nav-dropdown" parent-class="w-fit" name="nav-dropdown">
          <template #default>
            <Button id="connect-wallet-btn" name="connect-wallet-btn" color="gradient" rounded="full" w-fit>
              <template #content>
                {{ `${address.substring(0, 5)}...${address.substring(address.length - 3, address.length)}` }}
              </template>
            </Button>
          </template>
          <template #content>
            <div p-2 m-auto w-fit>
              <div dropdown-item @click="signout()">
                Logout
              </div>
            </div>
          </template>
        </Dropdown>
        <!-- <SocialLogin/> -->
      </div>
    </div>
    <!-- <Transition name="mobile-nav"> -->
    <div :class="[$style['mob-nav'], isOpen ? 'py-6 h-auto' : 'py-0 h-0']">
      <div>About Us</div>
      <div>How it works</div>
      <Button id="connect-wallet-btn" name="connect-wallet-btn" color="gradient" rounded="full" w-24 @click="signin()">
        <template #content>
          Login
        </template>
      </Button>
    </div>
    <!-- </Transition> -->
  </div>
  <LoaderPreloader v-if="isLoader" />
  <Login v-if="isLoginOpen" />
</template>

<style module lang="css">
.header {
  @apply w-screen z-50 fixed background flex justify-between items-center flex-col;
}

.navbar {
  @apply border-b-1 border-[#E7E7E7] dark:border-primary w-full flex justify-between items-center py-5 px-4 md:px-10 xl:px-12 2xl:px-14;
}

.mob-nav {
  @apply font-bold background block space-y-3 text-center transition-all overflow-hidden transition-all;
}

.menu {
  @apply hidden md:flex justify-end items-center text-base font-bold gap-x-12;
}
</style>

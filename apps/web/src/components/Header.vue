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
    <div :class="$style.header">
        <div :class="$style.navbar">
            <img v-if="isDark" h-8 md:h-11 w-auto src="@/assets/images/logo_dark_alpha.svg" alt="logo" />
            <img v-else h-8 md:h-11 w-auto src="@/assets/images/logo_light_alpha.svg" alt="logo" />
            <div flex md:hidden gap-6 justify-end items-center>
                <DarkToggle />
                <button
                    btn
                    text-xl
                    text-color-primary
                    active:text-2xl
                    i-mdi:menu
                    @click="isOpen = !isOpen"
                />
            </div>
            <div :class="$style.menu">
                <div btn i-mdi:home @click="router.push('/newsfeed')" />
                <div
                    btn
                    i-mdi:account-group
                    @click="router.push('/friends-requests')"
                />
                <div btn i-mdi:bell @click="router.push('/notifications')" />
                <div btn i-mdi:chat @click="router.push('/chat')" />

                <DarkToggle />
                <Button
                v-if="!address"
                    id="connect-wallet-login-btn"
                    name="connect-wallet-login-btn"
                    color="blue"
                    rounded="full"
                    w-24
                    @click="signin()"
                >
                    <template #content> Login </template>
                </Button>
                <div v-if="address"> {{ensName ? ensName : address}}</div>
                <Button
                v-if="address"
                    id="connect-wallet-login-btn"
                    name="connect-wallet-login-btn"
                    color="blue"
                    rounded="full"
                    w-24
                    @click="signout()"
                >
                    <template #content> LogOut</template>
                </Button>

                <Button
                v-if="address"
                    id="connect-wallet-login-btn"
                    name="connect-wallet-login-btn"
                    color="blue"
                    rounded="full"
                    w-24
                    @click="testFun()"
                >
                    <template #content> Contract Call</template>
                </Button>
                <Dropdown
                    id="nav-dropdown"
                    parent-class="w-fit"
                    name="nav-dropdown"
                >
                    <template #default>
                        <Button
                            id="connect-wallet-btn"
                            name="connect-wallet-btn"
                            color="blue"
                            rounded="full"
                            w-fit
                        >
                            <template #content>
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
                            <div dropdown-item>My Profile</div>
                            <div dropdown-item @click="signout()">Logout</div>
                        </div>
                    </template>
                </Dropdown>
                <!-- <SocialLogin/> -->
            </div>
        </div>
        <!-- <Transition name="mobile-nav"> -->
        <div :class="[$style['mob-nav'], isOpen ? 'py-6 h-auto' : 'py-0 h-0']">
            <div btn i-mdi:home />
            <div btn i-mdi:account-group />
            <div btn i-mdi:bell />
            <div btn i-mdi:chat />
            <Button
                id="connect-wallet-btn"
                name="connect-wallet-btn"
                color="blue"
                rounded="full"
                w-24
                @click="signin()"
            >
                <template #content> Login </template>
            </Button>
        </div>
        <!-- </Transition> -->
    </div>
    <!-- <LoaderPreloader v-if="isLoader" />
    <Login v-if="isLoginOpen" /> -->
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

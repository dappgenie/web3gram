<!-- <script lang="ts" setup>
import { ethers } from 'ethers'
import logo from '~/assets/images/icon.svg'
import { activeChainId } from '~/utils/factories/chainConfig'
const { address } = storeToRefs(useUserStore())

const isOpen = ref(true)

const socialLogin = new useSocialLogin()
const email = ref('')
const handleEmailSubmit = (event: any) => {
    event.preventDefault()
    socialLogin.emailLogin(email.value)
}
onMounted(async () => {
    await socialLogin.init(ethers.utils.hexValue(activeChainId))
    if (address.value) await socialLogin.getUserInfo()
    await socialLoginSDK
})
</script>

<template>
    <ModalCustom @close="isOpen = false" :show="isOpen">
        <template #content>
            <div class="px-7">
                <div class="flex justify-start items-center">
                    <img class="w-10 h-10" :src="logo" alt="" />
                    <div ml-4>
                        <div class="text-color-secondary text-xl font-bold">
                            Sign in
                        </div>
                        <p class="text-sm text-color-primary">
                            Select one of the following to continue
                        </p>
                    </div>
                </div>

                <div class="py-6">
                    <div
                        class="font-black text-primary border-t border-color py-6"
                    >
                        <div>CONTINUE WITH</div>
                        <ul class="py-4 flex justify-start gap-x-6">
                            <li>
                                <button
                                    type="button"
                                    class="bg-gray-200 dark:bg-gray-900 p-1 rounded-full"
                                    @click="socialLogin.socialLogin('google')"
                                >
                                    <img
                                        w-10
                                        h-10
                                        src="https://images.web3auth.io/login-google.svg"
                                        height="auto"
                                        width="auto"
                                        alt="login-google"
                                    />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    class="bg-gray-200 dark:bg-gray-900 p-1 rounded-full"
                                    @click="socialLogin.socialLogin('facebook')"
                                >
                                    <img
                                        w-10
                                        h-10
                                        src="https://images.web3auth.io/login-facebook.svg"
                                        height="auto"
                                        width="auto"
                                        alt="login-facebook"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="border-t border-color py-6">
                        <FormTextInput
                            text-sm
                            v-model="email"
                            id="biconomy-email-input"
                            name="biconomy-email-input"
                            label="Email"
                            placeholder="Enter your email"
                        />
                        <Button
                            w-full
                            id="biconomy-email-input-btn"
                            name="biconomy-email-input-btn"
                            mt-4
                            color="base"
                            rounded="none"
                            @click="handleEmailSubmit"
                        >
                            <template #content> Continue with Email </template>
                        </Button>
                    </div>
                    <div class="border-t border-color py-6">
                        <div class="">
                            <div
                                text-primary
                                font-bold
                                class="w3a-group__title"
                            >
                                EXTERNAL WALLET
                            </div>
                            <Button
                                w-full
                                id="biconomy-email-input-btn"
                                name="biconomy-email-input-btn"
                                mt-4
                                color="base"
                                rounded="none"
                                @click="socialLogin.metamaskLogin()"
                                >>
                                <template #content>
                                    Connect using MetaMask
                                </template>
                            </Button>
                            <Button
                                w-full
                                id="biconomy-email-input-btn"
                                name="biconomy-email-input-btn"
                                mt-4
                                color="base"
                                rounded="none"
                                @click="socialLogin.walletConnectLogin()"
                            >
                                <template #content>
                                    Use Wallet Connect
                                </template>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ModalCustom>
</template>

<style scoped lang="postcss"></style> -->

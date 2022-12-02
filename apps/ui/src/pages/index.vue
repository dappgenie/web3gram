<script setup lang="ts">
const { address } = storeToRefs(useUserStore())
const name = $ref(address)
const isLoginOpen = ref<boolean>(false)
const signin = () => {
  if (!address.value)
    isLoginOpen.value = true
    console.log("🚀 ~ file: index.vue:8 ~ signin ~ isLoginOpen.value", isLoginOpen.value)
}

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <h1>SOCIAL LOGIN</h1>
    {{name}}
    <button btn @click="signin()">Social Login</button>
  </div>
  <Login @close="(isLoginOpen=false)" v-if="isLoginOpen" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
// import { Web3Storage } from 'web3.storage'
const { address } = storeToRefs(useUserStore())
const name = $ref(address)
const isLoginOpen = ref<boolean>(false)
// const web3storage = new Web3Storage({ token: import.meta.env.VITE_WEB3_STORAGE_API })
let postFile
const signin = () => {
  if (!address.value)
    isLoginOpen.value = true
  console.log('🚀 ~ file: index.vue:8 ~ signin ~ isLoginOpen.value', isLoginOpen.value)
}

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const upload = () => {
  console.log(postFile)
}
const onFileChange = (e) => {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return
  postFile = files[0]
}
</script>

<template>
  <div>
    <h1>SOCIAL LOGIN</h1>
    {{ name }}
    <button btn @click="signin()">
      Social Login
    </button>
  </div>
  <Login v-if="isLoginOpen" @close="(isLoginOpen = false)" />
  <input type="file" @change="onFileChange">
  <button btn @click="upload()">
    upload
  </button>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

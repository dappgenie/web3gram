<script lang="ts" setup>
import Button from '@/components/Button.vue';
import Image from '@/components/Card/Image.vue';
import Post from '@/components/Profile/Post.vue';
import Tab from '@/components/Profile/Tab.vue';
import { addNFT } from '@/composables/revise';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { applyPureReactInVue } from 'veaury'
import { Chat } from "@pushprotocol/uiweb";
const apikey = 'EC7ktlHlkI.7tXKVVG0fOVvCGM9BMst3GLGdn3g44fcGdsNOjhSELxYOxX2ZQza3AWFgFoR2lTL'
const { address, ensName } = storeToRefs(useUserStore())
const ReactChat = applyPureReactInVue(Chat)
const mint = async () => {
  const tokenData = {
    name: ensName ?? address,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fca%2Fimages%2F3d-gold-medal-with-star-and-ribbon-winner-award-icon-best-choice-badge-winner-award-badge-award-medal-icon%2F249182775&psig=AOvVaw1WiPi9XpHyHxG9-nIvlR3E&ust=1670204371943000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCQx6nq3vsCFQAAAAAdAAAAABAW',
    tokenId: address,
    description: "Web3gram Social Badge"
  }
  const properties = [{ stage: 'Beginner', color: 'Purple' }]
  const data = await addNFT(tokenData, properties)
  console.log("🚀 ~ file: Profile.vue:19 ~ mint ~ data", data)
}
</script>

<template>
  <div class="container m-auto">
    <div>
      <img class="cover-pic" src="@/assets/images/NFTs/App.png" alt="cover" />
      <div class="profile">
        <img class="profile-pic" src="@/assets/images/user.jpeg" alt="cover" />
        <div class="name">
          Fred Mark
        </div>
      </div>
      <div class="profile-header">
        <Button id="connect-wallet-login-btn" name="connect-wallet-login-btn" color="blue" rounded="full" w-24
          @click="mint()">
          <template #content> Mint Your Badge </template>
        </Button>
        <div class="profile-details">
          <div class="title-box">
            <span class="title">Posts</span>
            <span>60</span>
          </div>
          <div class="title-box">
            <span class="title">Followers</span>
            <span>100</span>
          </div>
          <div class="title-box">
            <span class="title">Following</span>
            <span>260</span>
          </div>
        </div>
      </div>
    </div>
    <Post />
    <ReactChat :account=address supportAddress="0x1BD3B9c3e37A1C6272085B5053A47c6eD29Fa423" :apiKey=apikey
      env="staging" />
    <div class="posts">
      <Tab />
      <div class="list">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.cover-pic {
  width: 100%;
  @apply w-full h-72 object-cover;
}

.title-box {
  @apply grid;

  .title {
    @apply text-sm font-bold;
  }
}

.profile {
  @apply m-auto bg-white dark:bg-black;
}

.profile-pic {
  @apply w-36 m-auto -mt-20 h-36 rounded-full object-cover shadow-lg border border-gray-400;
}

.name {
  @apply text-lg text-black dark:text-white font-black m-auto mt-2 text-center w-full;
}

.profile-header {
  @apply h-36 px-8 py-8 bg-white dark:bg-black text-gray-300 w-full flex justify-between items-center gap-x-12 -mt-28;
}

.profile-details {
  @apply text-gray-300 w-fit flex justify-end items-center gap-x-12;
}

.posts {
  @apply w-full;
}

.list {
  @apply flex flex-row flex-wrap justify-between;
}
</style>

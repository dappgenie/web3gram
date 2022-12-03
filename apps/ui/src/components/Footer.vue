<script lang="ts" setup>
import logo_light from '~/assets/images/logo_light.svg'
import logo_dark from '~/assets/images/logo_dark.svg'
</script>

<template>
  <div class="footer">
    <div class="footer-content">
      <div class="item w-full md:w-[30%] pr-0 md:pr-8">
        <img v-if="isDark" h-8 w-auto self-start mb-2 mx-auto md:mx-0 :src="logo_dark" alt="logo"/>
        <img v-else h-8 w-auto self-start mb-2 mx-auto md:mx-0 :src="logo_light" alt="logo"/>
        <p leading-5>Buk is building a blockchain solution to bring transparency and flexibility into the ecosystem. We're helping create a win-win solution for travelers, hotels, and everyone in between.</p>
      </div>
      <div class="item w-full md:w-[17%]">
        <div class="title">About Us</div>
        <a href="https://buk.technology/#what-is-buk" target="_blank">What is Buk</a>
        <a href="https://buk.technology/#team" target="_blank">Team</a>
        <a href="https://github.com/BUK-protocol/assets" target="_blank">Media-kit</a>
        <a href="https://www.buk.technology/blog/" target="_blank">Blog</a>
        <a href="https://t.me/buk_tech" target="_blank">Contact Us</a>
      </div>
      <div class="item w-full md:w-[17%]">
        <div class="title">Buk Products</div>
        <a href="https://buk.technology/for-hotels" target="_blank">For Hotels</a>
        <a href="https://buk.technology/traveller" target="_blank">For Travelers</a>
        <a href="https://buk.technology/early-access" target="_blank">For Trader & investor</a>
      </div>
      <div class="item w-full md:w-[17%]">
        <div class="title">Stay in Touch</div>
        <div flex flex-row gap-x-3 mx-auto md:mx-0>
          <a href="https://twitter.com/buk_tech" target="_blank" w-6 h-6 i-mdi:twitter-box/>
          <a href="https://www.linkedin.com/company/buktech/" target="_blank" w-6 h-6 i-mdi:linkedin/>
          <a href="https://github.com/BUK-protocol/assets" target="_blank" w-6 h-6 i-mdi:github-box/>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">Buk © 2022. All rights reserved.</div>


  <!-- <div
    text="xl gray4"
    m-5
    flex
    justify-center
    gap-3
  >
    <NuxtLink i-carbon-campsite to="/" />
    <a i-carbon-logo-github href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
    <DarkToggle />
  </div> -->
</template>

<style scoped lang="css">
.footer {
  @apply w-screen py-12 px-12;
  @apply bg-[#DEE1E4] dark:bg-[#151515];
}
.footer-content {
  @apply flex flex-col md:flex-row justify-around items-start;
}
.copyright {
  @apply w-full py-4 text-center text-xs text-primary bg-[#CFD3D7] dark:bg-[#181818];
}
.footer-content .item {
  @apply flex flex-col gap-y-2 text-center md:text-left my-5 md:my-0 text-xs text-primary;
}
.title {
  @apply text-[16px] mb-2 text-black dark:text-white font-bold ;
}
a {
  @apply cursor-pointer hover:underline;
}
</style>
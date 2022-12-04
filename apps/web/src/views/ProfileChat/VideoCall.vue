<script lang="ts" setup>
import { HuddleClientProvider,getHuddleClient } from '@huddle01/huddle01-client';
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
import { applyPureReactInVue } from 'veaury'
const huddleClient = getHuddleClient('d0a487d151bdc077f9692a56bd6d681e505698114badfbf49a38c51cfbf2a23f');
const ReactHuddleClient = applyPureReactInVue(HuddleClientProvider);
const iframeConfig: IframeConfig = {
  roomUrl: "http://localhost:3000/123",
  height: "600px",
  width: "80%",
  noBorder: false, // false by default
};
const ReactHuddleIframe = applyPureReactInVue(HuddleIframe,{})
</script>

<template>
  <div class="box">
    <ReactHuddleIframe config={iframeConfig} />
  </div>
</template>

<style scoped lang="css">
.box{
  @apply w-full;
}
</style>

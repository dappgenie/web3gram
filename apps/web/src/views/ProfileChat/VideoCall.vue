<script lang="ts" setup>
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
import { applyPureReactInVue } from 'veaury'
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
    <ReactHuddleIframe :config={iframeConfig} />
  </div>
</template>

<style scoped lang="css">
.box{
  @apply w-full;
}
</style>

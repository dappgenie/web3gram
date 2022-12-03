<template>
  <!-- loader Start -->
  <div id="loading" :style="style">
    <div id="loading-center">
    </div>
  </div>
  <!-- loader END -->
</template>
<script>
import lightLogo from '../../../assets/images/loader.png'
import darkLogo from '../../../assets/images/logo-white.png'
import { socialvue } from '@/config/pluginInit'
export default {
  name: 'Loader',
  props: {
    dark: { type: Boolean, default: false }
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      logo: lightLogo,
      darkLogo: darkLogo,
      style: `background: #fff url(${darkLogo}) no-repeat scroll center center;background-size:10%;`
    }
  },
  methods: {
    init () {
      socialvue.loaderInit()
    }
  }
}
</script>

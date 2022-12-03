<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-sm-12 text-center">
        <div class="iq-error position-relative mt-5">
          <img :src="image404" class="img-fluid iq-error-img" alt="404">
          <h2 class="mb-0">Oops! This Page is Not Found.</h2>
          <p>The requested page dose not exist.</p>
          <a href="#" @click="$router.go(-1)" class="btn btn-primary mt-3"><i class="ri-home-4-line md-18 me-1"></i>Back to Home</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { socialvue } from '../../config/pluginInit'

export default {
  name: 'Error404',
  mounted () {
    // socialvue.index()
    // const body = document.querySelector('body')
    // body.classList.add('iq-bg-primary')
  },
  data () {
    return {
      image404: require('../../assets/images/error/400.png')
    }
  }
}
</script>

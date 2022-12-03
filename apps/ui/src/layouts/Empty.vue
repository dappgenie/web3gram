<template>
  <Loader/>
   <div class="wrapper">
     <router-view></router-view>
   </div>
</template>
<script>
import Loader from '../components/custom/loader/Loader'
export default {
  name: 'Default',
  components: {
    Loader
  }
}
</script>

<template>
 <div class="header-for-bg">
  <div class="background-header position-relative">
    <img :src="img" class="img-fluid w-100" alt="header-bg">
    <div class="title-on-header">
      <div class="data-block">
        <h2>{{title}}</h2>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  mounted () {
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/socialv.scss";
  @import "./assets/scss/customizer.scss";
  @import url("./plugins/Leaflet/leaflet.css");
  @import url("./plugins/fullcalendar/core/main.css");
  @import url("./plugins/fullcalendar/daygrid/main.css");
  @import url("./plugins/fullcalendar/timegrid/main.css");
  @import url("./plugins/fullcalendar/list/main.css");
</style>

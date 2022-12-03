<template>
<button type="button" :data-bs-target="'#'+item.carouselTargetID" :data-bs-slide-to="item.indicatorPosition" :class="item.active?'active':''" :aria-current="item.active?'true':'false'" :aria-label="item.indicatorLabel"/>
</template>
<script>
export default {
  name: 'carouselIndicators',
  props: {
    item: { type: Array }
  }
}
</script>

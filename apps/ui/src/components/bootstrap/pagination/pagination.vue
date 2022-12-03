<template>
<nav :aria-label="ariaLabel">
    <ul :class="`pagination ${mainClass}`">
        <slot/>
    </ul>
</nav>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    ariaLabel: {
      type: String
    },
    mainClass: {
      type: String
    }
  }
}
</script>

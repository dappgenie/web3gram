<template>
<li :class="`page-item ${itemClass}`">
    <a :class="`page-link ${itemlinkClass}`" :href="href" :aria-label="label">
        {{itemText}}
        <slot/>
    </a>
</li>
</template>
<script>
export default {
  name: 'pagination-content',
  props: {
    itemClass: {
      type: String
    },
    itemlinkClass: {
      type: String
    },
    href: {
      type: String
    },
    label: {
      type: String
    },
    itemText: {
      type: String
    }
  }
}
</script>

<template>
    <component :is="dropdownMenuTag" :class="`dropdown-menu ${menuClass}`"  :aria-labelledby="id" >
        {{dropdownText}}
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'dropdown-items',
  props: {
    dropdownMenuTag: { type: String, default: 'div' },
    id: { type: String },
    menuClass: { type: String },
    dropdownText: { type: String }
  }
}
</script>

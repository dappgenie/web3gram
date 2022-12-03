<template>
  <component :is="tag" ref="bg-collapse" :class="`btn btn-${className}`" :href="'#'+collapseTarget" :type="type" :role="role" :aria-expanded="ariaExpanded" :aria-controls="ariaControls">
    {{innerText}}
    <slot/>
  </component>
</template>
<script>
// import { Collapse } from 'bootstrap'
export default {
  name: 'collapse',
  props: {
    tag: { type: String, default: 'a' },
    description: { type: String, default: '' },
    innerText: { type: String, default: '' },
    className: { type: String, default: '' },
    collapseTarget: { type: String, default: 'example-collapse' },
    ariaControls: { type: String, default: '' },
    ariaExpanded: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    role: { type: String, default: 'button' },
    toggle: { type: Boolean, default: false, required: false }
  }
}
</script>

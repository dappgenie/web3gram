<template>
    <component :is="tag" :class="`collapse ${className}`" :id="id">
      {{description}}
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'collapse-content',
  props: {
    tag: { type: String, default: 'div' },
    className: { type: String, default: '' },
    id: { type: String, default: 'example-collapse' },
    description: { type: String, default: '' }
  }
}
</script>

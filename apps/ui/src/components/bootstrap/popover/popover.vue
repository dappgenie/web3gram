<template>
  <component
  :is="tag"
  :type="type"
  :role="role"
  data-bs-container="body"
  :tabindex="tabindex"
  :class="`btn ${className}`"
  data-bs-toggle="popover"
  :data-bs-placement="popoverPlacement"
  :title="popoverTitle"
  :data-bs-content="popoverContent"
  ref="popover"
  :data-trigger="popoverTrigger">
      {{popoverText}}
      <slot/>
  </component>
</template>
<script>
import { Popover } from 'bootstrap'
export default {
  name: 'popover',
  props: {
    tag: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
    role: { type: String, default: '' },
    tabindex: { type: Number, default: 0 },
    className: { type: String },
    popoverPlacement: { type: String },
    popoverTitle: { type: String },
    popoverContent: { type: String },
    popoverTrigger: { type: String, default: '' },
    popoverText: { type: String }
  },
  mounted () {
    this.elem = new Popover(this.$refs.popover)
    this.initShow()
    this.initShown()
    this.initHide()
    this.initHidden()
    this.initInserted()
  },
  methods: {
    initShow () {
      this.$refs.popover.addEventListener('show.bs.popover', () => {
        this.$emit('show')
      })
    },
    initShown () {
      this.$refs.popover.addEventListener('shown.bs.popover', () => {
        this.$emit('shown')
      })
    },
    initHide () {
      this.$refs.popover.addEventListener('hide.bs.popover', () => {
        this.$emit('hide')
      })
    },
    initHidden () {
      this.$refs.popover.addEventListener('hidden.bs.popover', () => {
        this.$emit('hidden')
      })
    },
    initInserted () {
      this.$refs.popover.addEventListener('inserted.bs.popover', () => {
        this.$emit('inserted')
      })
    },
    destroyShow () {
      this.$refs.popover.removeListener('show.bs.popover')
    },
    destroyShown () {
      this.$refs.popover.removeListener('shown.bs.popover')
    },
    destroyHide () {
      this.$refs.popover.removeListener('hide.bs.popover')
    },
    destroyHidden () {
      this.$refs.popover.removeListener('hidden.bs.popover')
    },
    destroyInserted () {
      this.$refs.popover.removeListener('inserted.bs.popover')
    }
  }
}
</script>

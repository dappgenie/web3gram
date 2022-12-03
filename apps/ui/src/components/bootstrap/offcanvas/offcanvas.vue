<template>
<div :class="`offcanvas offcanvas-${mainClass}`"  :id="id" :aria-labelledby="ariaLabelled" ref="offcanvas">
    <slot/>
</div>
</template>
<script>
import { Offcanvas } from 'bootstrap'
export default {
  name: 'offcanvas',
  props: {
    mainClass: { type: String, default: 'bottom' },
    backdrop: { type: String, default: 'false' },
    // tabindex: { type: Number },
    id: { type: String },
    ariaLabelled: { type: String }
  },
  mounted () {
    this.elem = new Offcanvas(this.$refs.offcanvas)
    this.initShow()
    this.initShown()
    this.initHide()
    this.initHidden()
  },
  methods: {
    initShow () {
      this.$refs.offcanvas.addEventListener('show.bs.offcanvas', () => {
        this.$emit('show')
      })
    },
    initShown () {
      this.$refs.offcanvas.addEventListener('shown.bs.offcanvas', () => {
        this.$emit('shown')
      })
    },
    initHide () {
      this.$refs.offcanvas.addEventListener('hide.bs.offcanvas', () => {
        this.$emit('hide')
      })
    },
    initHidden () {
      this.$refs.offcanvas.addEventListener('hidden.bs.offcanvas', () => {
        this.$emit('hidden')
      })
    },
    destroyShow () {
      this.$refs.offcanvas.removeListener('show.bs.offcanvas')
    },
    destroyShown () {
      this.$refs.offcanvas.removeListener('shown.bs.offcanvas')
    },
    destroyHide () {
      this.$refs.offcanvas.removeListener('hide.bs.offcanvas')
    },
    destroyHidden () {
      this.$refs.offcanvas.removeListener('hidden.bs.offcanvas')
    }
  }
}
</script>

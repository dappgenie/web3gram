<template>
<div :class="`modal ${mainClass}`" :tabindex="tabindex" :id="id" :aria-labelledby="ariaLabelled" :aria-hidden="false" :data-bs-backdrop="backdrop" :data-bs-keyboard="keyboard" ref="modal">
    <div :class="`modal-dialog ${dialogClass}`">
        <div :class="`modal-content ${contentClass}`">
        <slot/>
        </div>
    </div>
</div>
</template>
<script>
import { Modal } from 'bootstrap'
export default {
  name: 'modal',
  props: {
    mainClass: { type: String, default: 'fade' },
    dialogClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    tabindex: { type: String },
    id: { type: String },
    ariaLabelled: { type: String },
    // ariaHidden: { type: Boolean, default: false },
    backdrop: { type: String, default: 'static' },
    keyboard: { type: Boolean, default: false }
  },
  mounted () {
    this.elem = new Modal(this.$refs.modal)
    this.initShow()
    this.initShown()
    this.initHide()
    this.initHidden()
    this.initHidePrevented()
  },
  methods: {
    initShow () {
      this.$refs.modal.addEventListener('show.bs.modal', () => {
        this.$emit('show')
      })
    },
    initShown () {
      this.$refs.modal.addEventListener('shown.bs.modal', () => {
        this.$emit('shown')
      })
    },
    initHide () {
      this.$refs.modal.addEventListener('hide.bs.modal', () => {
        this.$emit('hide')
      })
    },
    initHidden () {
      this.$refs.modal.addEventListener('hidden.bs.modal', () => {
        this.$emit('hidden')
      })
    },
    initHidePrevented () {
      this.$refs.modal.addEventListener('hidePrevented.bs.modal', () => {
        this.$emit('hidePrevented')
      })
    },
    destroyShow () {
      this.$refs.modal.removeListener('show.bs.modal')
    },
    destroyShown () {
      this.$refs.modal.removeListener('shown.bs.modal')
    },
    destroyHide () {
      this.$refs.modal.removeListener('hide.bs.modal')
    },
    destroyHidden () {
      this.$refs.modal.removeListener('hidden.bs.modal')
    },
    destroyHidePrevented () {
      this.$refs.modal.removeListener('hidePrevented.bs.modal')
    }
  }
}
</script>

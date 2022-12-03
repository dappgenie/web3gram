<template>
  <div class="d-flex align-items-center">
    <div class="avatar chat-profile me-3" :class="mediaClass"  @click="toggleContent">
      <slot name="media" />
    </div>
    <div class="chat-caption">
      <slot name="body" />
    </div>
    <button type="submit" class="close-btn-res p-3" v-if="closeButton"><i class="ri-close-fill" /></button>
  </div>
</template>
<script>
export default {
  name: 'ToggleButton',
  props: {
    toggleShow: { type: String, default: '' },
    mediaClass: { type: String, default: '' },
    miniToggle: { type: Boolean, default: true },
    closeButton: { type: Boolean, default: true }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleContent () {
      const selector = document.querySelector(this.toggleShow)
      selector.classList.add('show')
    },
    checkToggle (type) {
      if (this.link === type) {
        switch (type) {
          case 'media':
          case 'body':
            this.active = false
            break
        }
      } else {
        this.active = true
      }
    }
  }
}
</script>

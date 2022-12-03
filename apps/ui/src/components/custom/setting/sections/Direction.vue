<template>
<div>
    <h5 class="mb-3">Direction</h5>
    <radio-input btn-name="theme_scheme_direction" :img-component="true" label-title="LTR" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" id="theme-scheme-direction-ltr" :default-checked="themeSchemeDirection" value="ltr" @onChange="updateRadio">
      LTR
      <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.5" cy="13.5002" r="6.5" fill="#50B5FF"></circle>
          <rect x="21" y="7.70026" width="34" height="5" rx="2" fill="#80868B"></rect>
          <rect opacity="0.5" x="21" y="16.1003" width="25.6281" height="3.2" rx="1.6" fill="#80868B"></rect>
          <rect x="0.375" y="0.375244" width="59.25" height="26.25" rx="4.125" stroke="#DADCE0" stroke-width="0.75"></rect>
      </svg>
    </radio-input>
    <radio-input btn-name="theme_scheme_direction" :img-component="true" label-title="RTL" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" id="theme-scheme-direction-rtl" :default-checked="themeSchemeDirection" value="rtl" @onChange="updateRadio">
      RTL
      <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="6.5" transform="matrix(-1 0 0 1 48.5 13.5002)" fill="#50B5FF"></circle>
          <rect width="34" height="5" rx="2" transform="matrix(-1 0 0 1 39 7.70026)" fill="#80868B"></rect>
          <rect opacity="0.5" width="25.6281" height="3.2" rx="1.6" transform="matrix(-1 0 0 1 39 16.1003)" fill="#80868B"></rect>
          <rect x="-0.375" y="0.375" width="59.25" height="26.25" rx="4.125" transform="matrix(-1 0 0 1 59.25 0.000244141)" stroke="#50B5FF" stroke-width="0.75"></rect>
      </svg>
    </radio-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  components: {
    RadioInput
  },
  setup () {
    const store = useStore()
    const themeScheme = computed(() => store.getters['setting/theme_scheme'])
    const themeSchemeDirection = computed(() => store.getters['setting/sheme_scheme_direction'])

    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      themeScheme,
      themeSchemeDirection,
      updateRadio
    }
  }
}
</script>

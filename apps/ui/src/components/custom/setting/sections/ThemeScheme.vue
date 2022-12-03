<template>
<h5 class="mb-3">Theme</h5>
<radio-input btn-name="theme_scheme" id="color-mode-auto" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" :default-checked="themeScheme" value="auto" @onChange="updateRadio">
  <span>Light Theme</span>
  <div class="text-primary">
    <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" fill="white"></rect>
        <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
        <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
        <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" stroke="#DADCE0" stroke-width="0.75"></rect>
    </svg>
  </div>
</radio-input>
<radio-input btn-name="theme_scheme" id="color-mode-dark" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" :default-checked="themeScheme" value="dark" @onChange="updateRadio">
  <span>Dark Theme</span>
  <div class="text-primary">
    <svg width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" fill="#1E2745"></rect>
        <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
        <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
        <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
        <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" stroke="currentColor" stroke-width="0.75"></rect>
    </svg>
  </div>
</radio-input>
<radio-input btn-name="theme_scheme" id="color-mode-light" class-name="form-check mb-3 w-100" input-class="form-check-input custum-redio-btn" label-class="form-check-label h6 d-flex align-items-center justify-content-between" :default-checked="themeScheme" value="light" @onChange="updateRadio">
  <span>Device Default</span>
  <div class="Device Default">
    <svg class="rounded" width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" fill="#1E2745"></rect>
      <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
      <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
      <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
      <g clip-path="url(#clip0_507_92)">
      <rect width="30" height="27" fill="white"></rect>
      <circle cx="9.75" cy="9.75" r="3.75" fill="#80868B"></circle>
      <rect x="16.5" y="8.25" width="37.5" height="3" rx="1.5" fill="#DADCE0"></rect>
      <rect x="6" y="18" width="48" height="3" rx="1.5" fill="currentColor"></rect>
      </g>
      <rect x="0.375" y="0.375" width="59.25" height="26.25" rx="4.125" stroke="#DADCE0" stroke-width="0.75"></rect>
      <defs>
      <clipPath id="clip0_507_92">
      <rect width="30" height="27" fill="white"></rect>
      </clipPath>
      </defs>
    </svg>
  </div>
</radio-input>
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

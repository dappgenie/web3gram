<template>
  <div class="mb-4">
    <h5 class="mt-4 mb-3">Active Menu Style</h5>
    <div class="d-grid gap-3 grid-cols-2">
      <radio-input btn-name="sidebar_menu_style" :img-component="true" class-name="text-center" input-class="btn-check" label-class="btn btn-border btn-setting-panel d-block overflow-hidden" label-title="Rounded One Side" id="navs-rounded" :default-checked="sidebarMenuStyle" value="navs-rounded" @onChange="updateRadio">
        Rounded One
      </radio-input>
      <radio-input btn-name="sidebar_menu_style" :img-component="true" labelClass="d-block overflow-hidden" label-title="Rounded All" class-name="text-center" input-class="btn-check" label-class="btn btn-border btn-setting-panel d-block overflow-hidden" id="navs-rounded-all" :default-checked="sidebarMenuStyle" value="navs-rounded-all" @onChange="updateRadio">
        Rounded All
      </radio-input>
      <radio-input btn-name="sidebar_menu_style" :img-component="true" labelClass="d-block overflow-hidden" label-title="Pill One Side" class-name="text-center" input-class="btn-check" label-class="btn btn-border btn-setting-panel d-block overflow-hidden" id="navs-pill" :default-checked="sidebarMenuStyle" value="navs-pill" @onChange="updateRadio">
        Pill One Side
      </radio-input>
      <radio-input btn-name="sidebar_menu_style" :img-component="true" labelClass="d-block overflow-hidden" label-title="Pill All" class-name="text-center" input-class="btn-check" label-class="btn btn-border btn-setting-panel d-block overflow-hidden" id="navs-pill-all" :default-checked="sidebarMenuStyle" value="navs-pill-all" @onChange="updateRadio">
         Pill All
      </radio-input>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  name: 'MenuActiveStyle',
  components: {
    RadioInput
  },
  setup () {
    const store = useStore()
    const sidebarMenuStyle = computed(() => store.getters['setting/sidebar_menu_style'])
    const updateRadio = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      sidebarMenuStyle,
      updateRadio
    }
  }
}
</script>

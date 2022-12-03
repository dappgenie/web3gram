<template>
  <div>
    <h5 class="mt-4 mb-3">Menu Style</h5>
    <div class="d-grid gap-3 grid-cols-3 mb-4">
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Mini" id="sidebar-mini" :default-checked="menuStyle.value" value="sidebar-mini" @onChange="updateCheckbox">
        Mini
      </checkbox-input>
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Hover" id="sidebar-hover" :default-checked="menuStyle.value" value="sidebar-hover" @onChange="updateCheckbox">
        Hover
      </checkbox-input>
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Hover" id="sidebar-soft" :default-checked="menuStyle.value" value="sidebar-soft" @onChange="updateCheckbox">
        Soft
      </checkbox-input>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CheckboxInput from '@/components/custom/elements/CheckboxInput'
import _ from 'lodash'
export default {
  components: {
    CheckboxInput
  },
  setup () {
    const store = useStore()
    const menuStyle = computed(() => _.cloneDeep(store.state.setting.setting.sidebar_type))

    const updateCheckbox = (value, name) => {
      store.dispatch(`setting/${name}`, value)
    }
    return {
      menuStyle,
      updateCheckbox
    }
  }
}
</script>

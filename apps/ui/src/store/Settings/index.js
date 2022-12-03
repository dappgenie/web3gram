import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  layoutMode: {
    dark: false,
    rtl: false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

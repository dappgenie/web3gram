import { createApp } from 'vue'
import Vuex from 'vuex'
import setting from './setting/index'
createApp(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    setting
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})

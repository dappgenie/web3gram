import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import cloneDeep from 'lodash.clonedeep'

export default function resetStore({ store }: any) {
    const initialState = cloneDeep(store.$state)
    store.$reset = () => store.$patch(cloneDeep(initialState))
}

const pinia = createPinia()
pinia.use(resetStore)
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

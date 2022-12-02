import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import cloneDeep from 'lodash.clonedeep'
import { type UserModule } from '~/types'

export default function resetStore({ store }) {
  const initialState = cloneDeep(store.$state)
  store.$reset = () => store.$patch(cloneDeep(initialState))
}
// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = async ({ isClient, initialState, app, router }) => {
  const pinia = createPinia()
  pinia.use(resetStore)
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}
  else
    initialState.pinia = pinia.state.value

  // router.beforeResolve((to, from, next) => {
  //   const { loggedUser } = $(storeToRefs(useAuthStore()))
  //   const isAuthRoute = !!to.meta.auth
  //   const isAuthenticated = !!loggedUser?.email

  //   if (isAuthRoute && !isAuthenticated)
  //     next({ path: '/signin', force: true })
  //   else next()
  // })
}

import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueSweetalert2 from 'vue-sweetalert2'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'sweetalert2/dist/sweetalert2.min.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
    ctx. app.use(VueSweetalert2)
    ctx.app.use(BootstrapVue3)
  },
)

import VueProgressiveImage from 'vue-progressive-image'
import { type UserModule } from '~/types'
export const install: UserModule = ({ app }) => {
  app.use(VueProgressiveImage)
  // do something
}

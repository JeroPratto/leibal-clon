import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiHeartFill, BiHeart, BiDashCircleFill } from 'oh-vue-icons/icons'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

addIcons(BiHeartFill, BiHeart, BiDashCircleFill)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
app.use(pinia)
app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')

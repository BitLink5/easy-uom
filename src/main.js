import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import { createPinia } from 'pinia'
import { initNaiveUIDiscreteApi } from '@/utils/init.js'

async function init() {
  const app = createApp(App)

  const pinia = createPinia()
  app.use(pinia)

  initNaiveUIDiscreteApi()
  app.use(router)

  app.mount('#app')
}

init().then()

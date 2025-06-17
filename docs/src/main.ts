import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import utils from '@/shared/lib/utils'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(utils)

app.mount('#app')

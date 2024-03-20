import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import Root from './Root.vue'
import router from './router'

const app = createApp(Root)

app.use(createPinia())
app.use(router)

app.mount('#app')

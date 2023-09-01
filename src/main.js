import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './permission'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')

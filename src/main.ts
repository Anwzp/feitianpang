import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuex from './store/index'
import Common from '@/common/util'

const app = createApp(App)
app.config.globalProperties.$Common = Common

app.use(router).use(vuex).mount('#app')

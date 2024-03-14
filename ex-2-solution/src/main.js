import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$bugsEnabled = import.meta.env.VITE_BUGS_ENABLED === 'true'
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import toast from './components/Toast'
import './index.css'

window.toast = toast
const app = createApp(App)
app.mount('#app')

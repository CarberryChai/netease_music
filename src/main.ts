import toast from '@/components/Toast'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

window.toast = toast
createApp(App).use(router).mount('#app')

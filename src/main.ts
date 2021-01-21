import toast from '@/components/Toast'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

window.toast = toast
createApp(App).use(router).use(ElementPlus).mount('#app')

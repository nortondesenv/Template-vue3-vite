import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './app/App.vue'

createApp(App).use(createHead()).mount('#app')

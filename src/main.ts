import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './app/Index.vue'
import Router from './app/router'

const Head = createHead()

createApp(App).use(Head).use(Router).mount('#app')

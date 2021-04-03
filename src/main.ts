import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './app/App.vue'
import Router from './app/router'
import Store from './app/store'

const Head = createHead()

createApp(App).use(Head).use(Router).use(Store).mount('#app')

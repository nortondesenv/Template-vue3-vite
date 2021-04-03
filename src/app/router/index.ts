import { createRouter, createWebHistory } from 'vue-router'
import RouteConfig from './RouteConfig'

const routes: Array<RouteConfig> = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/pages/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV),
  routes,
})

export default router

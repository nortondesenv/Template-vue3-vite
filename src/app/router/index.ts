import { createRouter, createWebHistory } from 'vue-router'
import { RouteConfig } from './types'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../presentation/components/pages/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV),
  routes,
})

export default router

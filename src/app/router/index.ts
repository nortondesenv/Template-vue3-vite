import { createRouter, createWebHistory } from 'vue-router'
import { RoutesType } from './model'

const routes: RoutesType[] = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/pages/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

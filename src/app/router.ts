import { createRouter, createWebHistory } from 'vue-router'

interface RoutesType {
  path: string
  name?: string
  redirect?: string
  component: () => {}
  meta?: {
    index?: number
    keepAlive?: boolean
  }
  children?: RoutesType[]
}

const routes: RoutesType[] = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('./components/pages/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

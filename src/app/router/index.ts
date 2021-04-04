import { createRouter, createWebHistory } from 'vue-router'
import { RouteConfig } from './types'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'Login',
    component: () => import('../presentation/components/templates/Public.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () =>
          import('../presentation/components/pages/Login.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('../presentation/components/templates/Private.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV),
  routes,
})

export default router

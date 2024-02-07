import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { createAuthGuard } from '@/router/guards/auth.js'
import { createLoadingBarGuard } from '@/router/guards/loading-bar.js'
import { createPageTitleGuard } from '@/router/guards/title.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        name: '主页'
      },
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        name: '登录'
      },
      component: () => import('../views/LoginView.vue')
    }
  ]
})

createAuthGuard(router)
createLoadingBarGuard(router)
createPageTitleGuard(router)

export default router

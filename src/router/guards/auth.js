import { useAuthStore } from '@/stores/auth.js'

const PATH_WHITE_LIST = ['/login', '/404']

export function createAuthGuard(router) {
  router.beforeEach((to) => {
    const authStore = useAuthStore()
    if (authStore.token && to.path === '/login') {
      return '/'
    }

    if (PATH_WHITE_LIST.includes(to.path)) {
      return true
    }
    if (!authStore.token) {
      return '/login'
    }
  })
}

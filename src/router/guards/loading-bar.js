export function createLoadingBarGuard(router) {
  router.beforeEach(() => {
    window.$loadingBar.start()
  })

  router.afterEach(() => {
    window.$loadingBar.finish()
  })

  router.onError(() => {
    window.$loadingBar.error()
  })
}

// TODO 消除硬编码
const baseTitle = 'UOM 助学'

export function createPageTitleGuard(router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.name
    if (pageTitle) {
      document.title = `${pageTitle} - ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}

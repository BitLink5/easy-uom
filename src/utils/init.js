import { createDiscreteApi } from 'naive-ui'

export function initNaiveUIDiscreteApi() {
  const { message, dialog, notification, loadingBar } = createDiscreteApi([
    'message',
    'dialog',
    'notification',
    'loadingBar'
  ])
  window.$message = message
  window.$dialog = dialog
  window.$notification = notification
  window.$loadingBar = loadingBar
}

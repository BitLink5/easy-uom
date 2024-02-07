import { useAuthStore } from '@/stores/auth.js'
import axios from 'axios'

const baseURL = '/api'
const instance = axios.create({ baseURL })

instance.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers['Authorization'] = authStore.token
  }
  return config
})

instance.interceptors.response.use(
  (result) => {
    if (!Object.prototype.hasOwnProperty.call(result.data, 'code') || result.data.code === 0) {
      return result.data
    }
    window.$message.error(result.data.msg)
    window.$loadingBar.error()
    return Promise.reject(result.data)
  },
  (err) => {
    window.$dialog.error({
      title: '错误',
      content: err.message,
      positiveText: '好的'
    })
    window.$loadingBar.error()
    return Promise.reject(err)
  }
)

export default instance

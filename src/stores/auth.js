import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref()
    const lastSentSmsCodeTimestamp = ref()
    return {
      token,
      lastSentSmsCodeTimestamp
    }
  },
  {
    persist: true
  }
)

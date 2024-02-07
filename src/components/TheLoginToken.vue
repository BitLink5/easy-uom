<script setup>
import LoadButton from '@/components/LoadButton.vue'
import { alive } from '@/api/common.js'
import router from '@/router/index.js'
import { useAuthStore } from '@/stores/auth.js'

const formData = ref({
  token: ''
})
const formRef = ref()
const rules = {
  token: [
    {
      required: true,
      message: '请输入 Token',
      trigger: 'blur'
    }
  ]
}

const authStore = useAuthStore()

async function handleLogin() {
  await formRef.value.validate()
  authStore.token = formData.value.token
  await alive()
  await router.push('/')
}
</script>

<template>
  <n-form ref="formRef" :model="formData" :rules="rules" size="large">
    <n-form-item label="Token" path="token">
      <n-input v-model:value="formData.token" placeholder="Authorization 值" />
    </n-form-item>
    <n-flex>
      <LoadButton :handle-click="handleLogin" style="width: 100%" type="primary">登录</LoadButton>
    </n-flex>
  </n-form>
</template>

<style scoped></style>

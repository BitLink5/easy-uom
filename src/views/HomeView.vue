<script setup>
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router/index.js'
import VideoList from '@/components/VideoList.vue'
import LoadButton from '@/components/LoadButton.vue'
import { alive } from '@/api/common.js'

const authStore = useAuthStore()

function handleLogout() {
  authStore.token = null
  window.$message.success('登出成功')
  router.push('/login')
}

async function handleAlive() {
  await alive()
  window.$message.success('登录有效')
}
</script>

<template>
  <n-flex vertical>
    <n-card>
      <template #header>账号</template>
      <n-flex>
        <LoadButton :handle-click="handleAlive" type="info">验证登录状态</LoadButton>
        <n-button type="warning" @click="handleLogout">登出</n-button>
      </n-flex>
    </n-card>
    <n-card>
      <template #header>时长</template>
      <VideoList />
    </n-card>
  </n-flex>
</template>

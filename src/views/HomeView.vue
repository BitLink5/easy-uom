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
      <template #header>
        <n-h1 style="margin: 0"><b>重要信息</b></n-h1>
      </template>
      <p>我们保证下述内容真实、准确和完整，没有虚假记载、误导性陈述或重大遗漏</p>
      <p>我们<b>不收集、不保存</b>您的任何信息，不存在由<b>主观因素</b>导致的信息泄露的风险</p>
      <p>您的所有信息都在<b>本地处理</b>，关闭窗口或登出后自动清除</p>
      <p>
        该网站是静态网站，托管在
        <a href="https://render.com/" target="_blank">Render</a>，<b>没有</b>任何攻击、破解功能
      </p>
      <p>
        该网站通过 <a href="https://render.com/" target="_blank">Render</a> 提供的<b
          >重写 Rewrite 功能</b
        >代表您与 UOM 服务器通信
      </p>
      <p>
        该网站是<a href="https://github.com/BitLink5/easy-uom" target="_blank">开源项目</a
        >，仅供学习交流，<b>严禁用于商业用途</b>
      </p>
      <h2>该网站仅帮助您增加学习时长，<b>请确保你已经学习并掌握视频内容</b></h2>
      <n-flex>
        <LoadButton :handle-click="handleAlive" type="info">验证登录状态</LoadButton>
        <n-button type="warning" @click="handleLogout">登出</n-button>
      </n-flex>
    </n-card>
    <n-card>
      <template #header>教程</template>
      <p>点击下方学习按钮增加时长</p>
      <p>今日学习时长大于45分钟可在UOM 系统中直接进入考试</p>
    </n-card>
    <n-card>
      <template #header>学习</template>
      <VideoList />
    </n-card>
  </n-flex>
</template>

<style scoped>
p {
  font-size: 16px;
  margin: 8px 0;
}

b {
  font-weight: bolder;
  color: brown;
}
</style>

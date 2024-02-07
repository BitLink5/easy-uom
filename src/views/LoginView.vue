<script setup>
import TheLogin from '@/components/TheLogin.vue'
import TheLoginToken from '@/components/TheLoginToken.vue'
</script>

<template>
  <n-flex align="center" class="container" justify="center">
    <n-card>
      <n-h1>欢迎</n-h1>
      <n-h2>登录您的 UOM 帐户</n-h2>
      <n-h3>我们<span style="color: brown">不收集、不保存</span>您的任何信息</n-h3>
      <n-tabs animated default-value="login" size="large">
        <n-tab-pane name="login" tab="验证码登录">
          <TheLogin />
        </n-tab-pane>
        <n-tab-pane name="login-token" tab="Token 登录">
          <TheLoginToken />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-flex>
</template>

<style scoped>
.container {
  min-height: 80vh;
}

.n-card {
  max-width: 400px;
}

.n-h1,
.n-h2,
.n-h3 {
  margin: 6px 0;
}

.n-h3 {
  font-weight: bolder;
  margin-bottom: 10px;
}
</style>

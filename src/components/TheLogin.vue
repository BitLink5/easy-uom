<script setup>
import router from '@/router'
import { useAuthStore } from '@/stores/auth.js'
import { login, sendSmsCode } from '@/api/auth.js'
import SmsCode from '@/components/SmsCode.vue'
import { getCaptchaImage } from '@/api/captcha.js'
import LoadButton from '@/components/LoadButton.vue'

const formData = ref({
  phoneNumber: '',
  captchaUuid: '',
  captchaCode: '',
  smsCode: ''
})
const formRef = ref()
const rules = {
  phoneNumber: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('请输入手机号')
        }
        if (!/^1\d{10}$/.test(value)) {
          return new Error('请输入正确的手机号')
        }
        return true
      },
      trigger: 'blur'
    }
  ],
  captchaCode: [
    {
      required: true,
      message: '请输入图形验证码计算结果',
      trigger: 'blur'
    }
  ],
  smsCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}

const authStore = useAuthStore()
const captchaImageBase64 = ref()
handleGetCaptchaImage()

function handleGetCaptchaImage() {
  getCaptchaImage().then((data) => {
    formData.value.captchaUuid = data.uuid
    captchaImageBase64.value = data.img
  })
}

async function handleLogin() {
  await formRef.value.validate()
  const data = await login(formData.value)
  authStore.token = data.token
  await router.push('/')
}
</script>

<template>
  <n-form ref="formRef" :model="formData" :rules="rules" size="large">
    <n-form-item label="手机号" path="phoneNumber">
      <n-input v-model:value="formData.phoneNumber" placeholder="UOM 手机号" />
    </n-form-item>
    <n-form-item label="图形验证码" path="captchaCode">
      <n-input v-model:value="formData.captchaCode" placeholder="图形验证码计算结果">
        <template #suffix>
          <img
            v-if="captchaImageBase64 !== undefined"
            :src="'data:image/jpeg;base64,' + captchaImageBase64"
            alt="图形验证码"
            @click="handleGetCaptchaImage"
          />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item label="短信验证码" path="smsCode">
      <SmsCode
        v-model:value="formData.smsCode"
        :interval="300"
        :send-function="() => sendSmsCode(formData)"
      />
    </n-form-item>
    <n-flex>
      <LoadButton :handle-click="handleLogin" style="width: 100%" type="primary">登录</LoadButton>
    </n-flex>
  </n-form>
</template>

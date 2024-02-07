import request from '@/utils/request.js'

export async function getCaptchaImage() {
  return await request.get('/captcha/anon/captchaImage')
}

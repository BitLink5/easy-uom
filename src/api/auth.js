import request from '@/utils/request.js'

export async function login(formData) {
  const data = {
    username: '',
    telephone: window.btoa(window.btoa(formData.phoneNumber)),
    dcode: formData.smsCode,
    tcode: formData.captchaCode,
    uuid: formData.captchaUuid,
    tenant: '__default_tenant__',
    encrypted: true,
    encryptionMethod: 'd_base64',
    url: '/home/anon/login',
    encryptionKey: '',
    urlAuthKey: 'JTOKENID',
    extInfo: {
      loginPath: ''
    }
  }
  return await request.post('/home/anon/login', data)
}

export async function sendSmsCode(formData) {
  const data = {
    mobileNum: formData.phoneNumber,
    uuid: formData.captchaUuid,
    icode: formData.captchaCode
  }
  return await request.post('/home/anon/sendSmsCode', data)
}

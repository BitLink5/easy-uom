import request from '@/utils/request.js'

export async function alive() {
  const data = { noUpSession: true }
  return await request.get('/nvwa-nros/v1/message/unread-count', data)
}

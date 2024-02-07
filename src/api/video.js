import request from '@/utils/request.js'

export async function listVideo() {
  const data = {
    pagination: true,
    limit: 8,
    offset: 0
  }
  return await request.post('/uom-uavdriver/trained/video/list', data)
}

export async function connect(row) {
  const part = row.duration.split(':')
  let durationSeconds = parseInt(part[0]) * 60 + parseInt(part[1])
  const data = {
    trainedVideoId: row.id,
    videoStartLocation: '00:00',
    videoEndLocation: row.duration,
    durationSecond: durationSeconds
  }
  return await request.post('/uom-uavdriver/trained/video/connect', data)
}

export async function getDuration() {
  return await request.get('uom-uavdriver/trained/video/viewingDuration')
}

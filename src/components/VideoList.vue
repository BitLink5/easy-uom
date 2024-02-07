<script setup>
import { connect, getDuration, listVideo } from '@/api/video.js'
import LoadButton from '@/components/LoadButton.vue'

const videoList = ref([])
const duration = ref()

handleListVideo()
handleGetDuration()

async function handleListVideo() {
  const { rows } = await listVideo()
  videoList.value = rows
}

async function handleGetDuration() {
  const data = await getDuration()
  duration.value = data.data
}

const time = computed(() => {
  if (duration.value === undefined) {
    return '等待获取'
  }
  const seconds = parseInt(duration.value)
  return `${Math.floor(seconds / 60)}分${seconds % 60}秒`
})
</script>

<template>
  <n-flex vertical>
    <n-statistic :value="time" label="学习时间" />
    <n-flex>
      <LoadButton :handle-click="handleGetDuration" type="info">刷新学习时间</LoadButton>
      <LoadButton :handle-click="handleListVideo" type="info">刷新视频列表</LoadButton>
    </n-flex>
    <n-list>
      <n-list-item v-for="row in videoList" :key="row.id">
        <n-flex align="center">
          <LoadButton :handle-click="() => connect(row)" type="primary">一键学习</LoadButton>
          <p style="font-size: 16px">{{ row.title }}</p>
        </n-flex>
      </n-list-item>
    </n-list>
  </n-flex>
</template>

<style scoped></style>

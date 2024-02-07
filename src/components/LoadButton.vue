<script setup>
const props = defineProps({
  handleClick: Function
})

const loading = ref(false)

async function handleClickWithLoading(e) {
  const timeout = setTimeout(() => (loading.value = true), 100)
  try {
    await props.handleClick(e)
  } finally {
    clearTimeout(timeout)
    loading.value = false
  }
}
</script>

<template>
  <n-button :loading @click="handleClickWithLoading">
    <slot />
  </n-button>
</template>

<style scoped></style>

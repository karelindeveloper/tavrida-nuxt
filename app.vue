<template>
  <NuxtLayout>
    <LayoutPreloader v-if="loading" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

watch(loading, (newValue) => {
  useHead({
    htmlAttrs: {
      class: newValue ? '' : 'overflow-visible'
    }
  })
})
</script>

<style>
html {
  overflow: hidden
}
</style>

<template>
  <NuxtLayout>
    <LayoutPreloader v-if="loading" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  loading.value = false
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

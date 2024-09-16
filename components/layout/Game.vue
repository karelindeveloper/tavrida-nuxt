<template>
  <div class="webgl-container">
    <iframe :src="gameUrl" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script setup>
const gameUrl = '/game/index.html'
</script>

<style scoped>
.webgl-container {
  position: relative;
  width: 100%;
  height: 100vh;
  /* Занимает всю высоту экрана */
  overflow: hidden;
}
</style>
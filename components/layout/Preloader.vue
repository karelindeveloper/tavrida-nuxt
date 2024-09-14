<template>
	<div class="preloader">
		<NuxtImg class='loader' src="/logo.svg" width="200px" height="200px" alt="Логотип" />
		<div class="text">Загрузка...</div>
	</div>
</template>

<script setup>
</script>

<style scoped>
@keyframes rotateSvg {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	z-index: 9999;
	background: #f856f9;
	background: linear-gradient(207deg, rgba(248, 86, 249, 1) 0%, #fc0c53 100%);
	background-repeat: no-repeat;
	background-attachment: fixed;
}

.text {
	font-size: 18px;
	text-transform: uppercase;
	font-family: 'DrukWideCyr';
}

.loader {
	animation: rotateSvg 10s linear infinite;
	width: 20vw;
}
</style>
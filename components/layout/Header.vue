<template>
	<header class='header'>
		<img class='logo' src="/logo.svg" width='200px' height='200px' alt="Логотип">
	</header>
</template>

<script src=""></script>

<style>
@keyframes rotateSvg {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.header {
	position: fixed;
	z-index: 4;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 20px;
}

.logo {
	animation: rotateSvg 10s linear infinite;
}
</style>
<template>
	<header ref="header" class="header">
		<nav>
			<NuxtLink to="/" class="cursor-default">
				<NuxtImg src="/logo.svg" class="logo" width="200px" height="200px" alt="Логотип" />
			</NuxtLink>
		</nav>
	</header>
</template>

<script setup>
const header = ref(null)
const { $gsap } = useNuxtApp()

// Объявляем переменную ctx на уровне компонента
let ctx = null

onMounted(() => {
	// Присваиваем контекст в переменную ctx
	ctx = $gsap.context(() => {
		let isHeaderVisible = true

		$gsap.to({}, {
			scrollTrigger: {
				start: 'top top',
				end: 99999,
				onUpdate: (self) => {
					if (window.scrollY < 50 && !isHeaderVisible) {
						$gsap.to(header.value, { y: 0, duration: 0.6 })
						isHeaderVisible = true
					} else if (window.scrollY >= 50 && isHeaderVisible) {
						$gsap.to(header.value, { y: -header.value.offsetHeight, duration: 0.6 })
						isHeaderVisible = false
					}
				}
			}
		})
	}, header)
})

onBeforeUnmount(() => {
	// Проверяем, что ctx существует, перед тем как вызывать revert
	if (ctx) {
		ctx.revert()
	}
})
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

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: transparent;
	padding: 1rem;
	z-index: 1000;
}

.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	animation: rotateSvg 10s linear infinite;
	width: 10vw;
}
</style>
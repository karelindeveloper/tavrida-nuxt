<template>
	<div ref="wrapper" class="scroll-wrapper">
		<div ref="scrollSection" class="scroll-section">
			<div class="clouds" ref="clouds">
				<!-- Здесь можно добавить изображение или SVG облаков -->
				<img src="/cloud1.png" alt="Облака" class="cloud-image">
			</div>
			<div class="item">
				<h1>ЛА-ЛА ЛЕТО</h1>
			</div>
		</div>
	</div>
</template>

<script setup>
const wrapper = ref(null)
const scrollSection = ref(null)
const clouds = ref(null)

const { $gsap } = useNuxtApp()

onMounted(() => {
	const ctx = $gsap.context(() => {
		$gsap.to(scrollSection.value, {
			xPercent: -100,
			ease: 'none',
			scrollTrigger: {
				trigger: wrapper.value,
				pin: true,
				scrub: 3,
				start: 'top top',
				end: () => `+=${(scrollSection.value.scrollWidth - wrapper.value.offsetWidth) * 2}px`,
			}
		})

		// Анимация для облаков (движение медленнее текста)
		// $gsap.to(clouds.value, {
		// 	xPercent: -100, // Облака движутся медленнее, измените этот параметр для регулировки скорости
		// 	ease: 'none',
		// 	scrollTrigger: {
		// 		trigger: wrapper.value,
		// 		start: 'top top',
		// 		end: () => `+=${(scrollSection.value.scrollWidth - wrapper.value.offsetWidth) * 2}px`,
		// 		scrub: 1, // Скорость движения облаков
		// 	}
		// })
	}, wrapper)

	onBeforeUnmount(() => {
		ctx.revert()
	})
})
</script>

<style scoped>
.scroll-wrapper {
	overflow: hidden;
	white-space: nowrap;
	width: 100vw;
	height: 100vh;
}

.scroll-section {
	display: flex;
	flex-direction: row;
	width: max-content;
}

.clouds {
	position: absolute;
	top: 5vw;
	left: 65vw;
	height: 20vh;
	overflow: hidden;
	z-index: 5;
}

.cloud-image {
	width: 100%;
	height: 100%;
}

.item {
	padding: 0px 20px;
	width: max-content;
	height: 100vh;
	display: flex;
	align-items: center;
	position: relative;
	z-index: 3;
}

.item h1 {
	font-size: 20vw;
	font-weight: bold;
}
</style>
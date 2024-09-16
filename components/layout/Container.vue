<template>
	<div class="container">
		<!-- <div ref="bottle" class="bottle">
			<NuxtImg class='bottle-img' src="/hero.png" />
		</div> -->
		<slot />
	</div>
</template>

<script setup>
// const { $gsap } = useNuxtApp()
// const bottle = ref(null)
// const targetSection = ref(null)

// onMounted(() => {
// 	const { $gsap } = useNuxtApp()

// 	// Перемещение бутылки в центр экрана за 300px
// 	$gsap.to(bottle.value, {
// 		x: () => window.innerWidth / 2 - bottle.value.offsetWidth / 2,
// 		y: () => window.innerHeight / 2 - bottle.value.offsetHeight / 2,
// 		scrollTrigger: {
// 			trigger: bottle.value,
// 			start: "bottom center",
// 			end: () => `+=${window.innerHeight}`, // Убедитесь, что анимация продолжается достаточно долго
// 			scrub: true,
// 			markers: true,
// 		}
// 	})

// 	// Фиксация бутылки в центре экрана до целевой секции
// 	$gsap.to(bottle.value, {
// 		scrollTrigger: {
// 			trigger: bottle.value,
// 			start: "300px top", // Фиксация после перемещения на 300px
// 			end: () => `${targetSection.value.offsetTop - window.innerHeight}px`, // До начала целевой секции
// 			scrub: true,
// 			pin: true, // Фиксация в центре экрана
// 			pinSpacing: false,
// 		}
// 	})

// 	// // Перемещение бутылки в левую часть целевой секции
// 	$gsap.to(bottle.value, {
// 		x: 0, // Перемещение влево
// 		scrollTrigger: {
// 			trigger: targetSection.value,
// 			start: "top center", // Начинаем при достижении середины целевой секции
// 			end: "top top", // Фиксация в левой части секции
// 			scrub: true,
// 			pin: bottle.value,
// 			pinSpacing: false,
// 		}
// 	})
// })
</script>

<style scoped>
.bottle {
	position: absolute;
	max-width: 300px;
}
</style>

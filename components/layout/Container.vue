<template>
	<div class="container">
		<div ref="bottle" class="bottle">
			<NuxtImg class='bottle-img' src="/hero.png" />
		</div>
		<slot />
		<section ref="targetSection" class="section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod.
		</section>
	</div>
</template>

<script setup>
const { $gsap } = useNuxtApp()
const bottle = ref(null)
const targetSection = ref(null)

onMounted(() => {
	$gsap.to(bottle.value, {
		y: 1000,
		ease: 'none',
		scrollTrigger: {
			trigger: bottle.value,
			start: "top top",
			end: () => `${targetSection.value.offsetTop - window.innerHeight}px`,
			scrub: true,
			pin: true,
			pinSpacing: false,
		}
	})

	$gsap.to(bottle.value, {
		scrollTrigger: {
			trigger: targetSection.value,
			start: "top center", // Начало фиксации
			end: "top top", // Остановка фиксации в целевой секции
			pin: bottle.value,
			pinSpacing: false,
			scrub: true,
		}
	})
})
</script>

<style scoped>
.bottle {
	position: absolute;
	max-width: 300px;
}

.bottle-img {
	width: 100%;
	height: 100%;
}
</style>

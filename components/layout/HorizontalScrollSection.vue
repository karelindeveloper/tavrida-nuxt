<template>
	<div ref="wrapper" class="scroll-wrapper">
		<div ref="scrollSection" class="scroll-section">
			<div class="clouds" ref="clouds">
				<NuxtImg src="/cloud1.png" alt="Облако1" class="cloud-image cloud-image1" />
				<NuxtImg src="/cloud2.png" alt="Облако2" class="cloud-image cloud-image2" />
				<NuxtImg src="/cloud3.png" alt="Облако3" class="cloud-image cloud-image3" />
				<NuxtImg src="/fragment1.png" alt="Облако3" class="cloud-image fragment1" />
				<NuxtImg src="/fragment1.png" alt="Облако3" class="cloud-image fragment1-blur" />
				<NuxtImg src="/cloud1.png" alt="Облако1" class="cloud-image cloud-image4" />
				<NuxtImg src="/cloud2.png" alt="Облако2" class="cloud-image cloud-image5" />
				<NuxtImg src="/cloud3.png" alt="Облако3" class="cloud-image cloud-image6" />
				<NuxtImg src="/fragment2.png" alt="Облако3" class="cloud-image fragment2" />
				<NuxtImg src="/fragment2.png" alt="Облако3" class="cloud-image fragment2-blur" />
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

const { $gsap, $scrollTrigger } = useNuxtApp()

const isIphone = () => {
	return /iPhone|iPod/i.test(navigator.userAgent)
}

onMounted(() => {
	if (!isIphone()) {
		alert('true')
		const ctx = $gsap.context(() => {
			$gsap.to(scrollSection.value, {
				xPercent: -100,
				ease: 'none',
				scrollTrigger: {
					trigger: wrapper.value,
					pin: true,
					scrub: 2,
					start: 'top top',
					end: () => `+=${(scrollSection.value.scrollWidth - wrapper.value.offsetWidth) * 2}px`,
				}
			})
		}, wrapper)

		onBeforeUnmount(() => {
			ctx.revert()
		})
	} else {
		alert('false')
	}
})
</script>

<style scoped lang='scss'>
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
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	z-index: 5;
}

.cloud-image {
	position: absolute;

	&1 {
		width: 30vw;
		left: 65vw;
		top: 5vh;
	}

	&2 {
		width: 30vw;
		left: 10vw;
		bottom: 5vh;
	}

	&3 {
		width: 25vw;
		left: 95vw;
		bottom: 15vh;
		z-index: 5;
	}

	&.fragment1 {
		width: 10vw;
		left: 120vw;
		top: 5vh;

		&-blur {
			width: 25vw;
			left: 50vw;
			bottom: 0vh;
			filter: blur(15px);
			transform: scale(-1, 1)
		}
	}

	&4 {
		width: 40vw;
		right: 65vw;
		bottom: 5vh;
	}

	&5 {
		width: 50vw;
		right: 10vw;
		top: 5vh;
	}

	&6 {
		width: 30vw;
		right: 110vw;
		top: 15vh;
		z-index: 5;
	}

	&.fragment2 {
		width: 20vw;
		right: 20vw;
		bottom: 10vh;

		&-blur {
			width: 30vw;
			right: 60vw;
			top: 0vh;
			filter: blur(15px);
			transform: scale(-1, 1)
		}
	}
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
	font-size: 30vw;
	font-weight: bold;
	font-family: 'DrukWideCyr';
}
</style>
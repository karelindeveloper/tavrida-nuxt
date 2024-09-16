<template>
	<footer class="bg-primary">
		<div class="container flex flex-col">
			<div class='py-8 flex items-center justify-between'>
				<div class='flex flex-col gap-3'>
					<div class='flex items-center gap-2'>
						<Icon name="mdi:map-marker-outline" size='24' />
						Челябинская область, Саткинский район, п. Айлино
					</div>
					<NuxtLink to="tel:+79225092036" class='flex items-center gap-2'>
						<Icon name="mdi:telephone-outline" size='24' />
						+7 (992) 509-20-36
					</NuxtLink>
					<NuxtLink to="mailto:gm-lapteva@mail.ru" class='flex items-center gap-2'>
						<Icon name="mdi:email-outline" size='24' />
						gm-lapteva@mail.ru
					</NuxtLink>
				</div>
				<NuxtLink to="/" class="cursor-default">
					<NuxtImg src="/logo.svg" class="logo" width="100px" alt="Логотип" />
				</NuxtLink>
			</div>
			<div class='py-4 flex items-center justify-between border-t border-foreground'>
				<span>© «Республика яркого лета», 2024</span>
				<span>Разработано «Колледж Креативных Индустрий Челябинск»</span>
			</div>

		</div>
	</footer>
</template>

<script setup></script>

<style scoped>
@keyframes rotateSvg {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.logo {
	animation: rotateSvg 10s linear infinite;
	width: 10vw;
}
</style>

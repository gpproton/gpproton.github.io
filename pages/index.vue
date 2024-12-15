<script lang="ts" setup>
const pageHeading = ref('Godwin Peter .O personal website');
const pageTitle = ref('Home :: Godwin Peter .O');
const pageDescription = ref('Profile home page for Godwin Peter .O');

useSeoMeta({
	title: pageTitle.value,
	description: pageDescription.value,
	ogTitle: pageHeading.value,
	ogDescription: pageDescription.value,
	twitterCard: 'summary_large_image',
});
</script>

<template>
	<div class="p-2">
		<div
			id="about"
			class="relative isolate px-4 lg:px-8 mb-5 border-b flex items-center justify-center"
			style="height: calc(80dvh - 6rem) !important"
		>
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
				/>
			</div>
			<div class="">
				<div class="md:w-3/4 lg:w-1/2 sm:w-full text-left mb-2">
					<p class="text-lg lg:text-2xl font-light">
						Full-Stack Developer
					</p>
					<h2
						class="lg:text-7xl md:text-5xl text-4xl lg:text-nowrap lg:text-ellipsis text-gray-600 font-extrabold mt-2 mb-3"
					>
						{{ "Hi, i'm Peter" }}
					</h2>
					<div class="text-md font-light px-1 lg:pr-8 pb-4">
						I'm a fullstack developer with over 8 years of experience and with an
						extended capability in devOps and System administration, I am looking
						to participate in the development of challenging projects that allow
						me to grow professionally.
					</div>
				</div>
				<div class="space-x-4 flex sm:justify-center md:justify-start">
					<Button
						severity="gray-600"
						class="p-2 text-gray-500 hover:bg-gray-400"
						outlined
						label="Contact Me"
					/>
					<Button
						class="p-2 hover:bg-blue-200"
						label="Download CV"
						href="/documents/godwin-peter-o-cv.pdf"
						target="_blank"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

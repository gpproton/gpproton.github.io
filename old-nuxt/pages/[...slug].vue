<script lang="ts" setup>
import type { NuxtError } from '#app';

defineProps({

	error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<main
		class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
	>
		<div class="text-center">
			<h1
				class="mt-4 text-5xl uppercase font-bold tracking-tight text-gray-900 sm:text-5xl"
			>
				{{ 'Not Found' }}
			</h1>
			<p class="mt-6 text-base leading-7 text-gray-600">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<Button
					type="button"
					class="rounded-md px-4 py-4 text-md font-semibold text-white shadow-sm hover:bg-blue-600"
					@click="() => handleError()"
				>
					Go Back
				</Button>
			</div>
		</div>
	</main>
</template>

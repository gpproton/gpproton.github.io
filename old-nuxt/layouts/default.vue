<script lang="ts" setup>
import AppTopbar from './components/AppTopbar.vue';
</script>

<template>
	<div class="bg-transparent">
		<app-topbar />
		<div class="lg:px-8 px-1">
			<slot>
				<router-view />
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
const pageHeading = ref('Godwin Peter .O projects');
const pageTitle = ref('Projects :: Godwin Peter .O');
const pageDescription = ref('Projects for Godwin Peter .O');

useSeoMeta({
  title: pageTitle.value,
  description: pageDescription.value,
  ogTitle: pageHeading.value,
  ogDescription: pageDescription.value,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div></div>
</template>

<style></style>

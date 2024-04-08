<script lang="ts" setup>
// const search = ref('');
// const results = searchContent(search);

const pageHeading = ref('Search blog');
const pageTitle = ref('Search');
const pageDescription = ref('List of filtered articles');

useSeoMeta({
  title: pageTitle.value + ' :: Godwin Peter .O',
  description: pageDescription.value,
  ogTitle: pageHeading.value,
  ogDescription: pageDescription.value,
  ogImage: 'https://godwin.dev//images/placeholder.webp',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <!-- <InputText v-model="search" type="text" />

    <pre>{{ results }} </pre> -->
  </div>
</template>

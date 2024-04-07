<script setup lang="ts">
const route = useRoute();
const routeSlug: string = route.params.slug.toString();

const { data: page } = await useAsyncData(
  '/',
  queryContent('').where({ slug: { $eq: routeSlug } }).findOne,
);
const pagePath = computed<string>(() => page.value?._path ?? '');

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="markdown">
    <ContentDoc :path="pagePath">
      <template #default="{ doc }">
        <h1>Title: {{ doc.title }}</h1>
        <p>Description: {{ doc.description }}</p>
        <p>Author: {{ doc.author }}</p>
        <div class="details-cont">
          <span>Posted: {{ formatDate(doc.createdAt) }}</span>
          <span>Updated: {{ formatDate(doc.updatedAt) }}</span>
        </div>
        <hr />
        <ContentRenderer :value="doc" />
      </template>
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">Content Page ({{ routeSlug }}) not found</h1>
      </template>
      <!-- Slot if no page content -->
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
  </div>
</template>

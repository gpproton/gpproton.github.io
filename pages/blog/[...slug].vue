<script setup lang="ts">
import { formatDate } from '~/composables/date';

const route = useRoute();
const routeSlug = computed(() => route.params.slug.toString());

const { data: page } = await useAsyncData(() =>
  queryContent('/blog/')
    .where({ slug: { $eq: routeSlug.value } })
    .findOne(),
);
const pagePath = computed<string>(() => page.value?._path ?? '');

if (page.value !== null) {
  useSeoMeta({
    title: page.value.title + ' :: Godwin Peter .O',
    ogTitle: page.value.title,
    description: page.value.description,
    ogDescription: page.value.description,
    ogImage: page.value.image,
    twitterCard: 'summary_large_image',
  });
}

const processTags = (value?: string): string[] => {
  if (value === undefined) return [];
  const items = value.split(',');

  return items.length > 7 ? items.slice(0, items.length - 1) : items;
};

console.log(page.value);
</script>

<template>
  <div class="markdown">
    <ContentDoc v-if="route.params.slug" :path="pagePath">
      <template #default="{ doc }">
        <div class="space-y-8">
          <div class="text-center p-8 border-b">
            <h1 class="text-5xl font-bold mb-4">{{ doc.title }}</h1>
            <p class="text-base font-light line-clamp-2 lg:px-32">
              {{ doc.description }}
            </p>
            <div class="mt-4 space-y-2">
              <div class="px-1 space-x-2">
                <span
                  v-for="tag in processTags(doc.tags)"
                  :key="tag"
                  class="text-sm text-blue-500 font-normal rounded-lg bg-blue-100 px-3 py-1.5"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="">
                <span class="text-sm uppercase font-normal">
                  {{ formatDate(doc.publishedAt) }}
                </span>
              </div>
            </div>
            <!-- <span>Updated: {{ formatDate(doc.updatedAt) }}</span> -->
          </div>
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">Content ({{ routeSlug }}) not found</h1>
      </template>
      <!-- Slot if no page content -->
      <template #empty>
        <div class="text-center">
          <h1>Document is empty</h1>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

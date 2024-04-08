<script setup lang="ts">
import { formatDate } from '~/composables/date';

const route = useRoute();
const routeSlug = computed(() => route.params.slug.toString());

const { data } = await useAsyncData(() =>
  queryContent('/blog/')
    .where({ slug: { $eq: routeSlug.value } })
    .findOne(),
);
const page = computed(() => data.value as unknown as Record<string, any>);

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
</script>

<template>
  <div class="p-1">
    <div v-if="page" class="space-y-1">
      <div class="lg:p-8 p-1 border-b text-center">
        <h1
          class="lg:text-5xl text-3xl line-clamp-2 text-blue-500 font-bold mb-4 md:mb-2"
        >
          {{ page?.title }}
        </h1>
        <p class="text-base font-light line-clamp-3 lg:px-32">
          {{ page?.description }}
        </p>
        <div class="mt-4 space-y-2">
          <div class="px-1 space-x-2">
            <span
              v-for="tag in processTags(page?.tags)"
              :key="tag"
              class="text-sm text-blue-500 font-normal rounded-lg bg-blue-100 px-3 py-1.5"
            >
              {{ tag }}
            </span>
          </div>
          <div class="">
            <span class="text-sm uppercase font-normal">
              {{ formatDate(page?.publishedAt) }}
            </span>
          </div>
        </div>
      </div>

      <ContentRenderer :value="page">
        <template #default>
          <div class="w-full">
            <ContentRendererMarkdown
              class="prose max-w-none prose-neutral prose-headings:no-underline prose-a:no-underline prose-a:text-gray-500 hover:prose-a:text-blue-500 prose-inline-code:rounded-xl prose-inline-code:border prose-sm lg:prose-lg xl:prose-xl"
              :value="page"
            />
          </div>
        </template>

        <template #not-found>
          <div class="flex text-2xl text-center">
            <h1>This post doesn't exist</h1>
          </div>
        </template>

        <template #empty>
          <div class="flex text-2xl text-center">
            <h1>This post doesn't exist</h1>
          </div>
        </template>
      </ContentRenderer>
    </div>

    <div v-else class="flex text-2xl text-center">
      <h1>This post doesn't exist</h1>
    </div>
  </div>
</template>

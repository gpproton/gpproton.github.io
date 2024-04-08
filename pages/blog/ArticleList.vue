<script lang="ts" setup>
import { formatDate } from '~/composables/date';
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const root = computed(() => {
  const r = useRoute();
  return `${r.path}/`;
});
const query: QueryBuilderParams = {
  path: '/',
  where: [{}],
  limit: 10,
  sort: [{ date: -1 }],
};
</script>

<template>
  <div class="mt-8">
    <div class="text-center">
      <div class="text-5xl text-blue-500 font-bold mb-3">
        {{ "Peter's Random Musings" }}
      </div>
      <p class="font-sans text-base font-light xl:w-2/4 lg:w-3/4 mx-auto">
        {{ "Here's a list of all my blog posts" }}
      </p>
      <div class="flex my-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
      </div>
    </div>
    <ContentList :query="query">
      <template #default="{ list }">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-2 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
            v-for="post in list"
            :key="post.id"
            class="flex max-w-xl flex-col items-start justify-between"
          >
            <nuxt-link :to="root + post.slug">
              <div style="height: 200px" class="w-full">
                <Image
                  src="/images/placeholder.webp"
                  image-class="rounded-xl h-48 w-96 object-cover"
                  alt="placeholder"
                />
              </div>
            </nuxt-link>
            <div class="flex items-center gap-x-2 text-xs">
              <time :datetime="post.createdAt" class="text-gray-500">{{
                formatDate(post.createdAt)
              }}</time>
              <nuxt-link
                :to="'#'"
                class="relative z-10 rounded-sm bg-blue-100 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-300"
                >TAG</nuxt-link
              >
            </div>
            <div class="group relative">
              <nuxt-link :to="root + post.slug">
                <h3
                  class="mt-3 text-lg leading-6 font-semibold hover:text-blue-500 text-gray-500 group-hover:text-gray-600 md:text-md overflow-hidden md:overflow-visible whitespace-nowrap md:whitespace-normal text-ellipsis"
                >
                  <span class="absolute inset-0" />
                  <div>{{ post.title }}</div>
                </h3>
              </nuxt-link>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ post.description }}
              </p>
            </div>
          </article>
        </div>
      </template>
      <template #not-found>
        <div class="text-2xl text-center">{{ 'Not Found' }}</div>
      </template>
    </ContentList>
  </div>
</template>

<style></style>

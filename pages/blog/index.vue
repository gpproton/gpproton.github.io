<script lang="ts" setup>
import { formatDate } from '~/composables/date';

const root = computed(() => {
  const r = useRoute();
  return `${r.path}/`;
});

const { data: articles } = await useAsyncData(() =>
  queryContent('/blog/')
    .where({ draft: { $eq: false } })
    .sort({ date: -1 })
    .find(),
);

const pageHeading = ref("Peter's Random Musings");
const pageTitle = ref('Blog :: Godwin Peter .O');
const pageDescription = ref('List of articles in the blog');

useSeoMeta({
  title: pageTitle.value,
  description: pageDescription.value,
  ogTitle: pageHeading.value,
  ogDescription: pageDescription.value,
  ogImage: 'https://godwin.dev//images/placeholder.webp',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="mt-8">
    <div class="text-center">
      <div class="text-5xl text-blue-500 font-bold mb-3">
        {{ pageHeading }}
      </div>
      <p class="font-sans text-base font-light xl:w-2/4 lg:w-3/4 mx-auto">
        {{ "Here's a list of all my blog posts" }}
      </p>
      <div class="flex my-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
      </div>
    </div>
    <div
      v-if="articles !== null && articles.length > 0"
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-2 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <nuxt-link v-for="post in articles" :key="post.id" :to="root + post.slug">
        <article
          class="flex max-w-sm rounded-xl flex-col items-start justify-between overflow-hidden hover:bg-indigo-10 hover:scale-105 hover:shadow-2xl transition shadow transform duration-300"
        >
          <header style="height: 148px" class="w-full">
            <Image
              src="/images/placeholder.webp"
              image-class="rounded-t-xl h-36 w-96 object-cover"
              alt="placeholder"
            />
          </header>
          <section class="group relative px-3">
            <h3
              class="mt-3 text-lg leading-6 font-semibold hover:text-blue-500 text-gray-500 group-hover:text-gray-600 md:text-md overflow-hidden md:overflow-visible whitespace-nowrap md:whitespace-normal text-ellipsis"
            >
              <span class="absolute inset-0" />
              <div class="line-clamp-2 min-h-8">{{ post.title }}</div>
            </h3>
            <p class="pt-2 line-clamp-3 text-sm leading-6 text-gray-500">
              {{ post.description }}
            </p>
          </section>
          <footer class="flex items-center gap-x-2 text-xs mt-2 py-2 px-3">
            <time :datetime="post.createdAt" class="text-gray-500">{{
              formatDate(post.createdAt)
            }}</time>
            <span
              :to="'#'"
              class="relative z-10 rounded-md bg-blue-100 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-300"
              >Category</span
            >
          </footer>
        </article>
      </nuxt-link>
    </div>
    <div v-else class="text-2xl text-center">{{ 'Not Found' }}</div>
  </div>
</template>

<style></style>

<script setup lang="ts">
import { formatDate } from '~/composables/date';

const route = useRoute();
const routeSlug: string = route.params.slug.toString();

const { data: page } = await useAsyncData('/', () =>
  queryContent('')
    .where({ slug: { $eq: routeSlug } })
    .findOne(),
);
const pagePath = computed<string>(() => page.value?._path ?? '');
</script>

<template>
  <div class="markdown">
    <ContentDoc :path="pagePath">
      <template #default="{ doc }">
        <div class="space-y-8">
          <div class="text-center p-8 border-b">
            <h1 class="text-5xl font-bold mb-4">{{ doc.title }}</h1>
            <p class="text-lg font-light">{{ doc.description }}</p>
            <div class="mt-4">
              <span
                class="text-sm uppercase font-normal rounded-lg bg-blue-100 px-3 py-1.5"
              >
                {{ formatDate(doc.createdAt) }}
              </span>
            </div>
            <!-- <span>Updated: {{ formatDate(doc.updatedAt) }}</span> -->
          </div>
          <ContentRenderer :value="doc" />
        </div>
      </template>
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">Content Page ({{ routeSlug }}) not found</h1>
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

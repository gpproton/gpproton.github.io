<script lang="ts" setup>
const pageHeading = ref('Godwin Peter .O personal website');
const pageTitle = ref('Home :: Godwin Peter .O');
const pageDescription = ref('Profile home page for Godwin Peter .O');

useSeoMeta({
  title: pageTitle.value,
  description: pageDescription.value,
  ogTitle: pageHeading.value,
  ogDescription: pageDescription.value,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <div class="relative isolate px-4 pt-14 lg:px-8">
      <div
        id="about"
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>

      <div class="md:w-3/4 sm:w-full text-left mb-2">
        <p class="text-2xl font-light px-1">Fullstack Developer</p>
        <h2
          class="lg:text-7xl text-5xl lg:text-nowrap lg:text-ellipsis text-gray-600 font-extrabold mb-2"
        >
          {{ 'Godwin Peter .O' }}
        </h2>
        <div class="text-md font-light px-1 lg:pr-8 pb-4">
          I'm a fullstack developer with over 8 years of experience and with an
          extended capability in devOps and System administration, I am looking
          to participate in the development of challenging projects that allow
          me to grow professionally.
        </div>
      </div>
      <Button class="p-2 hover:bg-blue-600" label="More.." />
    </div>
  </div>
</template>

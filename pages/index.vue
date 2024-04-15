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
<div class="container">
  <div  id="about" class="relative isolate px-4 lg:px-8 mb-5 border-b flex items-center justify-center"  style="height: calc(100dvh - 6rem) !important">
      <div
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

      <div class="">
        <div class="md:w-3/4 lg:w-1/2 sm:w-full text-left mb-2">
        <p class="text-lg lg:text-2xl font-light">Fullstack Developer</p>
        <h2
          class="lg:text-7xl md:text-5xl text-4xl lg:text-nowrap lg:text-ellipsis text-gray-600 font-extrabold mt-2 mb-3"
        >
          {{ "Hi, i'm Peter" }}
        </h2>
        <div class="text-md font-light px-1 lg:pr-8 pb-4">
          I'm a fullstack developer with over 8 years of experience and with an
          extended capability in devOps and System administration, I am looking
          to participate in the development of challenging projects that allow
          me to grow professionally.
        </div>
      </div>
      <div class="space-x-4 flex sm:justify-center md:justify-start">
        <Button severity="gray-600" class="p-2 text-gray-500 hover:bg-gray-400" outlined label="Send Email" />
        <Button class="p-2 hover:bg-blue-600" label="Download CV" />
      </div>
      </div>
    </div>

    <section id="projects" class="p-6 sm:p-2">
    <div class="container--inverse">
      <div class="text-gray-500">
        <h2 class="text-3xl font-bold">My Projects</h2>
        <p class="text-xl">Checkout a few of my works!</p>
      </div>

      <!-- Placeholder project-->
      <div class="flex py-8 items-center justify-center">
        <div class="relative flex w-full max-w-none flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
        <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src="/images/placeholder.webp" alt="placeholder" style="transform: translateY(0px);">
        </div>

        <div class="p-3 text-gray-500">
          <h4 class="text-3xl font-semibold">Placeholder One</h4>
          <p class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis
          </p>
          <div class="py-2">
            <p>Name: demo@demo.dev</p>
            <p>Password: demo</p>
          </div>


          <div class="flex flex-row space-x-2 py-2">
            <span v-for="tech in [
              { name: 'Vue', icon: 'pi pi-star'},
              { name: 'Nuxt', icon: 'pi pi-star'},
              { name: 'Typescript', icon: 'pi pi-star'},
              { name: 'Docker', icon: 'pi pi-star'},
            ]" to="#" class="relative z-10 rounded-md bg-blue-100 py-1.5 px-3 font-medium text-gray-400 hover:bg-gray-300">
            <i :class="tech.icon"></i>
            {{ tech.name }}</span>
          </div>
          <div class="flex flex-row py-4 space-x-3">
            <Button icon="pi pi-star" severity="gray-600" class="p-2 bg-gray-200 hover:bg-gray-400" label="Demo" />
            <Button icon="pi pi-star" severity="gray-600" class="p-2 bg-gray-200 hover:bg-gray-400" label="Source" />
          </div>
        </div>

       
      </div>

      </div>

    </div>
  </section>

</div>  
</template>

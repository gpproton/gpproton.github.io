<script lang="ts" setup>
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';


const navigation = [
  { name: 'shared.about', href: '/#about' },
  { name: 'shared.skills', href: '/#skills' },
  { name: 'shared.projects', href: '/#projects' },
  { name: 'shared.resume', href: '/#resume' },
  { name: 'shared.blog', href: '/blog' },
];

const socialLinks = ref([
  {
    name: 'Github',
    icon: 'pi-github',
    href: 'https://github.com/gpproton',
  },
  {
    name: 'Twitter',
    icon: 'pi-twitter',
    href: 'https://twitter.com/gpproton',
  },
  {
    name: 'Linkedin',
    icon: 'pi-linkedin',
    href: 'https://linkedin.com/in/godwin-peter',
  },
]);

const mobileMenuOpen = ref(false);
const langs = ref([
  { name: 'English', code: 'EN' },
  { name: 'French', code: 'FR' },
]);
const selectedLang = ref(langs.value[0]);
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 h-20">
    <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <div class="inline-flex justify-between lg:block">
          <ul class="flex gap-5 justify-center text-white mr-5 items-center">
            <li v-for="link in socialLinks" :key="link.name" class="text-gray-500 hover:text-blue-400">
              <a :href="link.href" aria-label="twitter" target="_blank" rel="nofollow noopener noreferrer"><i
                  :class="'pi ' + link.icon" style="font-size: 1.55rem"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Only mobile -->
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <!-- Only large -->
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href"
          class="text-sm font-semibold leading-6 text-gray-600 hover:text-blue-500 active:text-blue-400">{{
            $t(item.name) }}
        </nuxt-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <Select v-model="selectedLang" :options="langs" optionLabel="name" placeholder="Language"
          class="w-full md:w-32" />
      </div>
    </nav>
    <!-- Mobile navigation -->
    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Godwin peter .O</span>
            <img class="h-8 w-auto" src="/pwa-64x64.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link v-for="item in navigation" :key="item.name" :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 active:text-blue-400"
                @click="mobileMenuOpen = false">{{ $t(item.name) }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style></style>

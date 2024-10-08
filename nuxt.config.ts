import pkg from './package.json';
import path from 'path';
import { MyPreset } from './prime-preset';

// TODO: use as refrence
// https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: {
    global: true,
    dirs: ['~/components'],
  },

  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [],
    },
  },

  modules: [
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        cookieOptions: {
          sameSite: 'none',
        },
        storage: 'localStorage',
      },
    ],
    [
      '@primevue/nuxt-module',
      {
        usePrimeVue: true,
        options: {
          theme: {
            preset: MyPreset,
            options: {
              darkModeSelector: '.test', // 'system',
            },
          }
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n.config.ts',
      },
    ],
    [
      'nuxt-content-git',
      {
        createdAtName: 'createdAt',
        updatedAtName: 'updatedAt',
      },
    ],
    [
      '@nuxt/content',
      {
        highlight: {
          theme: 'one-dark-pro',
          preload: [
            'css',
            'scss',
            'json',
            'js',
            'ts',
            'html',
            'bash',
            'vue',
            'yaml',
          ],
        },
      },
    ],
  ],

  css: [
    'primeicons/primeicons.css',
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  content: {
    navigation: {
      fields: ['author', 'publishedAt', 'tags'],
    },
    // TODO: Review if necessary
    sources: {
      content: {
        driver: 'fs',
        prefix: '/blog',
        base: path.resolve(__dirname, 'articles'),
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/api/search.json'],
    },
    minify: true,
  },

  ssr: true,
  compatibilityDate: '2024-09-16',
});
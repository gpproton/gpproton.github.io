import pkg from './package.json';

// TODO: use as refrence
// https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    ['nuxt-primevue', {
      /* Options */
      importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
      components: {
        include: '*',
        exclude: ['Chart']
      }
    }],
    ['@nuxtjs/i18n', {
      vueI18n: './i18n.config.ts'
    }],
    ['@nuxt/content', {
      highlight: {
        theme: 'one-dark-pro',
        preload: ['css', 'scss', 'json', 'js', 'ts', 'html', 'bash', 'vue']
      }
    }],
  ],
  css: [
    'primevue/resources/themes/lara-light-teal/theme.css',
    'primeicons/primeicons.css',
  ],
});


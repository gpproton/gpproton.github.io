import pkg from './package.json';
import path from 'path';

const theme = 'aura-light-blue/theme.css';

// TODO: use as refrence
// https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV,
    },
  },
  hooks: {
    'pages:routerOptions'({ files }) {
      files.push({
        path: path.resolve('./router.options'),
        optional: true,
      });
    },
  },
  app: {
    head: {
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
      'nuxt-primevue',
      {
        unstyled: true,
        importPT: { from: path.resolve(__dirname, './presets/lara/') },
        // importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
        components: {
          include: '*',
          exclude: ['Editor', 'Chart'],
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
      '@nuxt/content',
      {
        highlight: {
          theme: 'one-dark-pro',
          preload: ['css', 'scss', 'json', 'js', 'ts', 'html', 'bash', 'vue'],
        },
      },
    ],
  ],
  css: ['primevue/resources/themes/' + theme, 'primeicons/primeicons.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  content: {
    navigation: {
      fields: ['author', 'publishedAt'],
    },
    sources: {
      content: {
        driver: 'fs',
        prefix: '/blog',
        base: path.resolve(__dirname, 'content'),
      },
    },
  },
});

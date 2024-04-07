import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  routes: (_routes) => [
    {
      path: '/:catchAll(.*)*',
      component: () => import('./pages/ErrorView.vue'),
      meta: {
        title: 'shared.error',
      },
    },
    {
      name: 'root',
      path: '/',
      component: () => import('~/layouts/AppLayout.vue'),
      children: [
        {
          name: 'home',
          path: '',
          component: () =>
            import('~/pages/HomeView.vue').then((r) => r.default || r),
        },
      ],
    },
    {
      name: 'blog',
      path: '/blog',
      component: () => import('~/layouts/AppLayout.vue'),
      children: [
        {
          name: 'blog.articles',
          path: '',
          component: () => import('~/pages/blog/ArticleList.vue'),
        },
        {
          name: 'blog.search',
          path: 'search',
          component: () => import('~/pages/blog/ArticleSearch.vue'),
        },
        {
          name: 'blog.article',
          path: ':slug',
          component: () => import('~/pages/blog/ArticleRender.vue'),
        },
      ],
    },
  ],
};

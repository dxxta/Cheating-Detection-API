import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: async () => await import('@/pages/DashboardPage.vue'),
      meta: {
        title: 'Homepage',
      },
    },
    {
      path: '/docs',
      name: 'docs',
      component: async () => await import('../pages/DocumentationPage.vue'),
      meta: {
        title: 'Documentation',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: async () => await import('@/pages/Notfound.vue'),
      meta: {
        title: 'Not Found',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - API Byecheating`
  next()
})

export default router

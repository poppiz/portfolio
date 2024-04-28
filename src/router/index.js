import AcceuilPage from '@/views/acceuilPage.vue'
import notFound from '@/views/notFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceuilPage',
      component: AcceuilPage
    },

    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: notFound
    }
  ]
})

export default router

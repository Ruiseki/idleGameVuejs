import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/game',
    name: 'GamePage',
    component: () => import('../views/GamePage.vue')
  },
  {
    path: '/shop',
    name: 'ShopPage',
    component: () => import('../views/ShopPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

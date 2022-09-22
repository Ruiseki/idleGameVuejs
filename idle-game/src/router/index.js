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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

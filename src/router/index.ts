import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  HomeView,
    },{
      path: '/estructura',
      name: 'estructura',
<<<<<<< HEAD
      component: () => import('../views/EstructuraView.vue'),
    },{
      path: '/ejemplos',
      name: 'ejemplos',
      component: () => import('../views/MisEjemplosView.vue'),
=======
      component: () => import('../views/ejemplosK/EstructuraView.vue'),
>>>>>>> 27021262b3550a67d2b5f4863c8fae2c2dca5e1d
    },
  ],
})

export default router

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
      component: () => import('../views/ejemplosK/EstructuraView.vue'),
    },{
      path: '/ejemplos',
      name: 'ejemplos',
      component: () => import('../views/MisEjemplosView.vue'),
    },
    {
      path: '/sintaxis',
      name: 'sintaxis',
      component: () => import('../views/SintaxisView.vue'),
    },{
      path: '/user/:id?',
      name: 'UserDetail',
      component: () => import('../views/MisEjemplosView.vue'),
    },

  ],
})

export default router

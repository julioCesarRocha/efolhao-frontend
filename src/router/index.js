import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hemodinamica',
    name: 'Hemodinamica',
    component: () => import(/* webpackChunkName: "hemodinamica" */ '../views/HemodinamicaApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

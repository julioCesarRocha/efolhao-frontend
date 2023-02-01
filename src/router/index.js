// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/hemodinamica',
//     name: 'Hemodinamica',
//     component: () => import(/* webpackChunkName: "hemodinamica" */ '../views/HemodinamicaApp.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import SinaisVitais from './components/SinaisVitais.vue'
import Respiracao from './components/Respiracao.vue'
import Hemodinamica from './components/Hemodinamica.vue'
// import Form4 from './components/Form4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sinaisvitais',
    name: 'SinaisVitais',
    component: SinaisVitais
  },
  {
    path: '/respiracao',
    name: 'Respiracao',
    component: Respiracao
  },
  {
    path: '/hemodinamica',
    name: 'Hemodinamica',
    component: Hemodinamica
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
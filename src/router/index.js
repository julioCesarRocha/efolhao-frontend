import Vue from 'vue'
import VueRouter from 'vue-router'
// import SinaisVitais from '@/views/SinaisVitais.vue'
// import HemodinamicaApp from '@/views/HemodinamicaApp.vue'
// import Pacientes from '@/views/PacientesComponent.vue'
// import Respiracao from './components/Respiracao.vue'
// import Form4 from './components/Form4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sinaisvitais',
    name: 'SinaisVitais',
    component: () => import ('../views/SinaisVitais.vue')
  },
  {
    path: '/respiracao',
    name: 'Respiracao',
    component: () => import ('../views/RespiracaoComponent.vue')
  },
  {
    path: '/hemodinamica',
    name: 'Hemodinamica',
    component: () => import ('../views/HemodinamicaApp.vue')
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import ('../views/PacientesComponent.vue')
  },
  {
    path: '/neurologico',
    name: 'Neurologico',
    component: () => import ('../views/NeurologicoView.vue')
  },
  {
    path: '/menu',
    name: 'MenuComponent',
    component: () => import ('../views/MenuComponent.vue')
  },
  {
    path: '/cadastrar-paciente',
    name: 'UsuarioComponent',
    component: () => import ('../views/UsuarioView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as components from "vuetify/lib/components"
import LoginComponent from './components/LoginComponent.vue'

Vue.config.productionTip = false

// Variável para controlar a exibição do LoginComponent
let showLoginComponent = true

router.beforeEach((to, from, next) => {
  // Verifica se a rota atual é diferente de http://localhost:8080/
  console.log('to.fullPath: ' + to.fullPath);
  if (to.fullPath !== '/') {
    // Esconde o componente LoginComponent
    showLoginComponent = false
  } else {
    // Mostra o componente LoginComponent
    showLoginComponent = true
  }
  console.log(showLoginComponent);
  // Chama o próximo middleware ou a rota alvo
  next()
})

new Vue({
  router,
  vuetify,
  components: {
    ...components,
    LoginComponent: showLoginComponent ? LoginComponent : null
  },
  render: h => h(App)
}).$mount('#app')

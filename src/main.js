import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as components from "vuetify/lib/components"

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  components,
  render: h => h(App)
}).$mount('#app')

<template>
  <v-app>
    <NavbarApp />
    <MenuComponent />
    <LoginComponent v-if="showLogin" /> 
    <router-view v-else></router-view>
  </v-app>
</template>

<script>
import LoginComponent from "./components/LoginComponent.vue";
import NavbarApp from "./components/Navbar.vue";
// import MenuComponent from "./components/MenuComponent.vue";


export default {
  data: function() {
    return {
      logo_src: "/logo.png",
      app_name: "e-Sinais",
      showLogin: true
    }
  },
  components: {
    LoginComponent,
    // MenuComponent,
    NavbarApp
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      // Verifica se a rota atual é diferente de http://localhost:8080/
      if (to.fullPath !== '/') {
        // Esconde o componente LoginComponent
        this.showLogin = false;
      } else {
        // Mostra o componente LoginComponent
        this.showLogin = true;
      }
      console.log(this.showLogin)
      // Chama o próximo middleware ou a rota alvo
      next();
    })
  }
};
</script>

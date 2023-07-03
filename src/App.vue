<template>
  <v-app>
    <NavbarApp :logo="logo_src" :alt="app_name"/>
    <!-- <LoginComponent />  -->
    <!-- <PacientesComponent />
    <MenuComponentVue /> -->
    <MenuComponentVue /> 
    <!-- <NeurologicoComponent /> 
    <UsuarioComponent />
    <HemodinamicaApp />
    <RespiracaoComponent />  -->
      
  </v-app>
</template>

<script>
import MenuComponentVue from './components/MenuComponent.vue';
import NavbarApp from "./components/Navbar.vue";
// import PacientesComponent from "./components/PacientesComponent.vue";
// import SinaisVitais from "./components/SinaisVitais.vue";
// import HemodinamicaApp from "./components/Hemodinamica.vue";
// import RespiracaoComponent from "./components/Respiracao.vue";
// import LoginComponent from "./components/LoginComponent.vue";
// import UsuarioComponent from "./components/UsuarioComponent.vue";
// import NeurologicoComponent from "./components/NeurologicoComponent.vue";

export default {
  data: function() {
    return {
      logo_src: "/logo.png",
      app_name: "e-Sinais"
    }
  },
  components: {
    NavbarApp,
    // UsuarioComponent,
    // NeurologicoComponent,
    // SinaisVitais,
    // HemodinamicaApp,
    // RespiracaoComponent,
    // PacientesComponent,
    // LoginComponent,
    MenuComponentVue,
},

};
</script>
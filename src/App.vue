<template>
  <v-app>
    <NavbarApp />
    <v-spacer></v-spacer>
    <!-- <PacientesComponent /> -->
     <!-- <SinaisVitais /> -->
     <MenuComponent />
     <UsuarioComponent />
    <!-- <HemodinamicaApp /> -->
    <!-- <RespiracaoComponent /> -->
    <!-- <LoginComponent /> -->
      
  </v-app>
</template>

<script>
import NavbarApp from "./components/Navbar.vue";
// import PacientesComponent from "./components/PacientesComponent.vue";
// import SinaisVitais from "./components/SinaisVitais.vue";
// import HemodinamicaApp from "./components/Hemodinamica.vue";
// import RespiracaoComponent from "./components/Respiracao.vue";
// import LoginComponent from "./components/LoginComponent.vue";
import UsuarioComponent from "./components/UsuarioComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";

export default {
  components: {
    NavbarApp,
    UsuarioComponent,
    MenuComponent,
    // SinaisVitais,
    // HemodinamicaApp
    // RespiracaoComponent
    // PacientesComponent
    // LoginComponent
},

};
</script>

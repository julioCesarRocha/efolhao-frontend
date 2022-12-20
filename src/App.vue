<template>
  <v-app>
    <NavbarApp />
    <v-spacer></v-spacer>
    <!-- <PacientesComponent /> -->
    <!-- <SinaisVitais />
    <HemodinamicaApp />
    <RespiracaoComponent /> -->
    <LoginComponent />
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import NavbarApp from "./components/Navbar.vue";
// import PacientesComponent from "./components/PacientesComponent.vue";
// import SinaisVitais from "./components/SinaisVitais.vue";
// import HemodinamicaApp from "./components/Hemodinamica.vue";
// import RespiracaoComponent from "./components/Respiracao.vue";
import LoginComponent from "./components/LoginComponent.vue";

export default {
  components: {
    NavbarApp,
    // PacientesComponent
    LoginComponent
},

};
</script>

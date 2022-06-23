<template>
  <v-app>
    <NavbarApp />
    <v-spacer></v-spacer>
    <SinaisVitais />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarApp from "./components/Navbar.vue";
import SinaisVitais from "./components/SinaisVitais.vue";

export default {
  components: {
    NavbarApp,
    SinaisVitais,
  },

};
</script>

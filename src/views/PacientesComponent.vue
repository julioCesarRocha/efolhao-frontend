<template>
    <v-app>
        <!-- <NavbarApp /> -->
        <Pacientes />
        <v-main>
        </v-main>
    </v-app>
</template>

<script>
// import NavbarApp from "../components/Navbar.vue";
import Pacientes from "../components/PacientesComponent.vue";

export default {
    components: {
        // NavbarApp,
        Pacientes,
    },
};
</script>

<style>
.title {
  justify-content: center;
  text-align: center;
  color: #6273DD;
}
</style>
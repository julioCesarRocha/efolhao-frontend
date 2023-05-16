<template>
    <v-app>
        <MenuComponent />
    </v-app>
</template>

<script>
// import NavbarApp from "../components/Navbar.vue";
// import Pacientes from "../components/PacientesComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default {
    components: {
        // NavbarApp,
        // Pacientes,
        MenuComponent,
    },
};
</script>

<style>
    /* .title {
    justify-content: center;
    text-align: center;
    color: #42A5F5;
    } */
</style>
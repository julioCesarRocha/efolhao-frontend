<template>
    <v-app>
        <!-- <NavbarApp /> -->
        <v-spacer></v-spacer>
        <HemodinamicaApp />
        <v-main>
        </v-main>
    </v-app>
</template>

<script>
// import NavbarApp from "../components/Navbar.vue";
import HemodinamicaApp from "../components/Hemodinamica.vue";

export default {
    components: {
        // NavbarApp,
        HemodinamicaApp,
    },
};
</script>
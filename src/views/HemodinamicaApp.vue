<template>
    <v-app>
        <NavbarApp />
        <v-spacer></v-spacer>
        <HemodinamicaApp />
        <v-main>
        </v-main>
    </v-app>
</template>

<script>
import HemodinamicaApp from "./components/Hemodinamica.vue";

export default {
    components: {
        HemodinamicaApp,
    },
};
</script>
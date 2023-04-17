<template>
    <v-app>
        <NavbarApp />
        <v-spacer></v-spacer>
        <SinaisVitais />
        <v-main>
        </v-main>
    </v-app>
</template>

<script>
import NavbarApp from "../components/Navbar.vue";
import SinaisVitais from "../components/SinaisVitais.vue";

export default {
    components: {
        NavbarApp,
        SinaisVitais,
    },
};
</script>

<style>
.title {
  justify-content: center;
  text-align: center;
  color: #42A5F5;
}
</style>
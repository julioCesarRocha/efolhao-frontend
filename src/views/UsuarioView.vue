<template>
    <v-app>
        <v-spacer></v-spacer>
        <Usuario/>
        <v-main>
        </v-main>
    </v-app>
</template>

<script>
import Usuario from "../components/UsuarioComponent.vue";

export default {
    components: {
        Usuario,
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
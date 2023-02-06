<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card @click="redirectToForm1">
            <v-card-title>Sinais Vitais</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card @click="redirectToForm2">
            <v-card-title>Hemodinâmica</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card @click="redirectToForm3">
            <v-card-title>Respiração</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card @click="redirectToForm4">
            <v-card-title>Neurológico</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>

  export default {
    methods: {
      redirectToForm1() {
        this.$router.push({ name: "SinaisVitais" });
      },
      redirectToForm2() {
        this.$router.push({ name: "Hemodinamica" });
      },
      redirectToForm3() {
        this.$router.push({ name: "Hemodinamica" });
      },
      redirectToForm4() {
        this.$router.push({ name: "Neurologico" });
      },
    },
  };
</script>
<style scoped>
    .v-card {
        display: flex;
        justify-content: center;
        height: 250px;
        width: 400px;
        background-color: #5faff0;
        color: white;
        /* flex-wrap: wrap; */

    }
</style>
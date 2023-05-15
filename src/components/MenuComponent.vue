<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-card @click="redirectToForm1">
            <v-card-title>Sinais Vitais</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card @click="redirectToForm2">
            <v-card-title>Hemodinâmica</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card @click="redirectToForm3">
            <v-card-title>Respiração</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card @click="redirectToForm4">
            <v-card-title>Neurológico</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card-title class="title">
      <h3>Dashboard</h3>
    </v-card-title>
    <div class="dashboard">
      <img
        :src="require('@/assets/img-dashboard.png')"
        alt="Banner"
        id="navbar-banner"
      />
    </div>
  </v-app>
</template>
  
<script>
import router from "@/router";
export default {
  router,
  methods: {
    redirectToForm1() {
      this.$router.push({ name: "SinaisVitais" });
    },
    redirectToForm2() {
      this.$router.push({ name: "Hemodinamica" });
    },
    redirectToForm3() {
      this.$router.push({ name: "Respiracao" });
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
  align-items: space-between;
  /* flex-direction: row; */
  height: 90px;
  width: 170px;
  background-color: #5faff0;
  color: white;
  margin-top: -40px;
  border-radius: 10px;
  /* flex-wrap: wrap; */
}
.v-card:hover {
  background-color: #3f8ed0;
}
.v-card__title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

.title {
  justify-content: center;
  text-align: center;
  color: #42a5f5;
}

.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

@media screen and (max-width: 770px) {
  .v-card {
    display: block;
    flex-direction: row;
    height: 90px;
    width: 130px;
    background-color: #5faff0;
    color: white;
  }
}
</style>
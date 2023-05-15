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
    <LineChart v-if="dadosCarregados" :registro="registro" />
  </v-app>
</template>

<script>
import LineChart from '@/components/DashBoard.vue';
import Sinais from "../services/sinaisvitais";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      registro: [],
      dadosCarregados: false,
    };
  },
  mounted() {
    const id = 'c48faba9-abbf-4d76-a5ee-e7e1086d6dd0';
  Sinais.listarById(id)
    .then(response => {
      console.log(response);
      this.registro = response.data;
      this.dadosCarregados = true;
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
    redirectToForm1() {
      this.$router.push({ name: 'SinaisVitais' });
    },
    redirectToForm2() {
      this.$router.push({ name: 'Hemodinamica' });
    },
    redirectToForm3() {
      this.$router.push({ name: 'Respiracao' });
    },
    redirectToForm4() {
      this.$router.push({ name: 'Neurologico' });
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

<template>
  <v-app>
    <v-container>
        <v-col cols="12" md="3">
          <v-card @click="redirectToSinaisVitais()">
            <v-card-title>Sinais Vitais</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card @click="redirectToHemodinamica()">
            <v-card-title>Hemodinâmica</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card @click="redirectToRespiracao()">
            <v-card-title>Respiração</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card @click="redirectToNeurologico()">
            <v-card-title>Neurológico</v-card-title>
          </v-card>
        </v-col>
    </v-container>
    <v-card-title class="title">
      <h2>Dashboard</h2>
    </v-card-title>
    <!-- <div > -->
      <LineChart v-if="dadosCarregados" :registro="registro" class="dashboard-temperatura"/>
    <!-- </div> -->
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

  Sinais.listarById(this.$route.params.id)
    .then(response => {
      this.registro = response.data;
      this.dadosCarregados = true;
    })
    .catch(error => {
      console.error(error);
    });
  },
  methods: {
    redirectToSinaisVitais() {
      this.$router.push({ name: 'SinaisVitais', params: { id: this.$route.params.id } });
    },
    redirectToHemodinamica() {
      this.$router.push({ name: 'Hemodinamica', params: { id: this.$route.params.id } });
    },
    redirectToRespiracao() {
      this.$router.push({ name: 'Respiracao', params: { id: this.$route.params.id } });
    },
    redirectToNeurologico() {
      this.$router.push({ name: 'Neurologico', params: { id: this.$route.params.id } });
    },
  },
};
</script>

<style scoped>
.v-card {
  /* display: flex;
  justify-content: center;
  align-items: space-between; */
  /* flex-direction: row; */
  /* height: 90px;
  width: 170px;
  background-color: #5faff0;
  color: white;
  margin-top: -45px;
  border-radius: 10px; */
  /* flex-wrap: wrap; */
  display:flex;
  justify-content: center;
  align-items: center;
  /* height: 200px;
  width: 600px; */
  color: white;
  background-color: #5faff0;;
  height: 100px;
  width: 200px;
  border-radius: 10px; 
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* height: 200px;
    width: 500px; */
    /* background-color: #5faff0;  */
    color: #5faff0;
    margin-top: -45px;
    border-radius: 10px; 
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

.dashboard-temperatura {
  width: 450px;
  height: 250px;
}

@media screen and (max-width: 830px) {
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 90px;
    width: 200px;
    /* background-color: #5faff0; */
    color: white;
    /* margin: 0 auto; */
  }

  .dashboard-temperatura {
  width: 800px;
  height: 250px;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  margin-left: 120px;
  height: 250px;
  /* margin-top: 20px; */
  }

  .v-card {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 125px;
    margin: auto;
  }

  .v-card__title {
    font-size: 0.8rem;
    
  }

  .title {
    margin-top: 40px;
    color: #5faff0;
  }
}
</style>

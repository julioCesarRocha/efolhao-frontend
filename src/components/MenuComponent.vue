<template>
  <v-app>
    <v-container>
      <v-col cols="12" md="3">
        <v-card @click="redirectToSinaisVitais()" class="custom-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-heart-pulse</v-icon>
            <h3 class="text-center">Sinais Vitais</h3>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card @click="redirectToHemodinamica()" class="custom-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-water-outline</v-icon>
            <h3 class="text-center">Hemodinâmica</h3>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card @click="redirectToRespiracao()" class="custom-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-lungs</v-icon>
            <h3 class="text-center">Respiração</h3>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card @click="redirectToNeurologico()" class="custom-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-brain</v-icon>
            <h3 class="text-center">Neurolôgico</h3>
          </v-card-title>
        </v-card>
      </v-col>
    </v-container>
    <v-form>
      <v-row align="start" class="dados-paciente flex flex-row">
        <div class="flex flex-row col-12">
          <v-col cols="12" md="6">
            <label class="title"><b>Paciente</b></label>
            <v-text-field clearable v-model="nome" disabled></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <label class="title"><b>Internação</b></label>
            <v-text-field
              clearable
              v-model="data_internacao"
              disabled
            ></v-text-field>
          </v-col>
        </div>
        <v-col cols="12">
          <div class="text-right">
            <v-btn color="success" @click="altaPaciente">Alta</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
    <v-card-title class="title" align="start"><h2>Dashboard</h2></v-card-title>
    <v-row class="chart">
      <v-col cols="12" md="4">
        <v-card-subtitle class="title">Temperatura</v-card-subtitle>
        <v-responsive>
          <v-row class="alerta-tempertatura">
            <v-col cols="12" sm="6">
              <v-alert
                v-if="verificarTemperaturaExcedida()"
                type="error"
                dense
              >
              Foi registrada ao menos uma temperatura acima de 37,0 ºC
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12">
              <LineChart
                v-if="dadosCarregados"
                :registro="registro"
                class="dashboard"
              />
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
      <v-col cols="12" md="4">
        <v-card-subtitle class="title">Frequência Cardíaca</v-card-subtitle>
        <v-responsive>
          <DashBoardFrequenciaCardiaca
            v-if="dadosCarregados"
            :frequencia_cardiaca="frequencia_cardiaca"
            class="dashboard"
          />
        </v-responsive>
      </v-col>
      <v-col cols="12" md="4">
        <v-card-subtitle class="title">Pressão Arterial</v-card-subtitle>
        <v-responsive>
          <DashBoardPressaoArterial
            v-if="dadosCarregados"
            :pa_media="pa_media"
            class="dashboard"
          />
        </v-responsive>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import LineChart from "@/components/DashBoard.vue";
import Sinais from "../services/sinaisvitais";
import DashBoardFrequenciaCardiaca from "@/components/DashBoardFrequenciaCardiaca.vue";
import DashBoardPressaoArterial from "@/components/DashBoardPressaoArterial.vue";
import { format } from "date-fns";

// import Usuario from "../services/usuario";

export default {
  components: {
    LineChart,
    DashBoardFrequenciaCardiaca,
    DashBoardPressaoArterial,
  },
  data() {
    return {
      registro: [],
      frequencia_cardiaca: [],
      pa_media: [],
      dadosCarregados: false,
      nome: "",
      data_internacao: "",
    };
  },
  mounted() {
    Sinais.listarById(this.$route.params.id)
      .then((response) => {
        this.registro = response.data;
        this.dadosCarregados = true;
        this.nome = this.$route.params.nome;
        this.data_internacao = format(
          new Date(this.$route.params.dataInternacao),
          "dd/MM/yyyy"
        );
        this.frequencia_cardiaca = response.data;
        this.pa_media = response.data;
      })
      .catch((error) => {
        console.error(error);
      });

    // const usuario = Usuario.getUsuario(this.$route.params.id);
    // console.log('usuario ' + usuario);
    // Usuario.getUsuario(this.$route.params.id)
    //   .then(response => {
    //     console.log('getUsuario ' +  response.data);
    //     // this.nome = response.data.nome;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  },
  methods: {
    redirectToSinaisVitais() {
      this.$router.push({
        name: "SinaisVitais",
        params: { id: this.$route.params.id },
      });
    },
    redirectToHemodinamica() {
      this.$router.push({
        name: "Hemodinamica",
        params: { id: this.$route.params.id },
      });
    },
    redirectToRespiracao() {
      this.$router.push({
        name: "Respiracao",
        params: { id: this.$route.params.id },
      });
    },
    redirectToNeurologico() {
      this.$router.push({
        name: "Neurologico",
        params: { id: this.$route.params.id },
      });
    },
    altaPaciente() {
      this.$dialog
        .confirm("Deseja dar alta ao paciente?")
        .then((dialog) => {
          if (dialog.confirmed) {
            this.$set(this.registro, "st_alta", 1);
          }
        })
        .catch(() => {
          return;
        });
    },

    verificarTemperaturaExcedida() {
      if (this.registro && this.registro.length > 0) {
        const temperaturas = this.registro.map((item) => item.temperatura);
        return temperaturas.some((temp) => temp > 37.0);
      }
      return false;
    },
  },
};
</script>

<style scoped>
.v-card {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #6273dd;
  height: 100px;
  width: 200px;
  border-radius: 10px;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #6273dd;
  margin-top: -45px;
  border-radius: 10px;
}
.v-card:hover {
  background-color: #6273dd;
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
  color: #6273dd;
}

.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 450px;
  height: 250px;
}

.dados-paciente {
  padding: 20px;
  margin-top: 20px;
}

.custom-card {
  width: 300px;
}

.custom-card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 830px) {
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 90px;
    width: 200px;
    color: white;
  }

  .dashboard {
    width: 800px;
    height: 250px;
  }

  .v-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: auto;
  }

  .v-card__title {
    font-size: 0.8rem;
  }

  .title {
    margin-top: 40px;
    color: #6273dd;
  }

  .dashboard-temperatura,
  .dashboard-freq-card,
  .dashboard-pa-media {
    width: 100%;
    margin-top: 40px;
    overflow-x: auto;
  }

  .chart {
    height: 100px;
    display: flex;
    align-items: flex-start;
    /* justify-content: center; */
    margin: auto;
    width: auto;
    height: auto;
  }
  .flex-row {
    flex-direction: row;
  }

  .alerta-tempertatura {
    display: flex;
    justify-content: space-around;
  }
}
</style>

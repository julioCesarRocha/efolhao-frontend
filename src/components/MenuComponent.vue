<template>
  <v-app>
    <v-container>
      <v-col cols="12" md="3">
        <v-card @click="redirectToSinaisVitais()" class="custom-card" id="v-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-heart-pulse</v-icon>
            <h3 class="text-center">Sinais Vitais</h3>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card @click="redirectToHemodinamica()" class="custom-card" id="v-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-water-outline</v-icon>
            <h3 class="text-center">Hemodinâmica</h3>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card @click="redirectToRespiracao()" class="custom-card" id="v-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-lungs</v-icon>
            <h3 class="text-center">Respiração</h3>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card @click="redirectToNeurologico()" class="custom-card" id="v-card">
          <v-card-title class="custom-card-title">
            <v-icon color="white">mdi-brain</v-icon>
            <h3 class="text-center">Neurolôgico</h3>
          </v-card-title>
        </v-card>
      </v-col>
    </v-container>
    <v-form>
     <div class="flex flex-row col-12">
      <v-row align="start" class="dados-paciente flex flex-row">
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="4">
              <label class="title"><b>Paciente</b></label>
              <br />
              <h3 class="nome">{{ nome }}</h3>
            </v-col>
            <v-col cols="4">
              <label class="title"><b>Internação</b></label>
              <br />
              <h3 class="internacao">{{ data_internacao }}</h3>
            </v-col>
            <v-col cols="4" class="text-right">
              <br />
              <v-btn color="success" @click="altaPaciente">Alta</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-form>

    <br />
    <v-row class="alerta-tempertatura">
      <v-col cols="12" sm="6">
        <v-alert
          v-if="dadosNaoEncontrados"
          type="info"
          dense
          elevation="4"
        >
        Ainda não foram cadastrados dados para este paciente
        </v-alert>
      </v-col>
    </v-row>
    
    <v-card-title v-if="!dadosNaoEncontrados" class="title" align="start"><h2>Dashboard</h2></v-card-title>
    <v-row v-if="!dadosNaoEncontrados" class="chart">
      <v-card class="cards-dashboards" elevation="10">
        <v-row>
          <v-col cols="12" md="4">
            <v-card-title class="title-dashboard">
              <h2>Temperatura</h2>
            </v-card-title>
              <v-row class="alerta-tempertatura">
                <v-col cols="12" sm="6">
                  <v-alert
                    v-if="verificarTemperaturaExcedida()"
                    type="error"
                    dense
                  >
                  Foi registrada ao menos uma temperatura acima de 37,8 ºC
                  </v-alert>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12">
                    <v-responsive>
                    <LineChart
                      v-if="dadosCarregados"
                      :registro="registro"
                      class="dashboard"
                    />
                  </v-responsive>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="cards-dashboards" elevation="10">
        <v-row>
          <v-col cols="12" md="4">
            <v-responsive>
              <v-card-title class="title-dashboard">
                <h2>Frequência Cardíaca</h2>
              </v-card-title>
              <DashBoardFrequenciaCardiaca
                v-if="dadosCarregados"
                :frequencia_cardiaca="frequencia_cardiaca"
                class="dashboard"
              />
            </v-responsive>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="cards-dashboards" elevation="10">
        <v-row>
          <v-col cols="12" md="4">
            <v-responsive>
              <v-card-title class="title-dashboard">
                <h2>Pressão Arterial</h2>
              </v-card-title>
              <DashBoardPressaoArterial
                v-if="dadosCarregados"
                :pa_media="pa_media"
                class="dashboard"
              />
            </v-responsive>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
import LineChart from "@/components/DashBoard.vue";
import Sinais from "../services/sinaisvitais";
import DashBoardFrequenciaCardiaca from "@/components/DashBoardFrequenciaCardiaca.vue";
import DashBoardPressaoArterial from "@/components/DashBoardPressaoArterial.vue";
import { format } from "date-fns";
import Usuario from "../services/usuario";

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
      dadosNaoEncontrados: false
    };
  },
  mounted() {
    Usuario.getUsuario(this.$route.params.id)
    .then((response) => {
      this.nome = response.data.nome;
      this.data_internacao = format(
        new Date(response.data.data_criacao),
        "dd/MM/yyyy"
      );
    })
    .catch((error) => {
      console.error(error);
    });

    Sinais.listarById(this.$route.params.id)
      .then((response) => {
        console.log('resposta ' + response.data);
        this.registro = response.data;
        this.dadosCarregados = true;
        this.nome = this.nome ? this.nome : this.$route.params.nome;
        this.data_internacao = format(
          new Date(this.$route.params.dataInternacao),
          "dd/MM/yyyy"
        );
        this.frequencia_cardiaca = response.data;
        this.pa_media = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          this.dadosNaoEncontrados = true;
        } else {
          console.error(error);
        }
      });

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
        return temperaturas.some((temp) => temp > 37.8);
      }
      return false;
    },
  },
};
</script>

<style scoped>
#v-card {
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
#v-card:hover {
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
  margin-top: 40px;
}

.title-dashboard {
  margin-top: 5px;
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
  margin-top: 35px;
}

.custom-card {
  width: 300px;
}

.custom-card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cards-dashboards {
  max-width: 650px;
  margin: 20px;
  border-radius: 15px;
  display: flex;
  padding: 25px;
  flex-direction: row;
  justify-content: center;
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

  #v-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: auto;
  }

  .v-card__title {
    font-size: 0.8rem;
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
    width: auto;
    height: auto;
    justify-content: space-around;
  }

  .flex-row {
    flex-direction: row;
  }

  .alerta-tempertatura {
    display: flex;
    justify-content: space-around;
  }

  .alerta-wrapper {
    display: flex;
    justify-content: center;
  }

  .alerta-centralizado {
    margin: auto;
  }

  #app {
    background-color: #F4F5F7;
  }
}
</style>

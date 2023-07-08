<template>
  <v-app>
    <v-form  id="form-respiracao">
      <v-container fluid class="container-padding">
        <div>
          <v-alert
            :value="showSuccessAlert"
            type="success"
            dismissible
            @input="showSuccessAlert = false"
          >
            Cadastro relizado com sucesso!
          </v-alert>
          <v-card-title class="title">
            <h3>Dados Respiratórios</h3>
          </v-card-title>
        </div>
        <v-card class="custom-card" elevation="10">
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="modo_esp"
                label="Modo Espontâneo"
                :items="listaModoEsp"
                required
              >
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="modo_vm"
                label="Modo VM"
                :items="listaModoVm"
                required
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="fi02"
                label="Fração Inspirada de Oxigênio - Fi02 (%)"
                :items="listaFi02"
                required
              >
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="peep"
                label="Pressão Expiratória Final Positiva (PEEP)"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="p_pico" label="Pressão de Pico" required>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="volume_corrente"
                label="Volume Corrente (ml)"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <div id="div-botoes" align="right">
            <v-btn color="success" class="mr-4" @click="salvar">Salvar</v-btn>

            <v-btn color="error" class="mr-4" @click="redirecionarPaciente"> Cancelar </v-btn>
          </div>
        </v-card>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import Respiracao from "../services/respiracao";

export default {
  name: "RespiracaoComponent",
  data() {
    return {
      showSuccessAlert: false,

      modo_esp: this.modo_esp,
      modo_vm: this.modo_vm,
      fi02: this.fi02,
      peep: this.peep,
      p_pico: this.p_pico,
      volume_corrente: this.volume_corrente,

      listaModoEsp: [
        "Ambiente",
        "Cateter Nasal",
        "Máscara de Venturi",
        "Ventilação Não-Invasiva",
        "VM Em Modo Espontâneo/CPAP",
      ],
      listaModoVm: ["CPAP", "PCV", "VCV"],
      listaFi02: [24, 28, 32, 36],
    };
  },

  methods: {
    mounted() {},

    async salvar() {
      const data = {
        modo_esp: this.modo_esp,
        modo_vm: this.modo_vm,
        fi02: this.fi02,
        peep: this.peep,
        p_pico: this.p_pico,
        volume_corrente: this.volume_corrente,
        id_usuario: this.$route.params.id,
      };

      const resposta = await Respiracao.inserirDadosRespiratorios(data);
      const form = document.getElementById("form-respiracao");
      const elementosSelecionados = form.getElementsByTagName("select");

      if (resposta.status === 200) {
        this.showSuccessAlert = true;
        for (let i = 0; i < elementosSelecionados.length; i++) {
          elementosSelecionados[i].selectedIndex = 0;
        }
        if (this.showSuccessAlert == true) {
          setTimeout(() => {
            this.$router.push({
              name: "MenuComponent",
              params: { id: this.$route.params.id },
            });
          }, 3000);
        }
      }
    },
    redirecionarPaciente() {
      this.$router.push({
        name: "MenuComponent",
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Days One", sans-serif;
  margin: 0;
}

#form-sinais-vitais {
  font-family: "Days One", sans-serif;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.title {
  justify-content: center;
  text-align: center;
  color: #6273dd;
}

.container-padding {
  padding: 55px;
}

.custom-card {
  max-width: 800px; 
  margin: 10px auto;
  padding: 40px;
  margin-top: 5px;
  border-radius: 15px;
}

.v-form {
  margin-top: -60px;
}

#app {
  background-color: #F4F5F7;
}
</style>


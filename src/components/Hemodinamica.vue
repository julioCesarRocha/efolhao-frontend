<template>
  <v-app>
    <v-form id="form-hemodinamica">
      <v-container fluid class="container-padding">
        <div>
          <v-alert
            :value="showSuccessAlert"
            type="success"
            dismissible
            @input="showSuccessAlert = false"
          >
            Dados cadastros com sucesso!
          </v-alert>
          <v-card-title class="title">
            <h3>Dados Hemodinâmicos</h3>
          </v-card-title>
        </div>
        <v-card class="custom-card" elevation="10">
          <v-row>
            <v-col cols="12" md="6">
              <v-subheader>Pressão Venosa Central (PVC)</v-subheader>
              <v-slider
                v-model="pressao_venosa_central"
                step="0.5"
                thumb-label
                ticks
                min="-10"
                max="30"
                required
              >
              </v-slider>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="pap"
                label="Pressão da Artéria Pulmonar (PAP)"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="poap"
                label="Pressão de Oclusão da Artéria Pulmonar (POAP)"
                required
              >
              </v-text-field>
            </v-col>
            <!-- <v-col cols="12" md="4">
            <v-text-field
              v-model="poap"
              label="Pressão Capilar Pulmonar (PCP)"
              required
              
            >
            </v-text-field>
          </v-col> -->

            <!-- <v-col cols="12" md="4">
            <v-text-field
              v-model="sv02"
              label="Saturação Arterial de Oxigênio (SAO2)"
              required
            ></v-text-field>
          </v-col> -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="sv02"
                label="Saturação Venosa de Oxigênio (SVO2)"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-subheader>Débito Cardíaco (L/min)</v-subheader>
              <v-slider
                v-model="debito_cardiaco"
                step="0.5"
                thumb-label
                ticks
                min="0"
                max="30"
                @change="calcularIc"
              >
              </v-slider>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="ic"
                label="Índice Cardíaco (L/min/m2)"
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
import Hemodinamica from "../services/hemodinamica";
import Usuario from "../services/usuario";

export default {
  name: "HemodinamicaApp",
  data() {
    return {
      showSuccessAlert: false,
      pressao_venosa_central: this.pressao_venosa_central,
      pap: this.pap,
      poap: this.poap,
      ic: this.ic,
      sv02: this.sv02,
      debito_cardiaco: this.debito_cardiaco,
    };
  },
  methods: {
    mounted() {
      Hemodinamica.listar().then((resposta) => {
        console.log(resposta.data);
        this.hemodinamica = resposta.data;
      });
    },

    async salvar() {
      const data = {
        pressao_venosa_central: this.pressao_venosa_central,
        pap: this.pap,
        poap: this.poap,
        ic: this.ic,
        sv02: this.sv02,
        debito_cardiaco: this.debito_cardiaco,
        id_usuario: this.$route.params.id,
      };

      const resposta = await Hemodinamica.salvar(data);
      if (resposta.status === 200) {
        this.showSuccessAlert = true;
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
    calcularIc() {
      Usuario.getUsuario(this.$route.params.id)
      .then((response) => {
        var indiceCorporeo = (response.data.peso*4)/ response.data.peso + 90;
        this.ic = parseFloat((this.debito_cardiaco / indiceCorporeo).toFixed(4));
      }).catch((error) => {
      console.error(error);
    });

    }
  },
};
</script>

<style scoped>
* {
  font-family: "Days One", sans-serif;
  margin: 0;
}
/* 
#form-sinais-vitais {
  font-family: "Days One", sans-serif;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
} */

#div-botoes {
  margin-top: 10px;
  margin-right: 25px;
}

.title {
  justify-content: center;
  text-align: center;
  color: #6273dd;
}

#app {
  background-color: #f4f5f7;
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

</style>

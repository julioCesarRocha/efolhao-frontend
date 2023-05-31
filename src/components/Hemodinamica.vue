<template>
  <v-app>
    <v-form id="form-hemodinamica">
      <v-container fluid>
        <div>
          <v-alert
            :value="showSuccessAlert"
            type="success"
            dismissible
            @input="showSuccessAlert = false"> Dados cadastros com sucesso!
          </v-alert>
          <v-card-title class="title" >
              <h3>Dados Hemodinâmicos</h3>
          </v-card-title>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="pressao_venosa_central"
              label="Pressão Venosa Central (PVC)"
              required
              
            >
            </v-text-field>
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
            <v-subheader>Índice Cardíaco (IC - (L/min/m2))</v-subheader>
            <v-slider
              v-model="ic"
              step="0.5"
              thumb-label
              ticks
              min="0"
              max="20"
            >
            </v-slider>
          </v-col>
          <v-col cols="12" md="6">
            <v-subheader>Débito Cardíaco (DC - (L/min))</v-subheader>
            <v-slider
              v-model="debito_cardiaco"
              step="0.5"
              thumb-label
              ticks
              min="0"
              max="30"
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-container>

      <div id="div-botoes" align="right">
        <v-btn color="success" class="mr-4" @click="salvar">Salvar</v-btn>

        <v-btn color="error" class="mr-4" > Cancelar </v-btn>
      </div>
    </v-form>
  </v-app>
</template>

<script>
  import Hemodinamica from "../services/hemodinamica";

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
  methods:{

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
      }

      const resposta = await Hemodinamica.salvar(data);
      if (resposta.status === 201) {
        this.showSuccessAlert = true;
        if (this.showSuccessAlert == true) {
          setTimeout(() => {
            this.$router.push({ name: "Pacientes", params: { id: this.$route.params.id } });
          }, 3000);
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Days One", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#form-sinais-vitais {
  font-family: "Days One", sans-serif;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}

#div-botoes {
  margin-top: 10px;
  margin-right: 25px;
  /* display: flex;
  justify-content: space-between; */
}

.title {
  justify-content: center;
  text-align: center;
  color: #42A5F5;
}

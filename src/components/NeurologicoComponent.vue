<template>
  <v-app>
    <v-form>
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
          <v-card-title class="title" >
            <h3>Dados Neurológicos</h3>
          </v-card-title>
        </div>
        <v-card class="custom-card" elevation="10">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="glasgow" label="Glasgow" required> </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select v-model="pupilas" label="Pupilas" :items="listaPupilas" required> </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="sas" label="SAS" required/> 
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="dor" label="Dor" required />        
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="pic" label="PIC" required />        
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="sj02" label="SjO2" required />        
          </v-col>
        </v-row>
        <div id="div-botoes" align="right">
          <v-btn color="success" class="mr-4" @click="salvar">Salvar</v-btn>
  
          <v-btn color="error" class="mr-4"> Cancelar </v-btn>
        </div>
        </v-card>
      </v-container>

    </v-form>
  </v-app>
  </template>

<script>
import Neurologico from "../services/neurologico";

export default {
  name: "NeurologicoComponent",
  data() {
    return {
      showSuccessAlert: false,

      glasgow: this.glasgow,
      pupilas: this.pupilas,
      sas: this.sas,
      dor: this.dor,
      pic: this.pic,
      sj02: this.sj02,

      listaPupilas: ["D=E", "D>E", "D<E", "Sem Reação"],
    };
  },

  methods: {
    mounted() {

    },

    async salvar() {
      const data = {
        glasgow: this.glasgow,
        pupilas: this.pupilas,
        sas: this.sas,
        dor: this.dor,
        pic: this.pic,
        sj02: this.sj02,
        id_usuario: this.$route.params.id,
      };

      const resposta = await Neurologico.inserirDadosNeurologicos(data);
      if (resposta.status === 201) {
        this.showSuccessAlert = true;
        if (this.showSuccessAlert == true) {
          setTimeout(() => {
            this.$router.push({ name: "Pacientes", params: { id: this.$route.params.id } });
          }, 3000);
        }
      }
    },
  },
 

};
</script>

<style scoped>

* {
  font-family: "Days One", sans-serif;
  margin: 0;
}

.title {
  justify-content: center;
  text-align: center;
  color: #6273DD;
}
.container {
  padding: 20px;
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

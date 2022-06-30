<template>
  <v-app>
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sinalVital.frequencia_respiratoria"
              label="FR (rpm)"
              required
              
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sinalVital.pa_sistolica"
              label="PAs"
              required
             
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sinalVital.pa_diastolica"
              label="PAd"
              required
              
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sinalVital.pa_media"
              label="PAm"
              required
              
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sinalVital.saturacao"
              label="spO2"
              required
         
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sinalVital.frequencia_cardiaca"
              label="FC"
              required
            
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <!-- <v-col cols="12" md="4">
            <v-text-field
              v-model="glicemia"
              label="Glicemia"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col> -->
          <v-col cols="12" md="4">
            <v-subheader>Temperatura</v-subheader>
            <v-slider
              v-model="sinalVital.temperatura"
              step="0.5"
              thumb-label
              ticks
              min="30"
              max="45"
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-container>

      <div id="div-botoes" align="right">
        <v-btn color="success" class="mr-4" @submit="salvar">Salvar</v-btn>

        <v-btn color="error" class="mr-4" > Cancelar </v-btn>
      </div>
    </v-form>
  </v-app>
</template>

<script>
import Sinais from "../services/sinaisvitais";

export default {
  name: "SinaisVitais",
  data() {
    return {
      sinalVital: {
        frequencia_respiratoria: this.frequencia_respiratoria,
        pa_sistolica: this.pa_sistolica,
        pa_diastolica: this.pa_diastolica,
        pa_media: this.pa_media,
        saturacao: this.saturacao,
        frequencia_cardiaca: this.saturacao,
        temperatura: this.temperatura,
      },
      sinaisvitais: [],
    };
  },

  mounted() {
    Sinais.listar().then((resposta) => {
      console.log(resposta.data);
      this.sinaisvitais = resposta.data;
    });
    
  },

  methods:{
    async salvar() {
      Sinais.salvar(this.sinalVital).then(resposta => {
        alert(resposta.data)
      })
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

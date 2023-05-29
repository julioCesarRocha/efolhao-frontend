<template>
  <v-app>
    <v-form>
      <v-container fluid>
        <div>
        <!-- Alerta de registro salvo com sucesso -->
          <v-alert
            :value="showSuccessAlert"
            type="success"
            dismissible
            @input="showSuccessAlert = false"
          >
            Dados cadastros com sucesso!
          </v-alert>
          <v-card-title class="title">
            <h2>Sinais Vitais</h2>
          </v-card-title>
          
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="frequencia_respiratoria"
              label="Frequência Respiratória (FR (ipm))"
              required
              
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="pa_sistolica"
              label="Pressão Arterial Sistólica (PAs)"
              required
             
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="pa_diastolica"
              label="Pressão Arterial Diastólica (PAd)"
              required
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="pa_media"
              label="Pressão Arterial Média (PAm)"
              required
              disabled
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="saturacao"
              label="Saturação de Pulso de Oxigênio (SPO2)"
              required
         
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="frequencia_cardiaca"
              label="Frequência Cardíaca (FC)"
              required
            
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-subheader>Temperatura</v-subheader>
            <v-slider
              v-model="temperatura"
              step="0.5"
              thumb-label
              ticks
              min="30"
              max="60"
            >
            </v-slider>
          </v-col>
        </v-row>
      </v-container>

      <div id="div-botoes" align="right">
        <v-btn color="success" class="mr-4" @click="salvar">Salvar</v-btn>

        <v-btn color="error" class="mr-4"> Cancelar </v-btn>
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
      showSuccessAlert: false,
      frequencia_respiratoria: "",
      pa_sistolica: "",
      pa_diastolica: "",
      pa_media: "",
      saturacao: "",
      frequencia_cardiaca: "",
      temperatura: "",
    };
  },
  methods: {
    calcularPaMedia() {
      const ps = Number(this.pa_sistolica);
      const pd = Number(this.pa_diastolica);
        if (!isNaN(ps) && !isNaN(pd)) {
          // const pm = ps + (pd * 2) / 3;
          const pm = ((Math.pow(pd, 2)) + ps)/3;
          this.pa_media = pm.toFixed(2);
        } else {
          this.pa_media = "";
        }
    },
    async salvar() {
      const data = {
        frequencia_respiratoria: this.frequencia_respiratoria,
        pa_sistolica: this.pa_sistolica,
        pa_diastolica: this.pa_diastolica,
        pa_media: this.pa_media,
        saturacao: this.saturacao,
        frequencia_cardiaca: this.saturacao,
        temperatura: this.temperatura,
        id_usuario: this.$route.params.id,
      };

      const resposta = await Sinais.salvar(data);
      if (resposta.status === 201) {
        this.showSuccessAlert = true;
        if (this.showSuccessAlert == true) {
          setTimeout(() => {
            this.$router.push({ name: "MenuComponent", params: { id: this.$route.params.id } });
          }, 3000);
        }
      }
    },
    limparFormulario() {
      this.frequencia_respiratoria = "";
      this.pa_sistolica = "";
      this.pa_diastolica = "";
      this.pa_media = "";
      this.saturacao = "";
      this.frequencia_cardiaca = "";
      this.temperatura = "";
    },
  },
  watch: {
    pa_sistolica: function () {
      this.calcularPaMedia();
    },
    pa_diastolica: function () {
      this.calcularPaMedia();
    },
  },
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

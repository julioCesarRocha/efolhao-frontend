<template>
    <v-form>
      <v-card>
        <v-card-title>
          Pacientes
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="patient in patients" :key="patient.id" @click="detalharPaciente(patient.id)">
              <v-list-item-content>
                <v-list-item-title>{{ patient.nome }}</v-list-item-title>
                <v-list-item-subtitle>{{ new Date(patient.data_nascimento).toLocaleDateString('pt-BR') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-form>
</template>


<script>
import Usuario from "../services/usuario";

export default {
  data() {
    return {
      headers: [
        {
          text: 'Nome',
          value: 'nome',
        },
        {
          text: 'Idade',
          value: 'idade',
        },
      ],
      patients: [],
    };
  },
  mounted() {
    this.fetchPatients();
  },
  methods: {
    async fetchPatients() {
      try {
        const response = await Usuario.getPacientes();
        this.patients = response.data;
        console.log(this.patients);
      } catch (error) {
        console.error(error);
      }
    },
  },
};


</script>

<style scoped>
.v-card {
  padding: 10px;
  align-content: center;
  color: #42A5F5;
  margin: 0 auto;
  max-width: 500px;
  margin-top: 15px;

}
/* 
  .v-list-item :hover {
    background-color: #d8ecfc;
    border: 1px solid #eaf2f8;
    box-shadow: 0 0 5px 0 #d8ecfc;
    color: #fff;
  }  */

  .v-card__title {
    justify-content: center;
    text-align: center;
    color: #42A5F5;
  }


</style>

<template>
  <v-form>
    <v-card-title> Pacientes </v-card-title>
    <v-card>
      <v-card-text>
        <v-list>
          <v-list-item v-for="patient in patients" :key="patient.id" @click="detalharPaciente(patient.id)">
            <input type="hidden" :value="patient.id" />
            <v-list-item-content>
              <v-list-item-title>{{ patient.nome }}</v-list-item-title>
              <v-list-item-subtitle>{{
                new Date(patient.data_nascimento).toLocaleDateString("pt-BR")}}
              </v-list-item-subtitle>
              <v-divider :thickness="4"></v-divider>
            </v-list-item-content>
            <!-- <v-btn color="success" class="ml-auto mr-2">Alta</v-btn> -->
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
          text: "Nome",
          value: "nome",
        },
        {
          text: "Idade",
          value: "idade",
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
    detalharPaciente(id) {
      this.$router.push({ name: "MenuComponent", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.v-card {
  padding: 10px;
  align-content: center;
  color: #42a5f5;
  margin: 0 auto;
  max-width: 500px;
  margin-top: 10px;
}

.v-card__title {
  justify-content: center;
  text-align: center;
  color: #42a5f5;

}
</style>

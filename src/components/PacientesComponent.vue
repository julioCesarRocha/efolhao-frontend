<template>
  <v-app>
    <v-card-title> 
      <h2>Pacientes</h2> 
      <v-btn color="success" class="ml-auto mr-2" @click="cadastrarPaciente">Novo</v-btn>
    </v-card-title>
    <v-card class="custom-card" elevation="10">
      <v-row class="cabecalho">
          <v-col cols="6">
            <h3>NOME</h3>
          </v-col>
          <v-col cols="6" class="internacao">
            <h3>INTERNAÇÃO</h3>
          </v-col>
        </v-row>
        <v-divider :thickness="7"></v-divider>
      <v-card-text>
        <!-- <v-list> -->
          <v-list-item v-for="patient in patients" :key="patient.id" @click="detalharPaciente(patient.id, patient.nome, patient.data_criacao)">
            <input type="hidden" :value="patient.id" />
            <v-list-item-content>
              <v-row>
                <v-col cols="6">
                  <v-list-item-title>{{ patient.nome }}</v-list-item-title>
                </v-col>
                <v-col cols="6" align="right">
                  <v-list-item-subtitle>{{
                    new Date(patient.data_criacao).toLocaleDateString("pt-BR")}}
                  </v-list-item-subtitle>
                </v-col>
              </v-row>
              <!-- <v-list-item-title>{{ patient.nome }}</v-list-item-title>
              <v-list-item-subtitle>{{
                new Date(patient.data_nascimento).toLocaleDateString("pt-BR")}}
              </v-list-item-subtitle> -->
              <v-divider :thickness="7"></v-divider>
            </v-list-item-content>
            <!-- <v-btn color="success" class="ml-auto mr-2">Alta</v-btn> -->
          </v-list-item>
        <!-- </v-list> -->
      </v-card-text>
    </v-card>
  </v-app>
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
      } catch (error) {
        console.error(error);
      }
    },
    detalharPaciente(id, nome, dataInternacao) {
      console.log(this.patients);
      this.$router.push({ name: "MenuComponent", params: { id: id, nome: nome, dataInternacao: dataInternacao} });
    },
    cadastrarPaciente() {
      this.$router.push({ name: "UsuarioComponent" });
    },
  },
};
</script>

<style scoped>

.custom-card {
  max-width: 800px; /* Ajuste o valor conforme necessário */
  margin: 0 auto;
  padding: 20px;
  margin-top: 5px;
  border-radius: 15px;
}

.v-card__text {
  width: 500px;
}

.v-card__title {
  justify-content: left;
  text-align: left;
  color: #6273DD;
  padding: 40px;

}

.v-list {
  margin: 0 auto;
  box-shadow: 30px 30px 25px 10px rgba(0, 0, 0, 0.2);
  max-width: 650px;
  margin-top: 20px;
}

#app {
  background-color: #F4F5F7;
}

.header-col {
  display: flex;
  justify-content: space-between;
}

.cabecalho {
  margin: -15px auto;
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;

}

.internacao {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>

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
            Cadastro do paciente relizado com sucesso!
          </v-alert>
          <v-card-title class="title" >
            <h3>Cadastrar Paciente</h3>
          </v-card-title>
        </div>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="nome" label="Nome" required> </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="cpf" label="CPF"> </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="Data Nascimento" type="date" v-model="data_nascimento" :rules="dateRules" clearable/> 
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="2">
            <v-text-field v-model="peso" label="Peso" required />        
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="reg" label="Reg" required />        
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="convenio" label="Convênio" required />        
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="leito" label="Leito" required />        
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
import Usuario from "../services/usuario";

export default {
  name: "UsuarioComponent",
  data() {
    return {
      showSuccessAlert: false,

      nome: this.nome,
      cpf: this.cpf,
      data_nascimento: this.data_nascimento,
      peso: this.peso,
      reg: this.reg,
      convenio: this.convenio,
      leito: this.leito,

      selectedDate: null,
      // nomeRule: [value => !!value || "O nome é obrigatório"],
      dateRules: [
        value => !!value || "A data é obrigatória",
        value =>
          /^\d{4}-\d{2}-\d{2}$/.test(value) || "A data deve estar no formato YYYY-MM-DD"
      ],
    };
  },

  methods: {
    mounted() {
   
    },

    async salvar() {
      //crie um data com os dados do formulário
      const data = {
        nome: this.nome,
        cpf: this.cpf,
        data_nascimento: this.data_nascimento,
        peso: this.peso,
        reg: this.reg,
        convenio: this.convenio,
        leito: this.leito,
      };

      const resposta = await Usuario.criarUsuario(data);
      if (resposta.status === 201) {
        this.showSuccessAlert = true;
        if (this.showSuccessAlert == true) {
          setTimeout(() => {
            this.$router.push({ name: "Pacientes" });
          }, 3000);
        }
      }
    },

    //   const dataJson = JSON.stringify(data);
    //   const req = await fetch("http://127.0.0.1:8000/hemodinamica/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: dataJson,
    //   });
    //   const res = await req.json();
    //   console.log(res);
    // },
  },
 

};
</script>

<style scoped>
.title {
  justify-content: center;
  text-align: center;
  color: #42A5F5;
;
}
.container {
  margin: 10px;
  padding: auto;
}
</style>

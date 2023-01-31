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
            Cadastro do paciente salvo com sucesso!
          </v-alert>
          <v-card-title class="title" >
            <h3>Cadastrar Paciente</h3>
          </v-card-title>
        </div>
        <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="nome" label="Nome" required > </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="cpf" label="CPF"> </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field label="Data" type="date" v-model="data_nascimento" :rules="dateRules" clearable/> 
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="E-mail" required />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="senha" label="Senha" type="password" required />        
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
      email: this.email,
      senha: this.senha,

      selectedDate: null,
      dateRules: [
        value => !!value || "A data é obrigatória",
        value =>
          /^\d{4}-\d{2}-\d{2}$/.test(value) || "A data deve estar no formato YYYY-MM-DD"
      ]
    };
  },

  methods: {
    mounted() {
    //   // Usuario.listar().then((resposta) => {
    //   //   console.log(resposta.data);
    //   //   this.hemodinamica = resposta.data;
    //   // });
    },

    async salvar() {
      // Sinais.salvar(this.sinalVital).then(response => {
      //   this.produto = {}
      //   alert(response.data)
      // })

      //crie um data com os dados do formulário
      const data = {
        nome: this.nome,
        cpf: this.cpf,
        data_nascimento: this.data_nascimento,
        email: this.email,
        senha: this.senha,
        perfil: 'Admin',
      };

      // const dataJson = JSON.stringify(data)   
      // console.log(dataJson); 
      console.log(data);
      const resposta = await Usuario.criarUsuario(data);
      if (resposta.status === 201) {
        this.showSuccessAlert = true;
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

<style>
.title {
  justify-content: center;
  text-align: center;
  color: #42A5F5;
;
}
</style>

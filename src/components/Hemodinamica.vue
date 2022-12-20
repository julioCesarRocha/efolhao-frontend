<template>
  <v-app>
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="pressao_venosa_central"
              label="Pressão Venosa Central (PVC)"
              required
              
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="pap"
              label="Pressão da Artéria Pulmonar (PAP)"
              required
             
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="poap"
              label="POAP"
              required
              
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="ic"
              label="Índice Cardíaco (IC)"
              required
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="sv02"
              label="svO2"
              required
         
            >
            </v-text-field>
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
        pressao_venosa_central: this.pressao_venosa_central,
        pap: this.pap,
        poap: this.poap,
        ic: this.ic,
        sv02: this.sv02,
    };
  },
  methods:{

  mounted() {
    Hemodinamica.listar().then((resposta) => {
      console.log(resposta.data);
      this.hemodinamica = resposta.data;
    });
    
  },

    // async salvar() {
    //   Sinais.salvar(this.sinalVital).then(response => {
    //     this.produto = {}
    //     alert(response.data)
    //   })
    // }

    async salvar() {
      // e.preventDefault();

      console.log(this.sinalVital);
      const data = {
        pressao_venosa_central: this.pressao_venosa_central,
        pap: this.pap,
        poap: this.poap,
        ic: this.ic,
        sv02: this.sv02,
      }

      const dataJson = JSON.stringify(data)    
      const req = await fetch("http://127.0.0.1:8000/hemodinamica/", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: dataJson
      });
      const res = await req.json()
      console.log(res)

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

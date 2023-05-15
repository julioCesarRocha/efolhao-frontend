
<template>
  <v-app>
    <!-- <div>
      <img
        :src="require('@/assets/banner.png')"
        alt="Banner"
        id="navbar-banner"
      />
    </div> -->
    <v-card-title class="title">
      <h2>Login</h2>
    </v-card-title>
    <v-card width="500" height="400" class="login mx-auto">
      <v-card-text class="pt-4">
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              label="Digite seu login"
              v-model="login"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              label="Digite sua senha"
              v-model="senha"
              type="password"
              min="8"
              :append-icon-cb="() => (e1 = !e1)"
              :rules="passwordRules"
              counter
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-layout justify-space-around>
          <v-btn @click="redirectHome" class="btn-login btn success" width="200">Login</v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      valid: false,
      e1: false,
      password: "",
      passwordRules: [(v) => !!v || "Senha é obrigatória"],
      email: "",
      emailRules: [
        (v) => !!v || "Login é obrigatório",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail deve ser válido",
      ],
    };
  },
  methods: {
    redirectHome() {
      this.$router.push({ name: "Pacientes" });
    },

    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
#toolbar {
  background-color: #42a5f5;
}
.login {
  /* margin-top: 15px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#navbar-banner {
  width: 100%;
  height: 400px; /* por exemplo, altura desejada para a navbar */
}

.btn-login {
  margin-top: 45px;
  /* margin-bottom: 5px; */
}

.title {
  justify-content: center;
  text-align: center;
  color: #42a5f5;
}
</style>


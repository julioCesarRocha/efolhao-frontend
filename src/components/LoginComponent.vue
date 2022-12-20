    <head>
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    </head>

<style>
    #toolbar {
        background-color: #42A5F5;
    }
    .loginOverlay {
      margin-top: 15px;
    }
</style>

<template>
   <v-app>
     <main>
       <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
             
              <v-card width="800" class="mx-auto">
                <v-card-text class="pt-4">
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="Digite seu login"
                          v-model="login"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Digite sua senha"
                          v-model="senha"
                          min="8"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          counter
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="submit" class="btn success">Login</v-btn>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
     </main>
   </v-app>
</template>
<script>

export default {
        data () {
          return {
            valid: false,
            e1: false,
            password: '',
            passwordRules: [
              (v) => !!v || 'Senha é obrigatória',
            ],
            email: '',
            emailRules: [
              (v) => !!v || 'Login é obrigatório',
              (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
          }
        },
        methods: {
          submit () {
            if (this.$refs.form.validate()) {
              
              this.$refs.form.$el.submit()
            }
          },
          clear () {
            this.$refs.form.reset()
          }
        },
    }

</script>

<template>
  <form id="form-sinais-vitais">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fr"
              label="FR (rpm)"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="pas"
              label="PAs"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="pad"
              label="PAd"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="pam"
              label="PAm"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="spo2"
              label="spO2"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fc"
              :error-messages="emailErrors"
              label="FC"
              required
              @input="$v.fr.$touch()"
              @blur="$v.fr.$touch()"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-subheader>Temperatura</v-subheader>
            <v-slider
              v-model="value"
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
      <v-btn color="success" class="mr-4" @click="validate">Salvar</v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Cancelar </v-btn>
    </div>
  </form>

</template>

<script>
export default {
  name: "SinaisVitais",
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
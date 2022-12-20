<template>
  <div>
    <v-app-bar color="blue lighten-1" dense dark height="80px"> 
      <v-row align="center" justify="space-around">
        <!-- <router-link to="/">
          <v-btn text>Sinais Vitais</v-btn>
        </router-link>
        <router-link to="/hemodinamica">
          <v-btn text>Hemodinâmica</v-btn>
        </router-link>
        <router-link to="/">
          <v-btn text>Respiração</v-btn>
        </router-link>
        <router-link to="/">
          <v-btn text>Neurológico</v-btn>
        </router-link> -->
      </v-row>
    </v-app-bar>
   
      <!-- <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link> -->
    
  </div>
</template>

<script>
export default {
  name: "NavbarApp",
  props: ["logo", "alt"],
};
</script>

<style scoped>

</style>
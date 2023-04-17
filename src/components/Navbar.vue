<template>
  <div>
    <v-app-bar color="blue lighten-1" dense dark height="80px"> 
      <v-row align="center" justify="space-around">
        <!-- <router-link id="logo-url" to="/">
          <img id="logo" :src="logo" :alt="alt">
        </router-link> -->
      </v-row>
    </v-app-bar>
    
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
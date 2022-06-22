<template>
  <div>
    <div id="nav">
      <!-- <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link> -->
      <v-row align="center" justify="space-around">
        <v-btn text color=""> Sinais Vitais </v-btn>
        <v-btn text> Hemodinâmica </v-btn>
        <v-btn text> Respiração </v-btn>
        <v-btn text> Neurológico </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarApp",
  props: ["logo", "alt"],
};
</script>

<style scoped>
#nav {
  background-color: rgb(33, 163, 214);
  /* border-bottom: 4px solid #111; */
  min-height: 80px;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #logo-url {
  margin: auto;
  margin-left: 0;
}
#logo {
  width: 40px;
  height: 40px;
}
#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}
#nav a:hover {
  color: #fff;
}
</style>
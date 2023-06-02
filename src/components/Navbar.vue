<template>
  <div class="div-img">
    <img :src="require('@/assets/banner.png')" alt="Minha imagem" id="navbar-banner">
  </div>
</template>

<script>
export default {
  name: "NavbarApp",
  props: ["logo", "alt"],
};
</script>

<style scoped>
   #navbar-banner {
    width: 100%;
    height: 200px; /* por exemplo, altura desejada para a navbar */
    /* object-fit: cover; */
  }

  .div-img {
    background-color: #f1f1f1;
  }
</style>
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
    height: 200px; 
    /* object-fit: cover; */
  }

  .div-img {
    background-color: #F4F5F7;
  }
</style>
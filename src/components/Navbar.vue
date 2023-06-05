<template>
  <div class="div-img">
    <img
      :src="require('@/assets/banner.png')"
      alt="Minha imagem"
      id="navbar-banner"
    />
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
  /* object-fit: fill; */
}

.div-img {
  background-color: #f4f5f7;
}

@media screen and (max-width: 830px) {
  #navbar-banner {
    width: 100%;
    height: 200px;
    object-fit: fill;
  }
}
</style>
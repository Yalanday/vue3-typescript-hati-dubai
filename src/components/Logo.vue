<script setup>

</script>

<template>
  <router-link to="/" class="logo-link">
    <img src="/logoo.png" width="150" height="39" alt="Logo">
  </router-link>
</template>

<style scoped>
.logo-link {
  height: 50px;
  width: 160px;
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0 5px;
}

@media (max-width: 768px) {
  .logo-link {
    width: 110px;
  }

  .logo-link img {
    width: 100px;
  }
}

</style>
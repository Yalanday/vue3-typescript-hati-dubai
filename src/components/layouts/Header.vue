<script setup>
import Logo from "@/components/Logo.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import HeaderFilter from "@/components/HeaderFilter.vue";
import HeaderFavorites from "@/components/HeaderFavorites.vue";
import HeaderConnection from "@/components/HeaderConnection.vue";
</script>

<template>
  <header id="header" class="header">
    <div class="header__container container">
      <div class="header__logo">
        <Logo/>
      </div>
      <header-nav/>
      <header-filter/>
      <header-favorites/>
      <header-connection/>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 93px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
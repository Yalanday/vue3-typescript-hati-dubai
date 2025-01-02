<script setup>
import Logo from "@/components/Logo.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import HeaderFilter from "@/components/HeaderFilter.vue";
import IconFavorite from "@/components/HeaderFavorite.vue";
import HeaderConnection from "@/components/HeaderConnection.vue";
import BurgerButton from "@/components/BurgerButton.vue";
import {ref} from "vue";


const isOpen = ref(false);
const toggleNav = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <header id="header" class="header">
    <div class="header__container container">
      <div class="header__logo">
        <Logo/>
      </div>
      <header-nav :isOpen="isOpen"/>
      <header-filter/>
      <icon-favorite class="header__favorite"/>
      <header-connection/>
      <burger-button @click="toggleNav" :isOpen="isOpen"/>
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
  position: relative;
}

@media (max-width: 768px) {
  .header__favorite {
    display: none;
  }

}

</style>
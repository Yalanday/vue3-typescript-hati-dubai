<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import UpButton from "@/components/UpButton.vue";

</script>

<template>
  <Header/>
  <main>
    <router-view/>
  </main>
  <Footer/>
  <up-button/>
</template>

<style scoped>

</style>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import UpButton from "@/components/UpButton.vue";
import {onMounted} from "vue";
import {getCurrentExValutes} from "@/api/api-valute";

onMounted(async () => {
  // проверка для записи данных курса доллара в локальное хранилище
  const today = new Date().toISOString().split('T')[0];
  const storedDate = localStorage.getItem('date');
  if (storedDate !== today) {
    const cursDollar = await getCurrentExValutes();
    localStorage.setItem('cursDollar', String(cursDollar));
    localStorage.setItem('date', today);
  }
});

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

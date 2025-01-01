<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import UpButton from "@/components/UpButton.vue";
import {onMounted} from "vue";
import {getCurrentExValutes} from "@/api/api-valute";

onMounted(async () => {
  // Проверьте, имеется ли сегодняшняя дата в localStorage
  const today = new Date().toISOString().split('T')[0];
  const storedDate = localStorage.getItem('date');
  // Если данных на сегодня нет в localStorage
  if (storedDate !== today) {
    const cursDollar = await getCurrentExValutes();

    // Записываем полученное значение и текущую дату в localStorage
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

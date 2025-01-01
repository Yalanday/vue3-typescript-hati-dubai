<script setup lang="ts">

import DevelopersSlider from "@/components/DevelopersSlider.vue";
</script>

<template>
  <section class="developers">
    <div class="developers__container container">
      <h2 class="developers__title title">Застройщики</h2>
      <div class="developers__slider">
        <developers-slider/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.developers {}

</style>
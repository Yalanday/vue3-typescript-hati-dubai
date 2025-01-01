<script setup lang="ts">
import HomeHero from "@/components/HomeHero.vue";
import Recommendations from "@/components/Recommendations.vue";
import StrongProjects from "@/components/StrongProjects.vue";
import CatalogDownload from "@/components/CatalogDownload.vue";
import ActualSlider from "@/components/ActualSlider.vue";
import DistrictSlider from "@/components/DistrictSlider.vue";
import DevelopersHome from "@/components/DevelopersHome.vue";
</script>

<template>
  <home-hero/>
  <recommendations/>
  <strong-projects/>
  <catalog-download/>
  <actual-slider title="Актуально"/>
  <district-slider title="Районы"/>
  <developers-home/>

</template>

<style scoped>

</style>
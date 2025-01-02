<script setup lang="ts">
import ProjectSlider from "@/components/ProjectSlider.vue";

type Title = string;
const title: Title = "Надежные проекты";

</script>

<template>
  <section class="strong-projects">
    <project-slider :slides-per-view="3" :space-between="20" :title="title"/>
  </section>
</template>

<style scoped lang="scss">
.strong-projects {
  margin-bottom: 60px;
}

@media (max-width: 1279px) {
  .strong-projects {
    margin-bottom: 40px;
  }
}
</style>
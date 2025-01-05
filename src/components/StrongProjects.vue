<script setup lang="ts">
import ProjectSlider from "@/components/ProjectSlider.vue";
import {PropertyCatalogType} from "@/types/types";

type Title = string;
const title: Title = "Надежные проекты";

defineProps({
  items: {
    type: Array as () => Array<PropertyCatalogType>,
    default: () => [],
  }
});


</script>

<template>
  <section class="strong-projects">
    <project-slider :items="items" :slides-per-view="3" :space-between="20" :title="title"/>
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
<script setup lang="ts">
import CatalogSlider from "@/components/CatalogSlider.vue";

type Title = string;
const title: Title = "Рекомендации";

</script>

<template>
  <section class="recommendations">
    <catalog-slider :title="title"/>
  </section>
</template>

<style scoped lang="scss">
.recommendations {
  margin-bottom: 60px;
}
</style>
<script setup lang="ts">
import CatalogSlider from "@/components/CatalogSlider.vue";
//types
import {PropertyCatalogType} from "@/types/types";
type Title = string;
const title: Title = "Рекомендации";

defineProps({
  items: {
    type: Array as () => Array<PropertyCatalogType>,
    default: () => [],
  }
});



</script>

<template>
  <section class="recommendations">
    <catalog-slider :items="items" :title="title"/>
  </section>
</template>

<style scoped lang="scss">
.recommendations {
  margin-bottom: 60px;
}

@media (max-width: 1279px) {
  .recommendations {
    margin-bottom: 40px;
  }
}
</style>
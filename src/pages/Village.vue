<script setup lang="ts">

import CatalogUniversal from "@/components/CatalogUniversal.vue";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog?type=villa';

</script>

<template>
  <catalog-universal title="Виллы" :url="URL"/>
</template>

<style scoped lang="scss">

</style>
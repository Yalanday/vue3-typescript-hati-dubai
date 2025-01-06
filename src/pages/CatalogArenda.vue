<script setup lang="ts">

import CatalogUniversal from "@/components/CatalogUniversal.vue";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog?offer=arenda';

</script>

<template>
  <catalog-universal title="Аренда" :url="URL"/>
</template>

<style scoped lang="scss">

</style>
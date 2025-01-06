<script setup lang="ts">

import CatalogUniversal from "@/components/CatalogUniversal.vue";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog?type=live';

</script>

<template>
  <catalog-universal title="Новостройки" :url="URL"/>
</template>

<style scoped lang="scss">

</style>
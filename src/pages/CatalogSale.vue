<script setup lang="ts">

import CatalogUniversal from "@/components/CatalogUniversal.vue";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog?offer=sale';

</script>

<template>
  <catalog-universal title="Продажа" :url="URL"/>
</template>

<style scoped lang="scss">

</style>
<script setup lang="ts">
// components
import RoundElement from "@/components/RoundElement.vue";
//types
import {itemFavoriteType} from "@/types/types";

const itemFavorite: itemFavoriteType =
    {
      img: '/icons/favorites.svg',
      link: '/favorites',
      label: 'Favorites'
    }

</script>


<template>
  <div class="header__favorites">
    <round-element :img="itemFavorite.img" :link="itemFavorite.link"
                   :label="itemFavorite.label"/>
  </div>
</template>

<style scoped>

</style>
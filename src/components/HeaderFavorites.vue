<script setup lang="ts">
import RoundElement from "@/components/RoundElement.vue";

type itemFavoriteType = {
  id: number,
  img: string,
  link: string,
  label: string
}

const item: itemFavoriteType =
    {
      img: '/public/icons/favorites.svg',
      link: '/favorites',
      label: 'Favorites'
    }

</script>

<template>
  <div class="header__favorites" >
    <round-element :img="item.img" :link="item.link" :label="item.label"/>
  </div>
</template>

<style scoped>

</style>
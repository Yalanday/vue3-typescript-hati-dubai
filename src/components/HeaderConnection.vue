<script setup lang="ts">
//components
import RoundElement from "@/components/RoundElement.vue";
//types
import type {ConnectionType} from "@/types/types";


const connectionItems :ConnectionType[] = [
  {
    id: 1,
    img: '/public/icons/whatsapp.svg',
    link: 'javascript:void(0)',
    label: 'whatsapp'
  },
  {
    id: 2,
    img: '/public/icons/telegram.svg',
    link: 'javascript:void(0)',
    label: 'Telegram'
  },
  {
    id: 3,
    img: '/public/icons/telefon.svg',
    link: 'javascript:void(0)',
    label: 'Phone'
  }
]

</script>

<template>
  <div class="header-connection">
    <round-element v-for="item in connectionItems" :key="item.id" :img="item.img" :link="item.link" :label="item.label"/>
  </div>
</template>

<style scoped>
.header-connection {
  display: flex;
  gap: 10px;
}

</style>
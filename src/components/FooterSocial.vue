<script setup lang="ts">
// components
import RoundElement from "@/components/RoundElement.vue";
// types
import type {ConnectionType} from "@/types/types";

const footerSocialItems: ConnectionType[] = [
  {
    id: 1,
    img: '/icons/vk.svg',
    link: 'javascript:void(0)',
    label: 'vk'
  },
  {
    id: 1,
    img: '/icons/insta.svg',
    link: 'javascript:void(0)',
    label: 'instagram'
  },
  {
    id: 1,
    img: '/icons/tik-tok.svg',
    link: 'javascript:void(0)',
    label: 'tik-tok'
  },
  {
    id: 1,
    img: '/icons/youtube.svg',
    link: 'javascript:void(0)',
    label: 'youtube'
  }
];


</script>

<template>
  <div class="footer__social footer-social">
    <ul class="footer-social__list">
      <li v-for="item in footerSocialItems" :key="item.id" class="footer-social__item">
        <RoundElement class="round" :img="item.img" :link="item.link" :label="item.label"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-social__list {
  display: flex;
  gap: 10px;
}


</style>
<script setup lang="ts">
import {ref} from 'vue';

const isHover = ref(false);
</script>

<template>
  <div class="round-link"
       @mouseover="isHover = true"
       @mouseout="isHover = false"
       :class="{ hover: isHover }"
       :style="{width: isHover ? '150px' : '50px'}">
    <span v-if="!isHover">&#8594;</span>
    <router-link v-else to="/">
      <span>Смотреть</span>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.round-link {
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;
  opacity: 0.7;

  span {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}

.hover {
  border-radius: 50px;
  opacity: 1;
}
</style>
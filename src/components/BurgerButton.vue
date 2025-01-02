<script setup lang="ts">
import {ref} from 'vue';

defineProps(
    {
      isOpen: Boolean
    }
)

</script>

<template>
  <button class="burger-button">
    <span v-if="isOpen" class="burger-icon">✕</span>
    <span v-else class="burger-icon">☰</span>
  </button>
</template>

<style scoped>
.burger-button {
  background: none;
  border: none;
  display: none;

  @media (max-width: 1279px) {
    display: block;
  }
}

.burger-icon {
  font-size: 2rem;
}
</style>

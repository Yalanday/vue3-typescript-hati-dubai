<script setup lang="ts">
import {ref, defineComponent} from 'vue';

defineProps(
    {
      loading: {
        type: Boolean,
        default: false
      }
    }
)

</script>

<template>
  <div v-if="loading" class="spinner"></div>
</template>

<style lang="scss" scoped>
.spinner {
  border: 16px solid #f3f3f3; /* Light gray */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

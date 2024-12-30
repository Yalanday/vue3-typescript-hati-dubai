<script setup lang="ts">
import {withDefaults, defineProps, ref, Ref} from "vue";


interface ButtonProps {
  borderColor: string;
  textColor: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  borderColor: '#000000',
  textColor: '#000',
  backgroundColor: '#ffffff',
  hoverBackgroundColor: '#000000',
  hoverTextColor: '#ffffff',
});

const isHover: Ref<boolean> = ref(false);

</script>

<template>
  <div class="rounded-container"
       :class="{hover: isHover}"
       :style="{
          color: !isHover ? textColor : hoverTextColor,
          border: borderColor ? `1px solid ${borderColor}` : '',
          backgroundColor: !isHover ? backgroundColor : hoverBackgroundColor,
       }"
       @mouseover="isHover = true"
       @mouseleave="isHover = false"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.rounded-container {
  border-radius: 25px;
}
</style>
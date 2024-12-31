<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  img: String,
  link: String,
  label: String,
  backgroundColor: {
    type: String,
    default: '#000000;'
  },
  backgroundColorHover: {
    type: String,
    default: '#ffffff;'
  },
  borderColor: {
    type: String,
    default: '#208B95'
  },
})

const isHover = ref(false)

</script>

<template>
  <div class="round-element-wrapper"
       :style="`border-color: ${isHover ? props.borderColor : '#000000'};
                `">
    <router-link :to="link"
                 class="round-element"
                 @mouseover="isHover = true"
                 @mouseout="isHover = false"
                 :style="`-webkit-mask: url(${img}) no-repeat center; mask: url(${img}) no-repeat center;
                          background: ${isHover ? props.backgroundColorHover : props.backgroundColor};`"
                 :aria-label="label">
    </router-link>
  </div>
</template>

<style scoped>
.round-element-wrapper {
  border: 1px solid;
  border-radius: 50%;
}

.round-element {
  width: 52px;
  height: 52px;
  display: block;
}

.round-element-wrapper:hover {
  background: #208B95;
}

.round-element:hover {
  background: #ffffff;
}
</style>
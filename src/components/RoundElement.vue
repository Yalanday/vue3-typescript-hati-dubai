<script setup lang="ts">

defineProps({
  img: String,
  link: String,
  label: String
})

</script>

<template>
  <div class="round-element-wrapper">
    <router-link :to="link"
                 class="round-element"
                 :style="`-webkit-mask: url(${img}) no-repeat center; mask: url(${img}) no-repeat center;`"
                 :aria-label="label">
    </router-link>
  </div>
</template>

<style scoped>
.round-element-wrapper {
  border: 1px solid #000000;
  border-radius: 50%;
}

.round-element {
  width: 52px;
  height: 52px;
  background: #000000;
  display: block;
}

.round-element-wrapper:hover {
  background: #208B95;
  border-color: #208B95;
}

.round-element-wrapper:hover .round-element:hover {
  background: #ffffff;
}
</style>
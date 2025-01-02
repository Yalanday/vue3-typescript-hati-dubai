<script setup lang="ts">

interface TitleInterface {
  title?: string;
}

withDefaults(defineProps<TitleInterface>(), {
  title: 'Заголовок',
});

</script>

<template>
  <h2 class="title-sliders">{{ title }}</h2>
</template>

<style scoped>
.title-sliders {
  font-size: 4rem;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0 0 60px;
}

@media (max-width: 1279px) {
  .title-sliders {
    font-size: 3rem;
  }
}

@media (max-width: 767px) {
  .title-sliders {
    font-size: 2rem;
  }
}
</style>
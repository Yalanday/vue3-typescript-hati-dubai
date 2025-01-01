<script setup lang="ts">

type PropsNewsItem = {
  title: string,
  text: string,
  date: string,
}

defineProps<PropsNewsItem>()

</script>

<template>
  <div class="news-preview-item news">
    <span class="news__data">{{ date}}</span>
    <h3 class="news__title">{{ title}}</h3>
    <p class="news__text">{{ text}}
    </p>
  </div>
</template>

<style scoped lang="scss">
.news-preview-item.news {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 0;

  .news__data {
    opacity: 0.5;
  }

  .news__title {
    margin: 0;
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  .news__text {
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* количество строк */
    line-clamp: 4;
    overflow: hidden;
    font-size: 1.1rem;
    text-overflow: ellipsis;
    line-height: 1.4rem;
    max-height: 5.6rem; /* line-height (1.4) * количество строк (3), это высота трех строк */
  }
}
</style>
<script setup lang="ts">
import {onMounted, ref} from "vue";
// api
import {fetchData} from "@/api/api-home";
// types
import type {HomeLinkType} from "@/types/types";

const URL = 'https://dbd0282f034a13d8.mokky.dev/partner-links';
const data = ref([] as HomeLinkType[]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);

onMounted(async () => {
  await fetchData({url: URL, loading, data, error});
});

</script>

<template>
  <div class="main__promo-links promo-links">
    <div class="promo-links__container container">
      <ul v-if="data && data.length>0"
          class="promo-links__list">
        <li v-for="link in data" :key="link.id" class="promo-links__item">
          <a :href="link.href" target="_blank">{{ link.text }}</a>
        </li>
      </ul>
      <p v-else-if="loading">Загрузка...</p>
      <p v-else>Ошибка загрузки данных</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.promo-links {
  background-color: #ffffff;

  & p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ff0000;
    margin: 0;
  }
}

.promo-links__container {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.promo-links__list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 11px;
  align-items: center;
  justify-content: space-between;
}

.promo-links__item a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    background-color: #000000;
  }
}

@media (max-width: 1279px) {

  .promo-links__container {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }

  .promo-links__list {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
  }

  .promo-links__item a {
    font-size: 0.8rem;
  }
}

@media (max-width: 767px) {

  .promo-links__container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .promo-links__list {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0.5rem;
  }

  .promo-links__item a {
    font-size: 0.8rem;
    padding: 0.4rem;
    text-align: center;
  }
}

</style>
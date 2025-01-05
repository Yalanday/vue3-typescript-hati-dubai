<script setup lang="ts">
import {ref, Ref} from "vue";
import CatalogFilter from "@/components/CatalogFilter.vue";
import CardsList from "@/components/CardsList.vue";
import NewsHome from "@/components/NewsHome.vue";
import FormSub from "@/components/FormSub.vue";

let activeFilter: Ref<string> = ref('all');

const cardsFilterItems = [
  {
    id: 1,
    value: 'all',
    label: 'Все'
  },
  {
    id: 2,
    value: 'sea',
    label: 'У моря'
  },
  {
    id: 3,
    value: 'forest',
    label: 'В лесу'
  },
  {
    id: 4,
    value: 'city',
    label: 'В городе'
  }
];

function clickHandlerFilter(value: string) {
  activeFilter.value = value;
  console.log(activeFilter.value);
}

</script>

<template>
  <section class="catalog">
    <div class="catalog__filter filter">
      <div class="catalog__container container">
        <catalog-filter/>
      </div>
    </div>
    <div class="catalog__content container">
      <h2 class="catalog__title">Продажа вилл</h2>
      <div class="catalog__cards-filter cards-filter">
        <ul class="cards-filter__list">
          <li v-for="item in cardsFilterItems"
              @click="clickHandlerFilter(item.value)"
              :data-value="item.value"
              :key="item.id"
              class="cards-filter__item"
              :class="{active: activeFilter === item.value}">
            <span>{{ item.label }}</span>
            <span>125</span>
          </li>
        </ul>
      </div>
      <cards-list/>
    </div>
  </section>
  <form-sub/>
</template>

<style scoped lang="scss">

.catalog {

  &__filter {
    background-color: #208B95;
    padding: 1.6rem 0;
  }

  &__title {
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 400;

    @media (max-width: 1279px) {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  .cards-filter__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 767px) {
      gap: 0.4rem;
    }
  }

  .cards-filter__item {
    cursor: pointer;
    padding: 0.4rem 1.6rem;
    border-radius: 50px;
    background-color: #ffffff;
    border: 1px solid #000000;
    display: flex;
    gap: 2rem;

    @media (max-width: 767px) {
      padding: 0.4rem 0.8rem;
      gap: 1rem;
    }

    &.active {
      background-color: #000000;
      color: #ffffff;
    }

    &:hover {
      background-color: #000000;
    }

    &:hover span {
      color: #ffffff;
    }
  }
}


</style>
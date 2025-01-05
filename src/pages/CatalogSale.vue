<script setup lang="ts">
import {computed, ref, Ref, ComputedRef, onMounted} from "vue";
import CatalogFilter from "@/components/CatalogFilter.vue";
import CardsList from "@/components/CardsList.vue";
import FormSub from "@/components/FormSub.vue";
import {useCurCityStore} from "@/store/cur-city";
import {useCatalogStore} from "@/store/catalog-store";
import {fetchData} from "@/api/api-home";
import {FetchDataArgsCatalog} from "@/types/api-types";
import {PropertyCatalogType} from "@/types/types";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog';
const data = ref([]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);

const curCityStore = useCurCityStore();
const catalogStore = useCatalogStore();
const curCuty = computed(() => {
  return curCityStore.curCity
});

let activeFilter: Ref<string> = ref('all');


const cardsFilterItems = [
  {
    id: 1,
    value: '',
    label: 'Все'
  },
  {
    id: 2,
    value: 'see',
    label: 'У моря'
  },
  {
    id: 3,
    value: 'forest',
    label: 'В лесу'
  },
  {
    id: 4,
    value: 'in-city',
    label: 'В городе'
  }
];

const locationType: ComputedRef<string> = computed(() => {
  return catalogStore.location
})

const countItems = (value: string) => {

  if (value === '') {
    return data.value.filter((item: PropertyCatalogType) => item.city === curCuty.value).length
  } else {
    return data.value.filter((item: PropertyCatalogType) => item.location === value && item.city === curCuty.value).length
  }
};

function clickHandlerFilter(value: string) {
  activeFilter.value = value;
  catalogStore.setLocation(value);
}

onMounted(async () => {
  await fetchData<FetchDataArgsCatalog[]>({url: URL, loading, data, error});
})


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
            <span>{{ countItems(item.value) }}</span>
          </li>
        </ul>
      </div>
      <cards-list :locationType="locationType"/>
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
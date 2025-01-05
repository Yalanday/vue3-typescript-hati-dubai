<script setup lang="ts">
import {ref, computed, onMounted, watch} from 'vue';
import CardOptions from "@/components/CardOptions.vue";
import PriceUniversal from "@/components/PriceUniversal.vue";
//store
import {useCatalogStore} from "@/store/catalog-store";
import {useCurCityStore} from "@/store/cur-city";
//api
import {fetchData} from "@/api/api-home";
//types
import {FetchDataArgsCatalog} from "@/types/api-types";
import {PropertyCatalogType} from "@/types/types";
import LoaderSpiner from "@/components/LoaderSpiner.vue";

const catalogStore = useCatalogStore();
const curCityStore = useCurCityStore();
const curCity = computed(() => curCityStore.curCity);
const currentPage = ref(1);
const startIndex = ref(0);
const itemsPerPage = 6;
const endIndex = ref(itemsPerPage);
const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog';
const data = ref([]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);
const cards = computed(() => {
  return catalogStore.catalog;
});

const originalCards = ref([]); // Хранение исходных данных
const locationType = computed(
    () => catalogStore.location
)

function setPagination(items: PropertyCatalogType[]) {
  return Math.ceil(items.length / itemsPerPage);
}

function setPaginationActive(page: number) {
  return page === currentPage.value;
}

function changePage(page: number) {
  currentPage.value = page;
  startIndex.value = (page - 1) * itemsPerPage;
  endIndex.value = startIndex.value + itemsPerPage;
}

const pages = computed(() => setPagination(cards.value));

const currentCardsList = computed(() => {
  return catalogStore.catalog.slice(startIndex.value, endIndex.value);
})

onMounted(async () => {
  await fetchData<FetchDataArgsCatalog[]>({url: URL, loading, data, error});
  originalCards.value = data.value;
  catalogStore.setCatalog(data.value.filter((item: PropertyCatalogType) => item.city === curCity.value));
  changePage(1); // Устанавливает исходное состояние пагинации
})

watch(currentPage, () => {
  changePage(currentPage.value);
})

watch([curCity, locationType],
    async () => {

      if (locationType.value === '') {
        await fetchData<FetchDataArgsCatalog[]>({url: URL, loading, data, error});
        catalogStore.setCatalog(data.value.filter((item: PropertyCatalogType) => item.city === curCity.value));
        changePage(1);
      } else {
        await fetchData<FetchDataArgsCatalog[]>({url: URL, loading, data, error});
        catalogStore.setCatalog(data.value.filter((item: PropertyCatalogType) => item.city === curCity.value && item.location === locationType.value));
        changePage(1);
      }
    }
)


</script>

<template>
  <div class="catalog-wrapper">
    <LoaderSpiner :loading="loading"/>
    <div class="catalog__cards-list cards-list">
      <div v-for="card in currentCardsList" :key="card.id" class="cards-list__item">
        <img width="400" height="256" :src="card.src" :alt="card.title"/>
        <div class="card-info">
          <h3 class="card-title">
            {{ card.typeValue }}
            <br>
            {{ card.title }}</h3>
          <card-options style="margin-bottom: 0;" :bedroom="card.options.bedroom" :square="card.options.square"/>
          <p class="row-value">
            <span class="row-label">Район:</span> {{ card.district }}, {{ card.city }}
          </p>
          <p class="row-value">
            <span class="row-label">Застройщик:</span> {{ card.developer }}
          </p>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <price-universal class="price" :price="card.price"/>
            <router-link class="btn" to="#">Перейти</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="paginator">
      <span v-for="page in pages" :key="page"
            @click="changePage(page)"
            :class="{active: page === currentPage}"
            class="paginator__item">{{ page }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">

.catalog-wrapper {
  margin-bottom: 60px;

  @media (max-width: 1279px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  row-gap: 30px;
  column-gap: 20px;

  @media (max-width: 1279px) {
    column-gap: 15px;
  }
}

.cards-list__item {
  width: 400px;
  height: 560px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 1279px) {
    width: 360px;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  img {
    display: block;
    width: 100%;
    height: 256px;
  }

  .card-info {
    display: flex;
    padding: 20px 20px 40px;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-title {
    text-transform: uppercase;
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 400;
    margin: 0;
  }

  .row-value {
    margin: 0;
  }

  .row-label {
    opacity: 0.6;
  }

  .price {
    font-size: 1.8rem;
    text-shadow: none;
  }

  .btn {
    background-color: #208B95;
    border: 1px solid #208B95;
    width: 150px;
    padding: 10px;
    color: #ffffff;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  .btn:hover {
    background-color: #ffffff;
    color: #208B95;
  }
}

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;

  .paginator__item {
    display: block;
    cursor: pointer;
    padding: 5px;
  }

  .paginator__item.active {
    color: #208B95;
    scale: 1.4;
    pointer-events: none;
  }
}

</style>
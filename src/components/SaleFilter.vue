<script setup lang="ts">
import {computed, onMounted, ref, Ref, watch} from "vue";
// store
import {useCurCityStore} from "@/store/cur-city";
import {useCurTypeStore} from "@/store/cur-type-home";
// types
import type {FilterItemType} from "@/types/types";

const curCityStore = useCurCityStore();
const curCity = computed(() => curCityStore.curCity);
const curValue = computed(() => {
  if (curCity.value === 'dubai') {
    return 'Дубае';
  } else {
    return 'Абу-Даби'
  }
});

const curTypeStore = useCurTypeStore();

const filters: Ref<FilterItemType[]> = ref([
  {
    id: 1,
    name: 'Виллы',
    value: 'villa',
    active: true,
  },
  {
    id: 2,
    name: 'Таунхаусы',
    value: 'town',
    active: false,
  },
  {
    id: 3,
    name: 'Аппартаменты',
    value: 'app',
    active: false,
  },
  {
    id: 4,
    name: 'Жилые компмлексы',
    value: 'live',
    active: false,
  },
  {
    id: 5,
    name: 'Все объекты в Дубае',
    value: 'all_objects',
    active: false,
  }
]);

const setFilterValue = (value: string, item: FilterItemType) => {
  filters.value.forEach(filter => {
    filter.active = false
  });
  item.active = true;
  curTypeStore.setType(value)
}

watch(
    curCity,
    () => {
      filters.value = filters.value.map(filter => {
        if (filter.value === 'all_objects') {
          return {
            ...filter,
            name: `Все объекты в ${curValue.value}`,
          };
        } else {
          return filter;
        }
      });
    }
)

</script>

<template>
  <div class="main__home-filter home-filter">
    <div class="home-filter__container container">
      <ul class="home-filter__list">
        <li v-for="item in filters" :key="item.id"
            class="home-filter__item"
            :class="{ active: item.active  }"
            v-html="item.name"
            @click="setFilterValue(item.value, item)">
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home-filter__container {
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 1279px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 767px) {
    padding-left: 0.6rem;
  }
}

.home-filter__list {
  display: flex;
  justify-content: space-between;
}

.home-filter__item {
  font-size: 1.6rem;
  line-height: 25px;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 1279px) {
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
}

.home-filter__item:hover {
  color: #208B95;
}


.home-filter__item.active {
  color: #208B95;
  pointer-events: none;
}

@media (max-width: 1279px) {
  .home-filter__list {
    flex-wrap: wrap;
    row-gap: 10px;
  }
}

</style>
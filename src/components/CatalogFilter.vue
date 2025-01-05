<script lang="ts" setup>
import {ref} from 'vue';
import type {SelectProps} from 'ant-design-vue';
import RoundedContainer from "@/components/RoundedContainer.vue";
import {propsCatalogFilter} from "@/props/style-collection";

const value1 = ref('Все');
const value2 = ref('Цена');
const value3 = ref('Площадь');

const options1 = ref<SelectProps['options']>([
  {
    value: 'all_objects',
    label: 'Все',
  },
  {
    value: 'villa',
    label: 'Виллы',
  },
  {
    value: 'app',
    label: 'Аппартаменты',
  },
  {
    value: 'town',
    label: 'Таунхаусы',
  },
  {
    value: 'live',
    label: 'Жилые комплексы',
  }
]);
const options2 = ref<SelectProps['options']>([
  {
    value: 'expensive',
    label: 'Дорогие',
  },
  {
    value: 'cheap',
    label: 'Дешевые',
  }
]);

const options3 = ref<SelectProps['options']>([
  {
    value: 'little',
    label: 'Меньше',
  },
  {
    value: 'big',
    label: 'Больше',
  }
]);

const focus = () => {
  console.log('focus');
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>

<template>
  <div class="catalog-filter">
    <a-space class="filter-wrap">
      <a-select
          ref="select"
          v-model:value="value1"
          class="select-1"
          :options="options1"
          @focus="focus"
          @change="handleChange"
          :bordered="false"
      ></a-select>

      <a-select v-model:value="value2"
                class="select-2"
                :options="options2"
                :bordered="false"
      ></a-select>

      <a-select v-model:value="value3"
                class="select-3"
                :options="options3"
                :bordered="false"
      ></a-select>
    </a-space>
    <rounded-container style="height: 40px" v-bind="propsCatalogFilter">
      <div class="catalog-filter__btn">Начать подбор</div>
    </rounded-container>
  </div>
</template>
<style scoped lang="scss">
.catalog-filter {
  display: flex;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;

  .filter-wrap {
    height: 40px;
    padding-left: 0;
    display: flex;
  }

  .select-1 {
    width: 120px;
  }

  .select-2 {
    width: 120px;
    color: #ffffff;
  }

  .select-3 {
    width: 120px;
    color: #ffffff;
  }

  .catalog-filter__btn {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 50px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      color: #208B95;
    }
  }
}

@media (max-width: 1279px) {
  .catalog-filter {
    max-width: 700px;
    width: 100%;

    .catalog-filter__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      cursor: pointer;
    }

    .filter-wrap {
      padding-left: 20px;
    }

    .select-1 {
      width: 100px;
    }

    .select-2 {
      width: 100px;
    }

    .select-3 {
      width: 120px;
    }
  }
}

@media (max-width: 767px) {

  .catalog-filter {
    align-items: center;
    flex-direction: column;

    .filter-wrap {
      padding-left: 0;
      flex-direction: column;
      height: auto;
      align-items: center;

    }

    .select-1,
    .select-2,
    .select-3 {
      width: 320px;
      background-color: #ffffff;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 50px;
    }

    .select-3 {
      margin-bottom: 20px;
    }

    .catalog-filter__btn {
      width: 320px;
      margin-bottom: 20px;
    }
  }
}


</style>
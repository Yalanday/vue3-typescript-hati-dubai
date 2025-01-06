<script lang="ts" setup>
import {ref} from 'vue';
import type {SelectProps} from 'ant-design-vue';

import {useCatalogStore} from "@/store/catalog-store";
import {useCurTypeStore} from "@/store/cur-type-home";

const catalogStore = useCatalogStore();
const curTypeStore = useCurTypeStore();

const value1 = ref('Все');
const value2 = ref('Цена');

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
    value: 'live',
    label: 'Жилые комплексы',
  }
]);
const options2 = ref<SelectProps['options']>([
  {
    value: 'desc',
    label: 'Дорогие',
  },
  {
    value: 'asc',
    label: 'Дешевые',
  }
]);

const focus = () => {
  console.log('focus');
};

const handleChangeType = (value: string) => {
  curTypeStore.setType(value);
};

const handleChange = (value: "asc" | "desc") => {
  catalogStore.setSortOrder(value);
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
          @change="handleChangeType"
          :bordered="false"
      ></a-select>

      <a-select v-model:value="value2"
                class="select-2"
                :options="options2"
                :bordered="false"
                @change="handleChange"
      ></a-select>

    </a-space>
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
}

@media (max-width: 1279px) {
  .catalog-filter {
    max-width: 700px;
    width: 100%;


    .filter-wrap {
      padding-left: 20px;
    }

    .select-1 {
      width: 100px;
    }

    .select-2 {
      width: 100px;
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
    .select-2 {
      width: 320px;
      background-color: #ffffff;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 50px;
    }
  }
}


</style>
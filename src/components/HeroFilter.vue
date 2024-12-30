<script lang="ts" setup>
import {ref} from 'vue';
import type {SelectProps} from 'ant-design-vue';
import RoundedContainer from "@/components/RoundedContainer.vue";
import {propsGreenStyleReverse} from "@/props/style-collection";

const value1 = ref('Купить');
const value2 = ref('Любая недвижимость');
const value3 = ref('Цена');

const options1 = ref<SelectProps['options']>([
  {
    value: 'buy',
    label: 'Купить',
  },
  {
    value: 'arend',
    label: 'Арендовать',
  }
]);
const options2 = ref<SelectProps['options']>([
  {
    value: 'all_objects',
    label: 'Любая недвижимость',
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

const options3 = ref<SelectProps['options']>([
  {
    value: 'expensive',
    label: 'Дорогие',
  },
  {
    value: 'cheap',
    label: 'Дешевые',
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
  <div class="hero-filter">
    <a-space style="height: 50px; padding-left: 60px; gap: 60px">
      <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px;"
          :options="options1"
          @focus="focus"
          @change="handleChange"
          :bordered="false"
      ></a-select>

      <a-select v-model:value="value2"
                style="width: 190px"
                :options="options2"
                :bordered="false"
      ></a-select>

      <a-select v-model:value="value3"
                style="width: 120px"
                :options="options3"
                :bordered="false"
      ></a-select>
    </a-space>
    <rounded-container style="margin-right: -2px" v-bind="propsGreenStyleReverse">
      <div class="hero-filter__btn">Начать подбор</div>
    </rounded-container>
  </div>
</template>
 <style scoped lang="scss">
.hero-filter {
  display: flex;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;

  .hero-filter__btn {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 50px;
    cursor: pointer;
  }
}
 </style>
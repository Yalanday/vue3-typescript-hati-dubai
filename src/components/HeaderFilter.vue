<script lang="ts" setup>
import {ref} from 'vue';
import type {SelectProps} from 'ant-design-vue';

type optionsType = {
  value: string,
  label: string,
}

const value1 = ref('Дубай');
const value2 = ref('₽');
const value3 = ref('$');



const options1 = ref<SelectProps['options']>([
  {
    value: 'dubai',
    label: 'Дубай',
  },
  {
    value: 'abu-dabi',
    label: 'Абу-Даби',
  },
]);
const options2 = ref<SelectProps['options']>([
  {
    value: 'rubl',
    label: '₽',
  },
  {
    value: 'dollar',
    label: '$',
  },
]);
const options3 = ref<SelectProps['options']>([
  {
    value: 'dollar',
    label: '$',
  },
  {
    value: 'rubl',
    label: '₽',
  },
]);

const focus = () => {
  console.log('focus');
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>

<template>
  <div class="header-filter">
    <a-space>
      <a-select
          ref="select"
          v-model:value="value1"
          style="width: 85px"
          :options="options1"
          @focus="focus"
          @change="handleChange"
          :bordered="false"
      ></a-select>

      <a-select
          ref="select"
          v-model:value="value2"
          style="width: 50px"
          :options="options2"
          @focus="focus"
          @change="handleChange"
          :bordered="false"
      >
      </a-select>

      <a-select
          ref="select"
          v-model:value="value3"
          style="width: 50px"
          :options="options3"
          @focus="focus"
          @change="handleChange"
          :bordered="false"
      >
      </a-select>
    </a-space>
  </div>
</template>

<style scoped>

</style>

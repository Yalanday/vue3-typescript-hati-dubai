<script lang="ts" setup>
import {ComponentPublicInstance, onBeforeMount, onBeforeUnmount, ref, Ref} from 'vue';
// store
import {useCurCityStore} from "@/store/cur-city";
import {useCurValuteStore} from "@/store/cur-valute";
// types
import type {SelectProps} from 'ant-design-vue';

const store = useCurCityStore();
const storeValute = useCurValuteStore();

const value1 = ref('Дубай');
const value2 = ref('$');

const select1: Ref<ComponentPublicInstance | null> = ref(null);
const select2: Ref<ComponentPublicInstance | null> = ref(null);

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
    value: 'dollar',
    label: '$',
  },
  {
    value: 'rubl',
    label: '₽',
  }
]);

const focus = () => {
  console.log('focus');
};

const handleChangeCyty = (value: string) => {
  store.setCurCity(value);
};


const handleChangeValute = (value: string) => {
  storeValute.setCurValute(value);
};

let scrolled = ref(false)
let scrollPosition = ref(0)

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrollPosition.value = window.scrollY
  scrolled.value = scrollPosition.value > 100 ? true : false
}

</script>

<template>
  <div class="header-filter">
    <a-space>
      <a-select
          :ref="select1"
          v-model:value="value1"
          style="width: 85px"
          :options="options1"
          @focus="focus"
          @change="handleChangeCyty"
          :bordered="false"
      ></a-select>

      <a-select :ref="select2"
                v-model:value="value2"
                style="width: 50px"
                :options="options2"
                @focus="focus"
                @change="handleChangeValute"
                :bordered="false"
                :class="{'fixed-select': scrolled}"
      >
      </a-select>

    </a-space>
  </div>
</template>

<style scoped>
.fixed-select {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  scale: 1.5;
}

.fixed-select:before {
  content: '';
  position: absolute;
  top: 1px;
  left: 0;
  border-radius: 50%;
  background: #ffffff;
  z-index: -1;
  width: 30px;
  height: 30px;
}

.fixed-select .ant-select-arrow {
  display: none;
}

@media (max-width: 768px) {
  .header-filter {
  display: none;
  }
}
</style>

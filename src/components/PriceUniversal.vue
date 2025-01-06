<script setup lang="ts">

import {useCurValuteStore} from "@/store/cur-valute";
import {computed, onMounted, ref} from "vue";
import {useFormatPriceValue} from "@/hooks/hooks";
import {getCurrentExValutes} from "@/api/api-valute";

const props = withDefaults(defineProps<{
      price: number,
    }>(), {
      price: 0
    }
)

const store = useCurValuteStore();
const currentValute = computed(() => store.curValute);
const cursDollar = ref(1);

const formatPriceValue = useFormatPriceValue;

onMounted(async () => {
  const today = new Date().toISOString().split('T')[0];
  let storedDate = localStorage.getItem('date');

  // Если данные для сегодняшнего дня уже сохранены
  if (storedDate === today) {
    cursDollar.value = Number(localStorage.getItem('cursDollar'));
  } else {
    cursDollar.value = await getCurrentExValutes();

    // Сохраняем полученное значение и текущую дату в localStorage
    localStorage.setItem('cursDollar', cursDollar.value.toString());
    localStorage.setItem('date', today);
  }
});

</script>

<template>
  <p class="price-universal"> от {{ formatPriceValue(props.price, currentValute, cursDollar) }}</p>
</template>

<style scoped>
.price-universal {
  margin: 0;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}
</style>
<script setup lang="ts">
import {ref, onMounted, watch, computed, ComputedRef} from "vue";
//Components
import TypeSlider from "@/components/TypeSlider.vue";
//store
import {useCurCityStore} from "@/store/cur-city";
import {useCurTypeStore} from "@/store/cur-type-home";
//api
import {fetchDataItemsAllSlide} from "@/api/api-home";
import {getCurrentExValutes} from "@/api/api-valute";
//types
import type {TypeItemSlide} from "@/types/types";
import LoaderSpiner from "@/components/LoaderSpiner.vue";

const cityStore = useCurCityStore();
const typeStore = useCurTypeStore();
const currentTypeFilter = computed(() => typeStore.type);

const itemSlides = ref([] as TypeItemSlide[])
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);
let curCity: ComputedRef<string> = computed(() => cityStore.curCity);

const itemsForSlider = ref([] as TypeItemSlide[])

onMounted(async () => {
  await fetchDataItemsAllSlide({loading, itemSlides, error, curCity});
  getCurrentExValutes();
  if (currentTypeFilter.value === 'all_objects') {
    console.log('ok')
    itemsForSlider.value = itemSlides.value;
    console.log(itemSlides.value)
  } else {
    itemsForSlider.value = itemSlides.value.filter((item) => item.type === currentTypeFilter.value);
  }
})

watch(
    curCity,
    async (newValue, oldValue) => {
      if (newValue !== oldValue) {
        await fetchDataItemsAllSlide({loading, itemSlides, error, curCity});
      }
      if (currentTypeFilter.value === 'all_objects') {
        console.log('ok')
        itemsForSlider.value = itemSlides.value;
        console.log(itemSlides.value)
      } else {
        itemsForSlider.value = itemSlides.value.filter((item) => item.type === currentTypeFilter.value);
      }
    },
    {immediate: true}
)

watch(
    currentTypeFilter,
    () => {
      if (currentTypeFilter.value === 'all_objects') {
        console.log('ok')
        itemsForSlider.value = itemSlides.value;
        console.log(itemSlides.value)
      } else {
        itemsForSlider.value = itemSlides.value.filter((item) => item.type === currentTypeFilter.value);
      }
    }
)

</script>

<template>
  <LoaderSpiner :loading="loading"/>
  <type-slider :items="itemsForSlider"/>
</template>

<style scoped>

</style>
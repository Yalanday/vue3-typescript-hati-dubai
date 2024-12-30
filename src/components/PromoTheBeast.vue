<script setup lang="ts">
import {ref, onMounted, watch, computed, ComputedRef} from "vue";
//Components
import PromoSlider from "@/components/PromoSlider.vue";
//store
import {useCurCityStore} from "@/store/cur-city";
//api
import {fetchDataItemsSlide} from "@/api/api-home";
import {getCurrentExValutes} from "@/api/api-valute";
//types
import type {PromoItemSlide} from "@/types/types";

const cityStore = useCurCityStore();
const itemSlides = ref([] as PromoItemSlide[])
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);
let curCity: ComputedRef<string> = computed(() => cityStore.curCity);

onMounted(async () => {
  await fetchDataItemsSlide({loading, itemSlides, error, curCity});
  getCurrentExValutes();
})

watch(
    curCity,
    async (newValue, oldValue) => {
      if(newValue !== oldValue) {
        await fetchDataItemsSlide({loading, itemSlides, error, curCity});
      };
    },
    { immediate: true }
)

</script>

<template>
  <PromoSlider :items="itemSlides"/>
</template>

<style scoped>

</style>
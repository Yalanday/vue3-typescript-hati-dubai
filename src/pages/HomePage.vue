<script setup lang="ts">
import HomeHero from "@/components/HomeHero.vue";
import Recommendations from "@/components/Recommendations.vue";
import StrongProjects from "@/components/StrongProjects.vue";
import CatalogDownload from "@/components/CatalogDownload.vue";
import ActualSlider from "@/components/ActualSlider.vue";
import DistrictSlider from "@/components/DistrictSlider.vue";
import DevelopersHome from "@/components/DevelopersHome.vue";
import NewsHome from "@/components/NewsHome.vue";
import FormSub from "@/components/FormSub.vue";
// api
import {fetchData} from "@/api/api-home";
import {ref, onMounted, computed} from "vue";
//types
import {PropertyCatalogType} from "@/types/types";
import {FetchDataArgsCatalog} from "@/types/api-types";
//store
import {useCatalogStore} from "@/store/catalog-store";

const catalogStore = useCatalogStore();

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog';
const data = ref([]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);



const dataRec = computed (() => {
  return catalogStore.dataRec;
});

const dataActual = computed (() => {
  return catalogStore.dataActual;
});

const dataStrong = computed (() => {
  return catalogStore.dataStrong;
});

onMounted(async () => {
  await fetchData<FetchDataArgsCatalog[]>({url: URL, loading, data, error});
  catalogStore.setCatalog(data.value);
})

</script>

<template>
  <home-hero/>
  <recommendations :items="dataRec" />
  <strong-projects :items="dataStrong"/>
  <catalog-download/>
  <actual-slider :items="dataActual" title="Актуально"/>
  <district-slider title="Районы"/>
  <developers-home/>
  <news-home/>
  <form-sub/>

</template>

<style scoped>

</style>
<script setup lang="ts">
import {fetchData} from "@/api/api-home";
import {onMounted, ref} from "vue";
import {NewsType} from "@/types/types";
import NewsPreviewItem from "@/components/NewsPreviewItem.vue";
import LoaderSpiner from "@/components/LoaderSpiner.vue";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/news';
const data = ref([]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);


onMounted(
    async () => {
      await fetchData<NewsType[]>({url: URL, loading, data, error})
      console.log(data.value)
    }
)

</script>

<template>
  <div class="container">
    <LoaderSpiner :loading="loading"/>
    <ul>
      <news-preview-item style="width: 100%; padding: 20px " v-for="item in data" :key="item.id"
                         :date="item.date"
                         :title="item.title"
                         :text="item.text"/>
    </ul>
  </div>
</template>

<style scoped>

</style>
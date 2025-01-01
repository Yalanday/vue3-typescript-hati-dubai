<script setup lang="ts">
import {ref, onMounted} from 'vue';
//api
import {fetchDataNewsHome} from "@/api/api-home";
// components
import TitleSliders from "@/components/TitleSliders.vue";
import RoundedContainer from "@/components/RoundedContainer.vue";
import NewsPreviewItem from "@/components/NewsPreviewItem.vue";
// props styles
import {propsBlackStyle} from "@/props/style-collection";
//types
import {NewsType} from "@/types/types";


const URL = 'https://dbd0282f034a13d8.mokky.dev/news?limit=2'
const data = ref([] as NewsType[]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);

onMounted(async () => {
  await fetchDataNewsHome({url: URL, loading, data, error});
});

</script>

<template>
  <section class="news">
    <div class="news__container">
      <div class="news__title-wrapper container">
        <title-sliders class="news__title" title="Новости"/>
        <rounded-container v-bind="propsBlackStyle">
          <router-link class="news__link" to="/news" v-html="'Все новости'"/>
        </rounded-container>
      </div>
    </div>
    <div class="container">
      <p v-if="data.length === 0"
         class="null-news">Новостей нет или ошибка сервера</p>
      <div v-else
           class="news__previews">
        <news-preview-item v-for="item in data.slice(0, 2)" :key="item.id"
                           :date="item.date"
                           :title="item.title"
                           :text="item.text"/>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
.news {

  margin-bottom: 60px;

  .news__container {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #000000;
  }

  .news__title-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .news__title {
    margin: 0;
  }

  .news__link {
    display: block;
    padding: 12px 48px;
    text-transform: uppercase;
  }

  .news__link:hover {
    color: #ffffff;
  }

  .null-news {
    color: #ff0000;
    font-size: 2rem;
    text-align: center;
  }

  .news__previews {
    display: flex;
    gap: 40px;
  }
}


</style>
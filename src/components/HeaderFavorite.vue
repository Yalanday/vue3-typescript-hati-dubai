<script setup lang="ts">
// components
import RoundElement from "@/components/RoundElement.vue";
//types
import {itemFavoriteType, PropertyCatalogType} from "@/types/types";
import {onMounted, ref} from "vue";
import {fetchData} from "@/api/api-home";
import {FetchDataArgsCatalog} from "@/types/api-types";

const URL: string = 'https://dbd0282f034a13d8.mokky.dev/catalog?favorite=true';
const data = ref([]);
const loading = ref<boolean>(true);
const error = ref<Error | null>(null);

const countFavorite = ref(0);

const itemFavorite: itemFavoriteType =
    {
      img: '/icons/favorites.svg',
      link: '/#',
      label: 'Favorites'
    }


onMounted(async () => {
  await fetchData<FetchDataArgsCatalog[]>({url: URL, loading, data, error});
  countFavorite.value = data.value.length;
})

</script>


<template>
  <div class="header__favorites">
    <round-element :img="itemFavorite.img" :link="itemFavorite.link"
                   :label="itemFavorite.label"/>
    <span class="count">{{countFavorite}}</span>
  </div>
</template>

<style scoped>
.header__favorites {
  position: relative;
}

.count {
  position: absolute;
  top: -5px;
  right: -15px;
  font-size: 1.5rem;
  line-height: 1;
  padding: 5px;
  background-color: #208B95;
  color: #ffffff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

}

</style>
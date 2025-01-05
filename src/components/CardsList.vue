<script setup lang="ts">
import {ref, computed} from 'vue';
import CardOptions from "@/components/CardOptions.vue";
import PriceUniversal from "@/components/PriceUniversal.vue";

const currentPage = ref(1);
const startIndex = ref(0);
const itemsPerPage = 6;
const endIndex = ref(itemsPerPage);


function setPagination(items: any[]) {
  return Math.ceil(items.length / itemsPerPage);
}

function setPaginationActive(page: number) {
  return page === currentPage.value;
}

function changePage(page: number) {
  currentPage.value = page;
  startIndex.value = (page - 1) * itemsPerPage;
  endIndex.value = startIndex.value + itemsPerPage;
}

const cards = [
  {
    id: 1,
    src: '/images/catalog-img.jpg',
    title: 'The Palm Jumeirah',
    city: 'dubai',
    district: 'Зеленая долина',
    developer: 'Самолетчик',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 2,
    src: '/images/catalog-img.jpg',
    title: 'The Palm sdsd Umeirah',
    city: 'dubai',
    district: 'Дутово',
    developer: 'Вертолёт групп',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 3,
    src: '/images/catalog-img.jpg',
    title: 'Card 54',
    city: 'dubai',
    district: 'Дикий',
    developer: 'Партнёр',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 4,
    src: '/images/catalog-img.jpg',
    title: 'Card 342',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 5,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 6,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 7,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 8,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 9,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 10,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 11,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 12,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 13,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 14,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 15,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 16,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 17,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 18,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  },
  {
    id: 19,
    src: '/images/catalog-img.jpg',
    title: 'Card 1',
    city: 'dubai',
    district: 'sdf',
    developer: 'dfdf',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    }
  }
]

const pages = ref(setPagination(cards));

const currentCardsList = computed(() => {
  return cards.slice(startIndex.value, endIndex.value);
})

</script>

<template>
  <div class="catalog-wrapper">
    <div class="catalog__cards-list cards-list">
      <div v-for="card in currentCardsList" :key="card.id" class="cards-list__item">
        <img width="400" height="256" :src="card.src" :alt="card.title"/>
        <div class="card-info">
          <h3 class="card-title">
            {{ card.typeValue }}
            <br>
            {{ card.title }}</h3>
          <card-options style="margin-bottom: 0;" :bedroom="card.options.bedroom" :square="card.options.square"/>
          <p class="row-value">
            <span class="row-label">Район:</span> {{ card.district }}, {{ card.city }}
          </p>
          <p class="row-value">
            <span class="row-label">Застройщик:</span> {{ card.developer }}
          </p>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <price-universal class="price" :price="card.price"/>
            <router-link class="btn" to="#">Перейти</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="paginator">
      <span v-for="page in pages" :key="page"
            @click="changePage(page)"
            :class="{active: page === currentPage}"
            class="paginator__item">{{ page }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">

.catalog-wrapper {
  margin-bottom: 60px;

  @media (max-width: 1279px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  row-gap: 30px;
}

.cards-list__item {
  width: 400px;
  height: 560px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 1279px) {
    width: 360px;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  img {
    display: block;
    width: 100%;
    height: 256px;
  }

  .card-info {
    display: flex;
    padding: 20px 20px 40px;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-title {
    text-transform: uppercase;
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 400;
    margin: 0;
  }

  .row-value {
    margin: 0;
  }

  .row-label {
    opacity: 0.6;
  }

  .price {
    font-size: 1.8rem;
    text-shadow: none;
  }

  .btn {
    background-color: #208B95;
    border: 1px solid #208B95;
    width: 150px;
    padding: 10px;
    color: #ffffff;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  .btn:hover {
    background-color: #ffffff;
    color: #208B95;
  }
}

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;

  .paginator__item {
    display: block;
    cursor: pointer;
    padding: 5px;
  }

  .paginator__item.active {
    color: #208B95;
    scale: 1.4;
    pointer-events: none;
  }
}

</style>
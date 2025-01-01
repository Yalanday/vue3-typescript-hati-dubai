<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination, Navigation} from 'swiper/modules';
// components
import TitleSliders from "@/components/TitleSliders.vue";
import RoundedContainer from "@/components/RoundedContainer.vue";
//props styles
import {propsBlackStyle} from "@/props/style-collection";
// store
import PriceUniversal from "@/components/PriceUniversal.vue";

const modules = [FreeMode, Pagination, Navigation]
const stylesCustomButton = {
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  lineHeight: '1',
  padding: '0 0 10px',
  userSelect: 'none'
}

defineProps(
    {
      title: {
        type: String,
      },
      items: {
        type: Array,
        required: false
      },
      slidesPerView: {
        type: Number,
        default: 5
      },
      spaceBetween: {
        type: Number,
        default: 20
      }

    }
)

const items = [
  {
    id: 1,
    title: 'Bich hata goldens',
    src: '/images/rec/rec-1.png',
    city: 'dubai',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  },
  {
    id: 2,
    title: 'Телек IP круглый год',
    src: '/images/rec/rec-2.png',
    city: 'dubai',
    favorite: false,
    type: 'app',
    typeValue: 'Апартаменты',
    price: 344234,
    labelInfo: 'Только славяне'
  },
  {
    id: 3,
    title: 'Inter trans bablos',
    src: '/images/rec/rec-3.png',
    city: 'dubai',
    favorite: true,
    type: 'app',
    typeValue: 'Апартаменты',
    price: 344234,
    labelInfo: 'Без котов'
  },
  {
    id: 4,
    title: 'chili villi vue js',
    src: '/images/rec/rec-4.png',
    city: 'dubai',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  },
  {
    id: 5,
    title: 'major hata official',
    src: '/images/rec/rec-5.png',
    city: 'dubai',
    favorite: true,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  },
  {
    id: 6,
    title: 'tik tak alladin',
    src: '/images/rec/rec-1.png',
    city: 'dubai',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  },
  {
    id: 7,
    title: 'jean in bouttle',
    src: '/images/rec/rec-2.png',
    city: 'dubai',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  },
  {
    id: 8,
    title: 'zloi macharaja',
    src: '/images/rec/rec-3.png',
    city: 'dubai',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  },
  {
    id: 9,
    title: 'slovo arabacana',
    src: '/images/rec/rec-4.png',
    city: 'dubai',
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025'
  }
]

const filterItems = [
  {
    id: 1,
    title: 'Все',
    value: 'all_objects'
  },
  {
    id: 2,
    title: 'Апартаменты',
    value: 'app'
  },
  {
    id: 3,
    title: 'Таунхаусы',
    value: 'town'
  },
  {
    id: 4,
    title: 'Виллы',
    value: 'villa'
  },
  {
    id: 5,
    title: 'Квартиры',
    value: 'live'
  }
]

const filterHandle = (value: string) => {
  console.log(value)
}

</script>

<template>
  <div class="container">
    <title-sliders :title="title"/>
    <div class="project-slider-filter filter">
      <ul class="filter__list">
        <li v-for="item in filterItems" :key="item.id" class="filter__item">
          <rounded-container v-bind="propsBlackStyle">
            <span @click="filterHandle(item.value)">{{ item.title }}</span>
          </rounded-container>
        </li>
      </ul>
    </div>
    <div class="swiper-container">
      <swiper
          :slidesPerView="slidesPerView"
          :spaceBetween="spaceBetween"
          :freeMode="true"
          :navigation="{
            nextEl: '.custom-button-next--prj',
            prevEl: '.custom-button-prev--prj',
        }"
          :pagination="false"
          :modules="modules"
          class="HighSwiper"
      >
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="item.src" :alt="item.title">
          <div class="slide-text-content">
            <p class="type-item">{{ item.typeValue }}</p>
            <p class="slide-title">{{ item.title }}</p>
            <price-universal class="slide-price" :price="item.price"/>
          </div>
          <div class="label-info">
            {{ item.labelInfo }}
          </div>
        </swiper-slide>

      </swiper>
      <div class="custom-controls">
        <div class="custom-button-prev--prj">
          <rounded-container :style="stylesCustomButton" v-bind="propsBlackStyle">&#8249;</rounded-container>
        </div>
        <div class="custom-button-next--prj">
          <rounded-container :style="stylesCustomButton" v-bind="propsBlackStyle">&#8250;</rounded-container>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.project-slider-filter {
  .filter__list {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 40px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    min-width: 80px;
    padding: 5px 25px;
    cursor: pointer;
  }

  span:hover {
    color: #ffffff;
  }
}

.swiper-container {
  position: relative;
}

.HighSwiper {
  height: 649px;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    //background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: black;
    overflow: hidden;

    .slide-text-content {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 5px 40px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

    }

    .type-item {
      margin: 0;
      text-align: left;
      color: rgba(255, 255, 255, 0.8);
    }

    .slide-title {
      margin: 0;
      color: #ffffff;
      font-size: 2.5rem;
      line-height: 1;
      text-align: left;
      text-transform: uppercase;
    }

    .slide-price {
      margin: 0;
      text-align: left;
      color: #ffffff;

    }

    .label-info {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 35px;
      width: 31px;
      height: 212px;
      background-color: #208B95;
      writing-mode: vertical-rl;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 42px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
    }


  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 110%;
  }
}

.custom-controls {
  display: flex;
  gap: 10px;
  position: absolute;
  top: -80px;
  right: 0;
  z-index: 1000;

  .custom-button-prev--prj.swiper-button-disabled,
  .custom-button-next--prj.swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;

  }
}


</style>
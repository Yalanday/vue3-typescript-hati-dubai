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
import {PropertyCatalogType} from "@/types/types";

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
        type: Array as () => Array<PropertyCatalogType>,
        default: () => [],
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
    <title-sliders class="title-slider" :title="title"/>
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
          :breakpoints="{ 320:{ slidesPerView:1 }, 767:{ slidesPerView:2, }, 1279: { slidesPerView: slidesPerView} }"
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

@media (max-width: 1279px) {
  .title-slider {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .project-slider-filter {
    .filter__list {
      gap: 8px;
      align-items: center;
      margin-bottom: 20px;
    }

    span {
      height: 40px;
      min-width: 80px;
      padding: 5px 15px;
      cursor: pointer;
    }
  }

  .custom-controls {
    top: -67px
  }
}

@media (max-width: 767px) {

  .title-slider {
    font-size: 2rem;
  }

  .project-slider-filter {
    .filter__list {
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin-bottom: 20px;
    }

    span {
      height: 40px;
      min-width: 80px;
      padding: 5px 15px;
      cursor: pointer;
    }
  }

  .HighSwiper {
    width: 340px;
    height: 580px;
  }

  .custom-controls {
    display: none;
  }
}
</style>
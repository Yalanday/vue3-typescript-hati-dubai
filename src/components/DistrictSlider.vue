<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import {FreeMode, Pagination, Navigation} from 'swiper/modules';
// components
import TitleSliders from "@/components/TitleSliders.vue";
import RoundedContainer from "@/components/RoundedContainer.vue";
//props styles
import {propsBlackStyle} from "@/props/style-collection";
import CatalogCardLink from "@/components/CatalogCardLink.vue";
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
        default: 3
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
    title: 'Bur Dubai',
    src: '/images/dist/dist-1.png',
    city: 'dubai',
    price: 55123
  },
  {
    id: 2,
    title: 'Downtown Dubai',
    src: '/images/dist/dist-2.png',
    city: 'dubai',
    price: 23512
  },
  {
    id: 3,
    title: 'Dubai Marina',
    src: '/images/dist/dist-3.png',
    city: 'dubai',
    price: 42323
  },
  {
    id: 4,
    title: 'chili villi vue js',
    src: '/images/dist/dist-1.png',
    city: 'dubai',
    price: 564867
  },
  {
    id: 5,
    title: 'major hata official',
    src: '/images/dist/dist-3.png',
    city: 'dubai',
    price: 344433
  },
  {
    id: 6,
    title: 'tik tak alladin',
    src: '/images/dist/dist-2.png',
    city: 'dubai',
    price: 12341
  }
]

</script>

<template>
  <div class="container">
    <title-sliders :title="title"/>
    <div class="swiper-container">
      <swiper
          :slidesPerView="slidesPerView"
          :spaceBetween="spaceBetween"
          :freeMode="true"
          :navigation="{
            nextEl: '.custom-button-next--cat',
            prevEl: '.custom-button-prev--cat',
        }"
          :pagination="false"
          :modules="modules"
          class="DistrictSwiper"
      >
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="item.src" :alt="item.title">
          <div class="slide-text-content">
            <p class="slide-title">{{ item.title }}</p>
            <price-universal class="slide-price" :price="item.price"/>
          </div>

          <div class="dynamic-round-link">
            <catalog-card-link/>
          </div>
        </swiper-slide>

      </swiper>
      <div class="custom-controls">
        <div class="custom-button-prev--cat">
          <rounded-container :style="stylesCustomButton" v-bind="propsBlackStyle">&#8249;</rounded-container>
        </div>
        <div class="custom-button-next--cat">
          <rounded-container :style="stylesCustomButton" v-bind="propsBlackStyle">&#8250;</rounded-container>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.swiper-container {
  position: relative;
  margin-bottom: 60px;
}

.DistrictSwiper {
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
      width: 300px;
      height: 170px;
      border-radius: 50px 0 50px 0;
      left: 0;
      top: 0;
      background-color: #208B95;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 37px;
    }

    .slide-title {
      margin: 0 0 10px;
      color: #fff;
      font-size: 2.1rem;
      line-height: 1;
      text-align: left;
      text-transform: uppercase;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .slide-price {
      margin: 0;
      color: #ffffff;
    }

    .dynamic-round-link {
      position: absolute;
      bottom: 30px;
      left: 15px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.custom-controls {
  display: flex;
  gap: 10px;
  position: absolute;
  top: -100px;
  right: 0;
  z-index: 1000;

  .custom-button-prev--cat.swiper-button-disabled,
  .custom-button-next--cat.swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;

  }
}


</style>
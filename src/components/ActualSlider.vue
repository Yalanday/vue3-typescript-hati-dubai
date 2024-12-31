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
import IconFavorite from "@/components/IconFavorite.vue";
//props styles
import {propsBlackStyle} from "@/props/style-collection";
import CatalogCardLink from "@/components/CatalogCardLink.vue";


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
        default: 4
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
    favorite: false
  },
  {
    id: 2,
    title: 'Телек IP круглый год',
    src: '/images/rec/rec-2.png',
    city: 'dubai',
    favorite: false
  },
  {
    id: 3,
    title: 'Inter trans bablos',
    src: '/images/rec/rec-3.png',
    city: 'dubai',
    favorite: true
  },
  {
    id: 4,
    title: 'chili villi vue js',
    src: '/images/rec/rec-4.png',
    city: 'dubai',
    favorite: false
  },
  {
    id: 5,
    title: 'major hata official',
    src: '/images/rec/rec-5.png',
    city: 'dubai',
    favorite: true
  },
  {
    id: 6,
    title: 'tik tak alladin',
    src: '/images/rec/rec-1.png',
    city: 'dubai',
    favorite: false
  },
  {
    id: 7,
    title: 'jean in bouttle',
    src: '/images/rec/rec-2.png',
    city: 'dubai',
    favorite: false
  },
  {
    id: 8,
    title: 'zloi macharaja',
    src: '/images/rec/rec-3.png',
    city: 'dubai',
    favorite: false
  },
  {
    id: 9,
    title: 'slovo arabacana',
    src: '/images/rec/rec-4.png',
    city: 'dubai',
    favorite: false
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
          class="HighSwiper"
      >
        <swiper-slide v-for="item in items" :key="item.id">
          <img :src="item.src" :alt="item.title">
          <p class="slide-title">{{ item.title }}</p>
          <div class="favorite">
            <icon-favorite :id="item.id" :is-favorite="item.favorite"/>
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
}

.HighSwiper {
  height: 413px;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    background-color: black;
    overflow: hidden;

    .slide-title {
      padding: 30px 10px 5px;
      color: #fff;
      font-size: 1.4rem;
      line-height: 1.1;
      width: 60%;
      text-align: left;
      text-transform: uppercase;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .favorite {
      position: absolute;
      top: 30px;
      right: 15px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 243px;
    margin-bottom: auto;
    border-radius: 50px;
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
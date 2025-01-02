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
import MiniSlider from "@/components/MiniSlider.vue";
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
    favorite: false,
    type: 'live',
    typeValue: 'Жилой комплекс',
    price: 344234,
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-1.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-2.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-3.png',
      }
    ]
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
    labelInfo: 'Только славяне',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-2.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-4.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-1.png',
      }
    ]
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
    labelInfo: 'Без котов',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-3.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-1.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-5.png',
      }
    ]
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
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-4.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-2.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-3.png',
      }
    ]
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
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-3.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-1.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-2.png',
      }
    ]
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
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-3.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-2.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-5.png',
      }
    ]
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
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-3.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-1.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-5.png',
      }
    ]
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
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-3.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-2.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-5.png',
      }
    ]
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
    labelInfo: 'Сдача в 2025',
    options: {
      bedroom: "2 спальни",
      square: "455"
    },
    images: [
      {
        id: 1,
        src: '/images/rec/rec-3.png',
      },
      {
        id: 2,
        src: '/images/rec/rec-1.png',
      },
      {
        id: 3,
        src: '/images/rec/rec-5.png',
      }
    ]
  }
]

</script>

<template>
  <div class="container">
    <title-sliders class="title-slider" :title="title"/>
    <div class="swiper-container">
      <swiper
          :breakpoints="{ 320:{ slidesPerView:1 }, 630:{ slidesPerView:2 }, 767:{ slidesPerView:2, }, 1279: { slidesPerView: slidesPerView} }"
          :spaceBetween="spaceBetween"
          :freeMode="true"
          :navigation="{
            nextEl: '.custom-button-next--act',
            prevEl: '.custom-button-prev--act',
        }"
          :pagination="false"
          :modules="modules"
          class="ActualSwiper"
      >
        <swiper-slide v-for="item in items" :key="item.id">
          <div class="mini-slider">
            <mini-slider :images="item.images"/>
          </div>
          <div class="slide-info">
            <span class="slide-type">{{ item.typeValue }}</span>
            <p class="slide-title">{{ item.title }}</p>
            <div class="slide-options">
              <span class="slide-options__item slider-bedroom">{{ item.options.bedroom }}</span>
              <span class="slide-options__item slider-square">{{ item.options.square }} м&#178;</span>
            </div>
            <price-universal class="slide-price" :price="item.price"/>
          </div>
        </swiper-slide>

      </swiper>
      <div class="custom-controls">
        <div class="custom-button-prev--act">
          <rounded-container :style="stylesCustomButton" v-bind="propsBlackStyle">&#8249;</rounded-container>
        </div>
        <div class="custom-button-next--act">
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

  @media (max-width: 1279px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
}

.ActualSwiper {
  height: 413px;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .mini-slider {
      margin-bottom: 20px;
    }

    .slide-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
    }

    .slide-type,
    .slide-title {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
      line-height: 1.1;
      text-align: left;
      text-transform: uppercase;
    }

    .slide-title {
      margin-bottom: 20px;

      @media (max-width: 1279px) {
        margin-bottom: 10px;
      }
    }

    .slide-options {
      opacity: 0.5;
      margin-bottom: 15px;
      display: flex;
      gap: 20px;
      @media (max-width: 1279px) {
        margin-bottom: 10px;
      }

      .slide-options__item {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .slide-options__item::before {
        content: '';
        width: 20px;
        height: 20px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .slider-bedroom::before {
        background-image: url("/icons/betroom.svg");
      }

      .slider-square::before {
        background-image: url("/icons/square.svg");
      }
    }

    .slide-price {
      text-shadow: none;
    }
  }
}

.custom-controls {
  display: flex;
  gap: 10px;
  position: absolute;
  top: -100px;
  right: 0;
  z-index: 1000;

  @media (max-width: 1279px) {
    top: -85px;
  }

  @media (max-width: 767px) {
    display: none;
  }

  .custom-button-prev--act.swiper-button-disabled,
  .custom-button-next--act.swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;

  }
}

@media (max-width: 629px) {
  .ActualSwiper {
    width: 300px;
  }
}

.title-slider {
  @media (max-width: 1279px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}
</style>
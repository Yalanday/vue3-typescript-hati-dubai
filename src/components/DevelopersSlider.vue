<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
// import required modules
import {FreeMode, Pagination, Navigation} from 'swiper/modules';
// components
import RoundedContainer from "@/components/RoundedContainer.vue";
//props styles
import {propsBlackStyle, propsGreenStyle} from "@/props/style-collection";
import MiniFullScreenSlider from "@/components/MiniFullScreenSlider.vue";

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
        default: 1
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
    title: 'Serenia Residences',
    description: 'Serenia Residences is a hidden gem on The Palm Jumeirah, home to a select few. This magnificent property is a private residential resort that offers an elite collection of 1, 2, 3 bedroom apartments and half-floor penthouses set in a stunning location overlooking The Palm, Atlantis, Burj Al Arab, the Dubai Marina skyline and the captivating blue seas of The Gulf.  ',
    src: '/images/dev/dev-1.png',
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
        src: '/images/dev/dev-1.jpg',
        price: 44423,
        title: 'Dilla Filanto Const'
      },
      {
        id: 2,
        src: '/images/dev/dev-2.jpg',
        price: 43332,
        title: 'Mavric perdicto'
      },
      {
        id: 3,
        src: '/images/dev/dev-1.jpg',
        price: 64353,
        title: 'Haba haba cli'
      }
    ]
  },
  {
    id: 2,
    title: 'Major Residences off',
    description: 'Serenia Residences is a hidden gem on The Palm Jumeirah, home to a select few. This magnificent property is a private residential resort that offers an elite collection of 1, 2, 3 bedroom apartments and half-floor penthouses set in a stunning location overlooking The Palm, Atlantis, Burj Al Arab, the Dubai Marina skyline and the captivating blue seas of The Gulf.  ',
    src: '/images/dev/dev-2.png',
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
        src: '/images/dev/dev-2.jpg',
        price: 22332,
        title: 'Dilla Filanto Const'
      },
      {
        id: 2,
        src: '/images/dev/dev-1.jpg',
        price: 44423,
        title: 'Dilla Filanto Const'
      },
      {
        id: 3,
        src: '/images/dev/dev-2.jpg',
        price: 44423,
        title: 'Dilla Filanto Const'
      }
    ]
  },
  {
    id: 3,
    title: 'Dev null tadj',
    description: 'Serenia Residences is a hidden gem on The Palm Jumeirah, home to a select few. This magnificent property is a private residential resort that offers an elite collection of 1, 2, 3 bedroom apartments and half-floor penthouses set in a stunning location overlooking The Palm, Atlantis, Burj Al Arab, the Dubai Marina skyline and the captivating blue seas of The Gulf.  ',
    src: '/images/dev/dev-1.png',
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
        src: '/images/dev/dev-1.jpg',
        price: 44423,
        title: 'Dilla Filanto Const'
      },
      {
        id: 2,
        src: '/images/dev/dev-2.jpg',
        price: 44423,
        title: 'Dilla Filanto Const'
      },
      {
        id: 3,
        src: '/images/dev/dev-1.jpg',
        price: 44423,
        title: 'Dilla Filanto Const'
      }
    ]
  },
]

</script>

<template>
  <div class="swiper-container">
    <swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :freeMode="false"
        :navigation="{
            nextEl: '.custom-button-next--act',
            prevEl: '.custom-button-prev--act',
        }"
        :pagination="false"
        :modules="modules"
        class="DevSwiper"
    >
      <swiper-slide v-for="item in items" :key="item.id">

        <div class="slide-info">
          <p class="slide-title">{{ item.title }}</p>
          <p class="slide-descr">{{ item.description }}</p>
        </div>
        <div class="slide-links">
          <rounded-container v-bind="propsGreenStyle">
            <router-link to="/" class="slide-link">
              Объекты застройщика
            </router-link>
          </rounded-container>
          <rounded-container v-bind="propsGreenStyle">
            <router-link to="/" class="slide-link">
              Больше о застройщике
            </router-link>
          </rounded-container>
        </div>

        <div class="mini-slider">
          <mini-full-screen-slider :images="item.images"/>
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
</template>

<style scoped lang="scss">

.swiper-container {
  position: relative;
  margin-bottom: 60px;
}

.DevSwiper {
  height: 930px;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;

    .mini-slider {
      margin-bottom: 20px;
    }

    .slide-info {
      width: 100%;
      display: flex;
      align-items: flex-end;
      padding: 0;
      margin-bottom: 40px;
    }

    .slide-title {
      width: 50%;
      max-height: 212px;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
      padding: 0 20px 0 0;
      font-size: 6rem;
      line-height: 1.1;
      text-align: left;
      text-transform: uppercase;
    }

    .slide-descr {
      margin: 0;
      width: 50%;
      padding: 0 0 0 40px;
      text-align: left;
    }

    .slide-links {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      .slide-link {
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding: 18px 39px;
        font-weight: 500;
        text-transform: uppercase;
        color: #000;
        text-decoration: none;
      }

      .slide-link:hover {

        color: #ffffff;
      }


    }
  }
}

.custom-controls {
  display: flex;
  gap: 10px;
  position: absolute;
  top: 255px;
  left: 53%;
  z-index: 1000;

  .custom-button-prev--act.swiper-button-disabled,
  .custom-button-next--act.swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;

  }
}


</style>
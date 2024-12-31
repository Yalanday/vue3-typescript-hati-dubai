<script setup lang="ts">
import {ref, computed, watch, onMounted} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {EffectFade, Navigation, Pagination} from 'swiper/modules'
import {useFormatPriceValue} from "@/hooks/hooks";
import {getCurrentExValutes} from "@/api/api-valute";
// store
import {useCurValuteStore} from "@/store/cur-valute";
//types
import type {TypeItemSlide} from "@/types/types";

const props = defineProps({
  items: {
    type: Array as () => TypeItemSlide[],
    default: () => ([]),
  },
});

const slides = ref([] as TypeItemSlide[]);
const store = useCurValuteStore();
const currentValute = computed(() => store.curValute);
const cursDollar = ref(1);

const formatPriceValue = useFormatPriceValue;

watch(
    () => props.items,
    (newVal) => {
      slides.value = newVal
    }
)

onMounted(
    async () => {
      cursDollar.value = await getCurrentExValutes();
    }
)

</script>

<template>
  <div class="type-slider">
    <swiper v-for="item in items"
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="{
          nextEl: '.type-slider-next',
          prevEl: '.type-slider-prev',
          disabledClass: 'disabled',
        }"
        :pagination="{clickable: true}"
        :modules="[EffectFade, Navigation, Pagination]"
        class="TypeSwiper"
    >
      <swiper-slide
          v-for="(slide, index) in item.images"
          :key="index"
      >
        <img :src="slide.src" :alt="`Slide ${index}`"/>

      </swiper-slide>
      <div class="container container__type-controls">
        <div class="type-slider-content">
          <div>
            <p class="type-slider-title" v-html="item.name"></p>
            <p class="type-slider-price">от {{ formatPriceValue(item.price, currentValute, cursDollar) }}</p>
          </div>
          <p class="type-slider-city" v-html="item.city"></p>
        </div>

        <div class="type-slider-controls">
          <button class="type-slider-btn type-slider-prev"></button>
          <router-link class="type-slider-btn type-slider-btn--link" to="/detail">Смотреть</router-link>
          <button class="type-slider-btn type-slider-next"></button>
        </div>
      </div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>

.type-slider {
  position: relative;

  .TypeSwiper {
    margin-bottom: 60px;
  }

  .container__type-controls {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .type-slider-controls {
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    margin-top: auto;
    margin-bottom: 40px;
  }

  .type-slider-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .3s ease;
    font-size: 2.5rem;

    &--link {
      margin: auto;
      width: auto;
      height: 60px;
      padding: 10px 40px;
      border-radius: 25px;
      opacity: 0.2;
      font-size: 1.2rem;
    }

    &:hover {
      background-color: #208B95;
    }

    &--link:hover {
      color: #000000;
      opacity: 1;
      background-color: #ffffff;

    }

    &:hover:after {
      color: #fff;
    }
  }

  .type-slider-btn:after {
    position: absolute;
    transform: translateY(-5%);
  }

  .type-slider-prev:after {
    content: '←';

  }

  .type-slider-next:after {
    content: '→';
  }


  .type-slider-content {
    width: 1280px;
    position: absolute;
    left: 50%;
    top: 45px;
    transform: translateX(-50%);
    z-index: 110;
    color: #ffffff;
    padding: 0 80px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .type-slider-title {
    text-transform: uppercase;
    width: 380px;
    font-size: 3rem;
    line-height: 100%;
    margin: 0 0 10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .type-slider-price {
    margin: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .type-slider-city {
    text-transform: capitalize;
    line-height: 100%;
    margin: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

}


.TypeSwiper {
  height: 900px;

  .swiper-slide {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 1279px) {
  .TypeSwiper {
    height: 400px;
    margin-bottom: 50px;
  }

  .type-slider {

    .type-slider-content {
      width: 768px;
      padding: 0 20px;
    }

    .type-slider-btn {
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }

    .type-slider-btn--link {
      width: 120px;
      height: 40px;
      font-size: 1rem;
    }

    .type-slider-controls {
      padding: 0 20px;
    }
  }
}

</style>

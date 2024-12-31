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
import type {PromoItemSlide} from "@/types/types";

const props = defineProps({
  items: {
    type: Array as () => PromoItemSlide[],
    default: () => ([]),
  },
});

const store = useCurValuteStore();
const currentValute = computed(() => store.curValute);
const cursDollar = ref(1);
const slides = ref([] as PromoItemSlide[]);

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
  <div class="promo-slider">
    <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :navigation="{
          nextEl: '.promo-slider-next',
          prevEl: '.promo-slider-prev',
          disabledClass: 'disabled',
        }"
        :pagination="{clickable: true}"
        :modules="[EffectFade, Navigation, Pagination]"
        class="PromoSwiper"
    >
      <swiper-slide
          v-for="slide in slides"
          :key="slide.id"
      >
        <img :src="slide.src"/>
        <div class="promo-slider-content">
          <div>
            <p class="promo-slider-title" v-html="slide.text"></p>
            <p class="promo-slider-price"> от {{ formatPriceValue(slide.price, currentValute, cursDollar) }}</p>
          </div>
          <p class="promo-slider-city" v-html="slide.city"></p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="container container__promo-controls">

      <div class="promo-slider-controls">
        <button class="promo-slider-btn promo-slider-prev"></button>
        <button class="promo-slider-btn promo-slider-next"></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.promo-slider {
  position: relative;

  .container__promo-controls {
    position: absolute;
    left: 50%;
    bottom: 45%;
    transform: translateX(-50%);
    z-index: 100;
  }

  .promo-slider-controls {
    display: flex;
    justify-content: space-between;
    padding: 0 80px;

  }

  .promo-slider-btn {
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

    &:hover {
      background-color: #208B95;

    }

    &:hover:after {
      color: #fff;
    }
  }

  .promo-slider-btn:after {
    position: absolute;
    transform: translateY(-5%);
  }

  .promo-slider-prev:after {
    content: '←';

  }

  .promo-slider-next:after {
    content: '→';
  }

  .promo-slider-content {
    width: 1280px;
    position: absolute;
    left: 50%;
    bottom: 25px;
    transform: translateX(-50%);
    z-index: 110;
    color: #ffffff;
    height: 100%;
    padding: 0 80px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .promo-slider-title {
    text-transform: uppercase;
    width: 380px;
    font-size: 3rem;
    line-height: 100%;
    margin: 0 0 5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .promo-slider-price {
    margin: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .promo-slider-city {
    text-transform: capitalize;
    line-height: 100%;
    margin: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
}

.PromoSwiper {
  height: 560px;

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
  .PromoSwiper {
    height: 400px;
  }

  .promo-slider {

    .promo-slider-content {
      width: 768px;
      padding: 0 20px;
    }

    .promo-slider-btn {
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }

    .promo-slider-controls {
      padding: 0 20px;
    }
  }
}

</style>

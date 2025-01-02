<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {EffectFlip, Pagination, Navigation} from 'swiper/modules';

const textContent = [
  {
    text: "Первопричиной снижения цен считается увеличение числа предложений на рынке недвижимости, что позволяет эмирату быть на третьем месте в списке городов мира."
  },
  {
    text: "Второпричина  повышения цен позволяет эмирату быть на третьем месте в списке городов мира."
  },
  {
    text: "И еще надоело это исключение - Где? В Дубаи. В Дубае и точка."
  },
  {
    text: "Много сала не бывает."
  }
]

</script>

<template>
  <swiper
      :effect="'flip'"
      :grabCursor="true"
      :pagination="{clickable: true}"
      :navigation="true"
      :modules="[EffectFlip, Pagination, Navigation]"

      class="TextSwiper"
  >
    <swiper-slide v-for="(item, index) in textContent" :key="index"
    >
      <p class="slide-text">{{ item.text }}</p>

    </swiper-slide>

  </swiper>
</template>

<style scoped lang="scss">
.TextSwiper {
  width: 430px;
  height: 255px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 430px;
    height: 255px;
    padding: 1rem 0.5rem;
  }
}

@media (max-width: 1279px) {
  .TextSwiper {
    width: 350px;
    height: 180px;

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 430px;
      padding: 1rem 0.5rem;
    }
  }
}

@media (max-width: 767px) {
  .TextSwiper {
    display: none;
  }
}

</style>

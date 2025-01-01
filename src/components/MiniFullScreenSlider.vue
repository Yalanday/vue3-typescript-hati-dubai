<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {Pagination} from 'swiper/modules';
import PriceUniversal from "@/components/PriceUniversal.vue";

type ImagesProps = {
  id: number,
  src: string,
  title: string,
  price: number
}

defineProps(
    {
      images: {
        type: Array as () => ImagesProps[],
      }
    }
)


</script>

<template>
  <swiper
      :effect="'flip'"
      :grabCursor="true"
      :pagination="{clickable: true}"
      :modules="[Pagination]"
      :space-between="10"

      class="MiniFSSwiper"
  >
    <swiper-slide v-for="item in images" :key="item.id"
    >
      <img :src="item.src" :alt="`slide № ${item.id}`"/>
      <div class="slide-info">
        <span class="slide-title"> {{ item.title }}</span>
        <price-universal :price="item.price"/>
      </div>

    </swiper-slide>

  </swiper>
</template>

<style scoped lang="scss">
.MiniFSSwiper {
  width: 1248px;
  height: 509px;

  .swiper-slide {
    background-color: #e5e5e5;
    background-position: center;
    background-size: cover;
    border-radius: 25px;
    overflow: hidden;
  }

  .swiper-slide img {
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide .slide-info {
    position: absolute;
    bottom: 40px;
    left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #ffffff;
    text-shadow: 1px 1px 1px #000000;
  }

  .swiper-slide .slide-title {
    text-transform: uppercase;
    font-size: 2rem;
    max-width: 400px;
    text-shadow: 2px 2px 2px #000000;
  }
}

</style>

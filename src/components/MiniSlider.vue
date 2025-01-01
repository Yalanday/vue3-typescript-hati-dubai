<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {Pagination} from 'swiper/modules';

type ImagesProps = {
  id: number,
  src: string
}

defineProps(
    {
      images: {
        type: Array as ImagesProps,
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

      class="MiniSwiper"
  >
    <swiper-slide v-for="item in images" :key="item.id"
    >
      <img :src="item.src" :alt="`slide № ${item.id}`"/>

    </swiper-slide>

  </swiper>
</template>

<style scoped lang="scss">
.MiniSwiper {
  width: 297px;
  height: 243px;

  .swiper-slide {
    background-color: #e5e5e5;
    background-position: center;
    background-size: cover;
    border-radius: 25px;
    overflow: hidden;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>

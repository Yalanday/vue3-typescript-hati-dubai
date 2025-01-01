<script setup lang="ts">
import {computed, ref, Ref} from "vue";
// components
import TextSlider from "@/components/TextSlider.vue";
// store
import {useCurCityStore} from "@/store/cur-city";
import HeroFilter from "@/components/HeroFilter.vue";
import RoundedContainer from "@/components/RoundedContainer.vue";
// props
import {propsFilterStyle} from "@/props/style-collection";

const curCityStore = useCurCityStore();

const inDubai = computed(
    () => {
      if (curCityStore.curCity === 'dubai') return true;
      else return false
    }
)

const cityValue = computed(
    () => {
      if (curCityStore.curCity === 'dubai') return 'Дубае';
      else return 'Абу-Даби'
    }
)

</script>

<template>
  <div class="main__hero hero">
    <div class="hero__top-block container">
      <div class="hero__top-block__left">
        <h2 class="hero__title">Продажа и&nbsp;аренда</h2>
      </div>
      <div class="hero__top-block__right">
        <text-slider/>
      </div>
    </div>
    <div class="hero__bottom-block"
         :style="{backgroundImage: `url(${inDubai ? '/images/hero-bcg.png': '/images/abu-dabi-bcg.jpg'})`}"
    >
      <div class="hero__bottom-block-container container">
        <h2 class="hero__title hero__title--bottom">новостроек <br> в&nbsp;{{ cityValue }}</h2>
        <rounded-container style="width: 70%; align-self: center" v-bind="propsFilterStyle">
          <hero-filter/>
        </rounded-container>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.hero {

  margin-bottom: 60px;
  .hero__top-block {
    display: flex;

  }

  .hero__title {
    font-size: 8rem;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    margin-bottom: 20px;
  }

  .hero__title--bottom {
    color: #ffffff;
  }

  .hero__bottom-block {
    width: 100%;
    height: 558px;
  }

  .hero__bottom-block-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 30px;
  }


}

</style>
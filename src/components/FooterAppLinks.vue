<script setup lang="ts">
// component
import RoundedContainer from "@/components/RoundedContainer.vue";
// props
import {propsBlackStyle} from "@/props/style-collection";

const links = [
  {
    label: "Доступно в AppStore",
    href: "/"
  },
  {
    label: "Доступно в Google Play",
    href: "/"

  }
]

</script>

<template>
  <div class="footer__app-links app-links">
    <ul class="app-links__list">
      <li v-for="(link, index) in links" :key="index" class="app-links__item">
        <rounded-container v-bind="propsBlackStyle">
          <router-link :to="link.href" class="app-links__link" v-html="link.label"/>
        </rounded-container>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.app-links__list {
  display: flex;
  gap: 18px;

  @media (max-width: 767px) {
    gap:10px
  }

  .app-links__link {
    color: #000000;
    display: block;
    font-size: 0.8rem;
    line-height: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    padding: 20px 30px;

    @media (max-width: 767px) {
      padding: 20px 10px;

    }
  }

  .app-links__link:hover {
    color: #ffffff;
  }

}
</style>
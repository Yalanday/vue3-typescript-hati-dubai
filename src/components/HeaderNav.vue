<script setup lang="ts">

import BurgerButton from "@/components/BurgerButton.vue";

type HeaderNavItem = {
  label: string,
  link: string,
  active: boolean,
}

const navItems: HeaderNavItem[] = [
  {label: 'Продажа', link: '/sale', active: true},
  {label: 'Аренда', link: '/blog', active: false},
  {label: 'Новостройки', link: '/contact', active: false},
  {label: 'Виллы', link: '/contact', active: false},
  {label: 'Сервисы', link: '/contact', active: false},
  {label: 'Компании', link: '/company', active: false},
];

defineProps(
    {
      isOpen: {
        type: Boolean,
        default: true,
      },
    }
)

</script>

<template>
  <div class="nav-container" :class="{active: isOpen}">
    <ul class="header__nav nav">
      <li class="nav__item" v-for="(item, index) in navItems" :key="index">
        <router-link :to="item.link">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

.nav {
  display: flex;
  flex-wrap: nowrap;
}

.nav__item {
  padding: 0 10px;
}

.close-btn {
  display: none;
}

@media (max-width: 1279px) {
  .nav-container {
    display: none;
    position: absolute;
    z-index: 200;
    background-color: #f5f5f5;
    width: 90%;


    &.active {
      display: flex;
      align-items: center;
    }
  }

  .nav {
    align-items: center;
    height: 89px;
    gap: 20px;
    padding: 0 20px;
  }

  .nav__item {
    border: 1px solid black;
    border-radius: 50px;
    padding: 5px 10px;
  }

  .nav__item:hover {
    background-color: #000000;
  }

  .nav__item:hover a {
    color: #ffffff;
  }
}

@media (max-width: 767px) {
  .nav-container {
    top: 0;
    width: 100%;
    transform: translateX(-110%);
    transition: transform 0.3s ease-in-out;
    display: flex;

    &.active {
      transform: translateX(-20%);
    }
  }

  .nav {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .nav__item {
  border: none;
    padding: 5px 0;
  }
}
</style>
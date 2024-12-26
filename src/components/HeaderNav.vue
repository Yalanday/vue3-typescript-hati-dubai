<script setup lang="ts">

type HeaderNavItem = {
  label: string,
  link: string,
  active: boolean,
}

const navItems: HeaderNavItem[] = [
  {label: 'Продажа', link: '/', active: true},
  {label: 'Аренда', link: '/blog', active: false},
  {label: 'Новостройки', link: '/contact', active: false},
  {label: 'Виллы', link: '/contact', active: false},
  {label: 'Сервисы', link: '/contact', active: false},
  {label: 'Компании', link: '/company', active: false},
];

</script>

<template>
  <ul class="header__nav nav">
    <li class="nav__item" v-for="(item, index) in navItems" :key="index">
      <router-link :to="item.link">{{ item.label }}</router-link>
    </li>
  </ul>
</template>

<style scoped>

.nav {
  display: flex;
  flex-wrap: nowrap;
}

.nav__item {
  padding: 0 10px;
}

</style>
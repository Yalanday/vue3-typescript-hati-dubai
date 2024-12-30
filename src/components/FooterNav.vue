<script setup lang="ts">
const footerNavLinks = [
  {
    id: 1,
    href: "/",
    label: "Справочный центр",
  },
  {
    id: 2,
    href: "/",
    label: "Юридические документы",
  },
  {
    id: 3,
    href: "/",
    label: "Тарифы и цены",
  },
  {
    id: 4,
    href: "/",
    label: "Помощь",
  },
  {
    id: 5,
    href: "/",
    label: "Поиск на карте",
  },
  {
    id: 6,
    href: "/",
    label: "Проверка недвижимости",
  },
  {
    id: 7,
    href: "/",
    label: "Карта сайта",
  },
  {
    id: 8,
    href: "/",
    label: "Свежие объявления",
  },
  {
    id: 9,
    href: "/",
    label: "Карьера в Циан",
  }
]
</script>

<template>
  <div class="footer__navigation footer-nav">
    <ul class="footer-nav__list">
      <li v-for="link in footerNavLinks" :key="link.id" class="footer-nav__item">
        <router-link :to="link.href"
                     target="_blank"
                     v-html="link.label"
                     class="footer-nav__link"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-nav {
  padding: 20px 0;

  .footer-nav__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    flex-wrap: wrap;
  }

  .footer-nav__link {
    font-size: 0.8rem;
  }
}
</style>
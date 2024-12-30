<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const visible = ref(false);
let scrollPosition = null;

const checkScroll = () => {
  visible.value = window.pageYOffset > 100; // кнопка видна только когда прокрутка больше чем 100 пикселей.
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  document.addEventListener('scroll', checkScroll);
  scrollPosition = window.pageYOffset;
});

onUnmounted(() => {
  document.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <a href="#header"
      v-show="visible"
      class="back-to-top-btn"
      v-smooth-scroll="{el: '#header'}"
  >
    ↑
  </a>
</template>

<style scoped lang="scss">
.back-to-top-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  /* здесь вы можете настроить свои стили для кнопки */
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  outline: none;
  font-size: 2rem;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
}


</style>
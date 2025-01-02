<script setup lang="ts">
import RoundedContainer from "@/components/RoundedContainer.vue";
import {propsGreenStyle} from "@/props/style-collection";
import {Modal} from 'ant-design-vue';

const countDown = () => {
  let secondsToGo = 3;
  const modal = Modal.success({
    title: 'Поздравляем!',
    content: `Красавчик, ты скачал каталог. Через ${secondsToGo} секунды окно закроется`,
  });

  const interval = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Красавчик, ты скачал каталог. Через ${secondsToGo} секунды окно закроется`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    modal.destroy();
  }, secondsToGo * 1000);
};

</script>

<template>
  <section class="catalog-download container">
    <div class="catalog-download__container ">
      <div class="catalog-download__content">
        <h2 class="catalog-download__title title">
          Уникальный выбор жилья в каталоге
        </h2>
        <p class="catalog-download__description description">
          Больше 10000 предложений апартаментов, квартир и&nbsp;другой недвижимости, которых нет на сайтах!
        </p>
        <rounded-container class="rounded-margin" v-bind="propsGreenStyle">
          <span @click="countDown" class="catalog-download__button down-link">Скачать каталог</span>
        </rounded-container>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalog-download {
  width: 100%;
  height: 509px;
  margin-bottom: 60px;

  .catalog-download__container {
    height: 100%;
    border-radius: 25px;
    background-image: url("/images/cat-down.jpg");
  }

  .catalog-download__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    padding: 3.6rem;
  }

  .title {
    text-transform: uppercase;
    line-height: 1;
    font-size: 3rem;
    font-weight: 400;
    margin: 0 0 40px;
    color: #ffffff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #ffffff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  .rounded-margin {
    margin-top: auto;
  }

  .down-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    line-height: 1;
    text-transform: uppercase;
    width: 250px;
    height: 60px;
    cursor: pointer;
  }

  .down-link:hover {
    color: #ffffff;
  }
}

@media screen and (max-width: 1279px) {
  .catalog-download {
    height: 400px;
    margin-bottom: 40px;

    .catalog-download__content {
      width: 80%;
      padding: 2.6rem;
    }

    .title {
      font-size: 3rem;
    }
  }
}

@media screen and (max-width: 767px) {
  .catalog-download {
    margin-bottom: 30px;

    .catalog-download__content {
      width: 90%;
      padding: 2rem;
    }

    .title {
      font-size: 2rem;
    }
  }
}

</style>
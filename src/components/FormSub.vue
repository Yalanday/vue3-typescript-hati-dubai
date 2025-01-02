<script lang="ts" setup>
import {onMounted, reactive, ref} from 'vue';
import TitleSliders from "@/components/TitleSliders.vue";
import axios from "axios";
import {message} from 'ant-design-vue';
import {Form} from 'ant-design-vue'

interface FormState {
  useremail: string;
}

const formState = reactive<FormState>({
  useremail: '',
});

async function onSubmitEmail(values: any) {
  try {
    const res = await axios.post('https://9303851354d5e8f0.mokky.dev/register', {'email': values.useremail})
    message.success({
      content: 'Благодарим за подписку',
      style: {
        fontSize: '1rem',
      }
    })
    formState.useremail = '';

  } catch (e) {
    console.log(e);
    onFinishFailed(e);
    message.error({
      content: 'Подписка уже существует или произошла ошибка',
      style: {
        fontSize: '1rem',
      }
    });
  }
}

const onFinish = async (values: any) => {
  console.log('Success:', values);
  await onSubmitEmail(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

message.config({
  top: `50%`,  // Установка расположения сообщения в середине экрана (но это будет выглядеть отступом от верха, но не центром)
  duration: 2, // Сообщение отобразится на 2 секунды

});

</script>

<template>
  <div class="container">
    <div class="form-subscribe">
      <title-sliders class="form-subscribe__title"
                     title="Подпишитесь на&nbsp;рассылку о&nbsp;новостях недвижимости"/>
      <p class="form-subscribe__descr">При подписке вы&nbsp;принимаете условия Пользовательского соглашения и&nbsp;Политики
        конфиденциальности</p>

      <a-form
          class="form-subscribe__form"
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            aria-label="useremail"
            name="useremail"
            :rules="[{ required: true, message: 'Пожалуйста ввидете свой email' }]"
        >
          <a-input
              placeholder="Введите ваш email"
              class="custom-input"
              type="email"
              v-model:value="formState.useremail"

          />
        </a-form-item>

        <a-form-item>
          <a-button class="custom-sub-btn" type="primary" html-type="submit">Подписаться</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-subscribe {
  padding: 60px;
  height: 509px;
  background-image: url("/images/form-sub.jpg");
  border-radius: 25px;
  margin-bottom: 60px;

  @media (max-width: 1279px) {
    padding: 30px;
    height: 400px;
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    padding: 10px;
    height: auto;
    margin-bottom: 20px;
  }

  .form-subscribe__title {
    font-size: 3rem;
    margin: 0 0 33px;
    width: 60%;
    color: #ffffff;
    text-shadow: 1px 1px 1px #000000;

    @media (max-width: 1279px) {
      margin: 0 0 15px;
      width: 100%;
    }

    @media (max-width: 767px) {
      font-size: 2rem;
      width: 100%;
    }
  }

  .form-subscribe__descr {
    font-size: 0.9rem;
    margin: 0 0 88px;
    width: 40%;
    color: #ffffff;
    text-shadow: 1px 1px 1px #000000;

    @media (max-width: 1279px) {
      margin: 0 0 45px;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .form-subscribe__form {
    display: flex;
    width: 713px;
    align-items: center;
    justify-content: flex-start;
    gap: 0;

    @media (max-width: 767px) {
      width: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .custom-input {
    width: 500px;
    height: 89px;
    border-radius: 50px;
    padding: 0 40px;
    font-size: 1.2rem;

    @media (max-width: 1279px) {
      height: 60px;
      padding: 0 20px;
    }

    @media (max-width: 767px) {
      width: 300px;
    }
  }

  .custom-sub-btn {
    width: 255px;
    background-color: #208B95;
    border-radius: 50px;
    height: 89px;
    margin-left: -100px;
    font-size: 1.2rem;
    text-transform: uppercase;

    @media  (max-width: 1279px) {
      height: 60px;
      margin-left: -75px;
    }

    @media (max-width: 767px) {
      width: 300px;
      margin-left: 0;
    }
  }
}

</style>
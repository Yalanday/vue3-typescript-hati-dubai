<script setup>
import FooterNav from "@/components/FooterNav.vue";
import Logo from "@/components/Logo.vue";
import FooterSocial from "@/components/FooterSocial.vue";
import FooterAppLinks from "@/components/FooterAppLinks.vue";


</script>


<template>
  <footer class="main__footer footer">
    <div class="footer__container container">
      <div class="footer__text-content">
        <p class="text">
          ЦИАН — база данных о недвижимости. Использование сайта означает согласие с Пользовательским соглашением и
          Политикой конфиденциальности ЦИАН. Оплачивая лицензионный платеж, вы принимаете Лицензионное соглашение.
        </p>
      </div>
      <footer-nav/>
      <div class="footer__bottom-block">
        <div class="footer__bottom-left">
          <div class="footer__logo">
            <logo/>
          </div>
          <footer-social/>
        </div>
        <footer-app-links/>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer__container {
  padding-bottom: 3rem;

  .footer__text-content {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem 0;

    .text {
      margin: 0;
      font-size: 0.8rem;
      text-align: justify;
    }
  }

  .footer__bottom-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    .footer__bottom-left {
      display: flex;
      align-items: center;
      gap: 3rem;
    }
  }

}

</style>
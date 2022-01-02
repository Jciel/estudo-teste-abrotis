<template>
  <section class="home-page-section">

    <h4 class="title">Início</h4>

    <div class="cards-container">
      <card-link-menu class="link-page" link-to="/list-companies" title="Listar empresas">
        <i-ic-outline-maps-home-work style="font-size: 48px;" />
      </card-link-menu>

      <card-link-menu class="link-page" link-to="/register-company" title="Cadastrar empresas">
        <i-healthicons-market-stall-outline style="font-size: 48px;" />
      </card-link-menu>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CardLinkMenu from "../components/card-link-menu.vue";

export default defineComponent({
  name: "Home",

  components: {
    "card-link-menu": CardLinkMenu
  },

  setup() {

    return {

    }
  }
})
</script>

<style lang="scss" scoped>
  .home-page-section {
    width: 100%;
    align-self: baseline;
    background-color: #F3F2F1;
    color: var(--text-color-primary);
    padding: 45px;

    .title {
      margin-bottom: 25px;
    }

    .cards-container {
      display: flex;

      .link-page {
        margin-right: 25px;
      }
    }
  }
</style>
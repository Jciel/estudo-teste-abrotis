<template>
  <div class="list-item">
    <div class="company-data">
      <div class="company-photo-container">
        <img :src="company.image">
      </div>
      <div class="company-docs">
        <span class="name">{{ company.name }}</span>
        <span class="document"> {{ company.document }} </span>
      </div>
    </div>

    <span class="city">{{ company.address.city }}/{{ company.address.uf }}</span>

    <span class="postal-code">{{ company.address.postalCode }}</span>

    <span class="opening-date">{{ company.openingDate.toLocaleDateString('pt-BR') }}</span>

    <span class="dot-menu-item">
      <i-bi-three-dots-vertical/>
<!--      <div class="menu-item">-->
<!--        <router-link to="/register-company">Editar</router-link>-->
<!--        <router-link to="#">Inativar</router-link>-->
<!--      </div>-->
    </span>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, toRefs} from "vue";
import {Company} from "./Types";

export default defineComponent({
  name: "ListItem",

  props: {
    company: {
      type: Object as PropType<Company>,
      required: true
    }
  },

  setup(props) {
    const {company} = toRefs(props)

    return {
      company: company
    }
  }
})
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  font-style: normal;
  font-weight: normal;
  padding: 8px 20px;
  border: 1px solid #E5E5E5;
  align-items: center;

  > div,
  > span {
    width: 20%;
  }

  .company-data {
    display: flex;
    font-size: 14px;
    align-items: center;

    .company-photo-container {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      align-self: center;
      margin-bottom: 5px;
      box-sizing: border-box;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .company-docs {
      display: flex;
      flex-direction: column;

      .name {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #484E6A;
      }

      .document {
        font-size: 12px;
        line-height: 14px;
        color: #9AA2A1;
      }
    }
  }

  .city {
    font-size: 14px;
    line-height: 16px;
    color: #484E6A;
  }

  .postal-code {
    font-size: 14px;
    line-height: 16px;
    color: #484E6A;
  }

  .opening-date {
    font-size: 14px;
    line-height: 16px;
    color: #484E6A;
  }

  .dot-menu-item {
    display: flex;
    justify-content: end;
    position: relative;

    .menu-item {
      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 20px;

      a {
        padding: 20px 25px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #3F4B51;
        text-decoration: none;
      }
    }
  }
}
</style>
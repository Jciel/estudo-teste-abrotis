<template>
  <section class="list-company-page-section">
    <div class="header-page">
      <i-akar-icons-chevron-left />
      <router-link to="/">Empresas</router-link>
    </div>
    <div class="header-list-companies">
      <span
          @click="toggleSort"
          class="identify">
        Identificação
        <i-akar-icons-chevron-up class="icon-toggle" v-if="sort === 'ASC'" />
        <i-akar-icons-chevron-down class="icon-toggle" v-if="sort === 'DESC'" />
      </span>
      <span class="city">Cidade/UF</span>
      <span class="postal-code">CEP</span>
      <span class="opening-date">Data de abertura</span>
      <span class="menu-item"></span>
    </div>
    <div class="list-companies-panel">
      <list-item
          v-for="company in items"
          :key="company.id"
          :company="company" />
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, computed, ref,reactive} from "vue";
import {useStore} from "vuex";
import ListItem from "../components/ListItem.vue";
import ListCompaniesPanel from "../components/ListCompaniesPanel.vue";
import { SortingType } from "../components/Types";

export default defineComponent({
  name: "ListCompany",

  components: {
    "list-companies-panel": ListCompaniesPanel,
    "list-item": ListItem
  },

  setup(props) {
    const store = useStore()

    const sort = ref<SortingType>("ASC")
    const items = computed(() => store.getters.filteredCompanies(sort.value))

    const toggleSort = () => sort.value = sort.value === 'ASC' ? "DESC" : "ASC"

    return {
      items: items,
      sort: sort,
      toggleSort: toggleSort
    }
  }
})
</script>

<style lang="scss" scoped>
  .list-company-page-section {
    background-color: #FFFFFF;
    width: 1440px;

    .header-page {
      background-color: var(--secondary);
      padding: 20px 20px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-weight: 500;
      display: flex;

      a {
        color: #FFFFFF;
        text-decoration: none;
      }
    }

    .header-list-companies {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #3C3C3C;
      display: flex;
      justify-content: space-between;
      padding: 33px 20px 16px;

      span {
        width: 20%;
      }

      .identify {
        cursor: pointer;

        .icon-toggle {
          margin-left: 10px;
        }
      }
    }
  }
</style>
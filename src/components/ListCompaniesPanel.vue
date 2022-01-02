<template>
  <div class="list-companies-panel">
    <list-item
      v-for="company in companies"
      :key="company.id"
      :company="company" />
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { Company } from "./Types";
import ListItem from "./ListItem.vue";

export default defineComponent({
  name: "ListCompaniesPanel",

  components: {
    "list-item": ListItem
  },

  props: {
    companies: {
      type: [] as PropType<Array<Company>>,
      required: true
    }
  },

  setup(props) {
    const { companies } = toRefs(props)

    return {
      companies: companies
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
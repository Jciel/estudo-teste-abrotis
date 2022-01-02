<template>
  <router-link class="card-link-menu" :to="linkTo">
    <slot></slot>
    <span class="title">{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "card-link-menu",

  props: {
    linkTo: {
      type: String as PropType<string>,
      required: true
    },

    title: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup(props) {
    return {
      linkTo: props.linkTo,
      title: props.title
    }
  }
})
</script>

<style lang="scss" scoped>
  .card-link-menu {
    display: flex;
    width: 272px;
    height: 160px;
    background: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.26);
    border-radius: 4px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--icon-color);

    .title {
      color: var(--text-color-primary);
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
  }
</style>
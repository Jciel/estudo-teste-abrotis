<template>
  <input
      @input="$emit('update:modelValue', $event.target.value)"
      class="text-input"
      type="text"
      v-maska="maskInput"
      :placeholder="placeholder"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TextInput",

  props: {
    placeholder: {
      type: String as PropType<string>,
      required: true
    },

    mask: {
      type: String as PropType<string> | [] as PropType<Array<string>>,
      default: ''
    }
  },

  setup(props) {

    console.log(props.mask)

    return {
      placeholder: props.placeholder,
      maskInput: props.mask
    }
  }
})
</script>

<style lang="scss" scoped>
  .text-input {
    border-style: none;
    background-color: #FFFFFF;
    outline: none;
    border-bottom: 1px solid #E0E0E0;
    padding: 6px;
    width: 100%;
    color: var(--placeholder-color);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
</style>
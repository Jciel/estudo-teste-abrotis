<template>
  <div class="select-container">
    <span>{{ title }}</span>
    <select
        @input="$emit('update:modelValue', $event.target.value)"
        class="select-input">
      <option disabled selected hidden>{{ placeholder }}</option>
      <option
          v-for="option in options"
          :key="option.title"
          :value="option.value">{{ option.title }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

type optionType = {title: string, value: string}

export default defineComponent({
  name: "SelectInput",

  props: {
    options: {
      type: [] as PropType<Array<optionType>>,
      required: true
    },

    placeholder: {
      type: String as PropType<string>,
      required: true
    },

    title: {
      type: String as PropType<string>
    }
  },

  setup(props) {

    return {
      options: props.options,
      placeholder: props.placeholder,
      title: props.title
    }
  }
})
</script>

<style lang="scss" scoped>
  .select-container {
    color: var(--text-color-secondary);

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
    }

    .select-input {
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
  }
</style>
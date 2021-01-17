<template>
  <button
    class="btn"
    :class="[`btn-${type}`]"
    :disabled="disabled || loading"
    :type="htmlType"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
type ButtonType = 'default' | 'primary' | 'success' | 'danger'
type ButtonHtmlType = 'button' | 'submit' | 'reset'
export default defineComponent({
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator(value: ButtonType) {
        return ['default', 'primary', 'success', 'danger'].includes(value)
      },
    },
    htmlType: {
      type: String as PropType<ButtonHtmlType>,
      default: 'button',
      validator(value: ButtonHtmlType) {
        return ['button', 'submit', 'reset'].includes(value)
      },
    },
  },
  emits: ['click'],
})
</script>
<style scoped>
.btn {
  outline: none;
  padding: 0.5em 1.5em;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.4em;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s;
  &:hover {
    opacity: 0.7;
  }
}
.btn-primary {
  @apply bg-blue-500 text-white border-none;
}
</style>

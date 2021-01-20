<template>
  <button
    class="btn"
    :class="klass"
    :disabled="disabled || loading"
    :type="htmlType"
    @click="emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps, useContext } from 'vue'
import type { PropType } from 'vue'
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'danger'>,
    default: 'default',
    validator(value: string) {
      return ['default', 'primary', 'success', 'danger'].includes(value)
    },
  },
  htmlType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
    validator(value: string) {
      return ['button', 'submit', 'reset'].includes(value)
    },
  },
})
const { emit } = useContext()
const klass = computed(() => ({
  [`btn-${props.type}`]: true,
  'btn-disabled': props.loading || props.disabled,
}))
</script>

<!-- @vue-ignore -->
<style>
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
  &:focus {
    outline: none;
  }
}
.btn-primary {
  @apply bg-blue-500 text-white border-none;
}
.btn-disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>

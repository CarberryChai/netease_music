<template>
  <h1 class="text-center">{{ message }}</h1>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'welcome',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const message = computed(() => `Hello, welcome, ${props.msg}`)
    return { message }
  },
})
</script>
<style scoped></style>

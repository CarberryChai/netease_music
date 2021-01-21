<template>
  <h1 class="text-center">
    {{ message }}
  </h1>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
})
const message = computed(() => `Hello, welcome, ${props.msg}`)
</script>
<style scoped></style>

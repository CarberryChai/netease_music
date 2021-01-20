<template>
  <h1>{{ count }}</h1>
  <Button @click="handler" type="primary">Click</Button>
</template>
<script lang="ts" setup>
import Button from './components/Button.vue'
import { ref } from 'vue'
const count = ref(0)
const handler = () => {
  window.toast(count.value + '')
  count.value++
}
</script>

<style>
body {
  @apply text-center;
}
</style>

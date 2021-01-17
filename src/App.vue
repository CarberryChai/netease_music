<template>
  <Welcome msg="Carberry" />
  <Button @click="handler" type="primary">Click</Button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Welcome from './components/Welcome.vue'
import Button from './components/Button.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const handler = () => {
      window.alert('Hello')
    }
    return { handler }
  },
  components: {
    Welcome,
    Button,
  },
})
</script>

<style>
body {
  @apply text-center;
}
</style>

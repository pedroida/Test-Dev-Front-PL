<template>
  <div class="d-flex justify-content-center h-100 w-100">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UnauthenticatedContainer'
})
</script>

<style scoped>

</style>

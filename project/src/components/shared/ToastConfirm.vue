<template>
  <button class="d-block">Confirmar ação?</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToastConfirm'
})
</script>

<style scoped>
.d-block {
  display: block;
  width: 100%;
}
</style>

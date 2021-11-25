<template>
  <button class="button" :class="[color, textColor, { 'btn-block': block }]">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonDefault',

  props: {
    block: {
      type: Boolean,
      required: false,
      default: () => false
    },

    label: {
      type: String,
      required: true
    },

    color: {
      type: String,
      required: false,
      default: () => 'bg-primary'
    },

    textColor: {
      type: String,
      required: false,
      default: () => 'text-white'
    }
  }
})
</script>

<style scoped>
.btn-block {
  display: block;
  width: 100%;
}
</style>

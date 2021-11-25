<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input
      v-model="content"
      type="text"
      maxlength="200"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, watch } from 'vue'

export default defineComponent({
  name: 'InputDefault',

  props: {
    modelValue: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      required: false,
      default: () => 'Digite seu email'
    },

    label: {
      type: String,
      required: true
    },
  },

  setup (props: any, context: any) {
    const content = toRef(props, 'modelValue')

    watch(content, () => {
      context.emit('update:modelValue', content)
    })

    return {
      content
    }
  }
})
</script>

<style scoped>
</style>

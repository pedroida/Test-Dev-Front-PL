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
import { defineComponent, ref, watch } from 'vue'

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
    const content = ref(props.modelValue)

    watch(content, () => {
      context.emit('update:modelValue', content)
    })

    watch(() => props.modelValue, (value) => content.value = value)

    return {
      content
    }
  }
})
</script>

<style scoped>
</style>

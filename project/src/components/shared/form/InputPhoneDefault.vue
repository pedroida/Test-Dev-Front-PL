<template>
  <div class="input-container">
    <label for="input-phone">{{ label }}</label>
    <input
      v-model="content"
      id="input-phone"
      name="input-phone"
      type="text"
      maxlength="200"
      :placeholder="placeholder"
      required
      v-maska="['(##) #####-####', '(##) ####-####']"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, watch } from 'vue'

export default defineComponent({
  name: 'InputPhoneDefault',

  props: {
    modelValue: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      required: false,
      default: () => 'Digite o celular'
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

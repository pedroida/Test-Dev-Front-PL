<template>
  <div class="input-container">
    <label for="email">Email</label>
    <input
      v-model="content"
      id="email"
      name="email"
      type="email"
      maxlength="200"
      :placeholder="placeholder"
      required
    >
    <div v-if="content && !isValid" class="pl-2 mt-2">
      <small class="text-error">email inválido</small>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef, watch } from 'vue'

export default defineComponent({
  name: 'InputEmailDefault',

  props: {
    modelValue: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      required: false,
      default: () => 'Digite seu email'
    }
  },

  setup (props: any, context: any) {
    const content = toRef(props, 'modelValue')

    const isValid = computed(() => {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      return regex.test(String(content.value))
    })

    watch(content, () => {
      context.emit('update:modelValue', content)
    })

    return {
      content,
      isValid
    }
  }
})
</script>

<style scoped>
</style>

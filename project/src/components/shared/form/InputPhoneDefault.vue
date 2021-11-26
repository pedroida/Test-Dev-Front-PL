<template>
  <div class="input-container">
    <label for="input-phone">{{ label }}</label>
    <input
      v-model="content"
      id="input-phone"
      name="input-phone"
      type="text"
      :placeholder="placeholder"
      required
      v-maska="['(##) #####-####', '(##) ####-####']"
    >
    <div class="pl-2 mt-2 error-block">
      <small v-if="content && !isValid" class="text-error">telefone inválido</small>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

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
    const content = ref(props.modelValue)

    const isValid = computed(() => [14, 15].includes(content.value.length))

    watch(() => props.modelValue, (value) => content.value = value)
    watch(content, () => context.emit('update:modelValue', content))
    watch(isValid, (value: boolean) => context.emit('isValid', value))

    return {
      content,
      isValid
    }
  }
})
</script>

<style scoped>
</style>

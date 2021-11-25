<template>
  <div class="input-container">
    <label for="password">Senha</label>
    <input
      v-model="content"
      ref="passwordInput"
      id="password"
      name="password"
      :type="inputType"
      maxlength="200"
      :placeholder="placeholder"
      required
    >
    <img @click="toggleShowPassword" :src="currentIcon" alt="toggle visibility icon" class="toggleIcon pointer">
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'InputPasswordDefault',

  props: {
    modelValue: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      required: false,
      default: () => 'Digite sua senha'
    }
  },

  setup (props: any, context: any) {
    const content = ref(props.modelValue)
    const showPassword = ref(false)
    const passwordInput = ref({ focus })

    const inputType: ComputedRef<string> = computed(() => showPassword.value ? 'text' : 'password')
    const currentIcon: ComputedRef<string> = computed(() => {
      return showPassword.value ? '/images/icons/closed-eye.svg' : '/images/icons/opened-eye.svg'
    })

    watch(content, () => {
      context.emit('update:modelValue', content)
    })

    const toggleShowPassword = () => {
      passwordInput.value.focus()
      showPassword.value = !showPassword.value
    }

    return {
      content,
      inputType,
      currentIcon,
      passwordInput,
      toggleShowPassword
    }
  }
})
</script>

<style scoped lang="scss">
.toggleIcon {
  width: 2em;
  position: relative;
  align-self: flex-end;
  right: 1em;
  bottom: 2.6em;
}
</style>

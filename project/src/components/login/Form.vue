<template>
  <div>
    <input-email-default v-model="loginPayload.email" />

    <input-password-default v-model="loginPayload.password" class="mt-4 mb-2" />

    <button-default block label="Fazer Login" class="mt-5" @click="submit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import InputEmailDefault from '@/components/shared/form/InputEmailDefault.vue'
import InputPasswordDefault from '@/components/shared/form/InputPasswordDefault.vue'
import ButtonDefault from '@/components/shared/form/ButtonDefault.vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default defineComponent({
  name: 'LoginForm',
  components: { ButtonDefault, InputPasswordDefault, InputEmailDefault },

  setup () {
    const toast = useToast()
    const store = useStore()
    const loginPayload = reactive({
      email: '',
      password: ''
    })

    const submit = () => {
      store.dispatch('authentication/requestLogin', loginPayload)
      .then(() => {
        toast.success('Bem-vindo!')
      }).catch((error: any) => {
        toast.error(error?.response?.data?.message || 'Houve um problema ao realizar o login')
      })
    }

    return {
      loginPayload,
      submit
    }
  }
})
</script>

<style scoped>

</style>

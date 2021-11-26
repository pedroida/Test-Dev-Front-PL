<template>
  <div class="text-center">
    <h2>Cadastre um novo contato</h2>

    <p>
      Preencha as informações para cadastrar um novo contato
    </p>

    <contact-form v-model="contact" class="mt-5" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ContactForm from '@/components/contacts/Form.vue'
import { Contact } from '@/entities/Contact'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default defineComponent({
  name: 'CreateContact',
  components: { ContactForm },
  setup () {
    const toast = useToast()
    const store = useStore()
    const router = useRouter()
    const contact: Ref<Contact> = computed({
      get: () => store.getters['contacts/contact'],

      set: (value: any) => {
        store.dispatch('contacts/setContact', value)
      }
    })

    onMounted(() => {
      const contactId = useRoute().params.id as unknown
      store.dispatch('contacts/getContact', contactId)
    })

    const submit = () => {
      store.dispatch('contacts/requestCreateContact', contact.value)
        .then(() => {
          toast.success('Contato criado com sucesso!')
          router.replace({ name: 'contacts' })
        })
    }

    return {
      submit,
      contact
    }
  }
})
</script>

<style scoped>
.w-80 {
  width: 80%;
}
</style>

<template>
  <div class="text-center">
    <h2>Cadastre um novo contato</h2>

    <p>
      Preencha as informações para cadastrar um novo contato
    </p>

    <contact-form :contact="contact" class="mt-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, Ref } from 'vue'
import { useRoute } from 'vue-router'
import ContactForm from '@/components/contacts/Form.vue'
import { Contact } from '@/entities/Contact'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'EditContact',
  components: { ContactForm },
  setup () {
    const store = useStore()
    const contact: Ref<Contact> = computed({
      get: () => store.getters['contacts/contact'],

      set: (value: any) => {
        console.log(value)
        store.dispatch('contacts/setContact', value)
      }
    })

    onMounted(() => {
      const contactId = useRoute().params.id as unknown
      store.dispatch('contacts/getContact', contactId)
    })

    return {
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

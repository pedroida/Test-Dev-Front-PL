<template>
  <div class="row">
    <div class="col-12">
      <input-default v-model="content.name" label="Nome Completo" />
    </div>

    <div class="col-12 col-md-6">
      <input-email-default v-model="content.email" />
    </div>
    <div class="col-12 col-md-6">
      <input-phone-default v-model="content.mobile" label="Celular" />
    </div>

    <div class="col-12 mt-5">
      <button-default :label="buttonLabel" block />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, toRef } from 'vue'
import { Contact } from '@/entities/Contact'
import InputDefault from '@/components/shared/form/InputDefault.vue'
import InputEmailDefault from '@/components/shared/form/InputEmailDefault.vue'
import InputPhoneDefault from '@/components/shared/form/InputPhoneDefault.vue'
import ButtonDefault from '@/components/shared/form/ButtonDefault.vue'

export default defineComponent({
  name: 'ContactForm',
  components: { ButtonDefault, InputPhoneDefault, InputEmailDefault, InputDefault },
  props: {
    contact: {
      type: Contact,
      required: true
    }
  },

  setup (props: any) {
    const content: Ref<Contact> = toRef(props, 'contact')

    return {
      content
    }
  },

  computed: {
    buttonLabel () {
      return this.contact.id ? 'Editar Contato' : 'Cadastrar Contato'
    }
  }
})
</script>

<style scoped>

</style>

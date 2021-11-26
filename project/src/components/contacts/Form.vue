<template>
  <div class="row">
    <div class="col-12">
      <input-default v-model="content.name" label="Nome Completo" />
    </div>

    <div class="col-12 col-md-6">
      <input-email-default v-model="content.email" @isValid="isValid" />
    </div>
    <div class="col-12 col-md-6">
      <input-phone-default v-model="content.mobile" label="Celular" @isValid="isValid" />
    </div>

    <div class="col-12 mt-5">
      <button-default :disabled="!validForm" :label="buttonLabel" block @click="submit" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { Contact } from '@/entities/Contact'
import InputDefault from '@/components/shared/form/InputDefault.vue'
import InputEmailDefault from '@/components/shared/form/InputEmailDefault.vue'
import InputPhoneDefault from '@/components/shared/form/InputPhoneDefault.vue'
import ButtonDefault from '@/components/shared/form/ButtonDefault.vue'

export default defineComponent({
  name: 'ContactForm',
  components: { ButtonDefault, InputPhoneDefault, InputEmailDefault, InputDefault },
  props: {
    modelValue: {
      type: Contact,
      required: true
    }
  },

  setup (props: any, context: any) {
    const content: Ref<Contact> = ref(props.modelValue)
    const validForm = ref(true)

    watch(() => props.modelValue, (value) => content.value = value)
    watch(content, () => context.emit('update:modelValue', content.value))

    const submit = () => context.emit('submit')
    const isValid = (valid: boolean) => validForm.value = valid

    return {
      validForm,
      isValid,
      content,
      submit
    }
  },

  computed: {
    buttonLabel () {
      return this.modelValue.id ? 'Editar Contato' : 'Cadastrar Contato'
    }
  }
})
</script>

<style scoped>

</style>

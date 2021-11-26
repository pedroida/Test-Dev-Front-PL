<template>
  <div class="row mx-0">
    <div class="col-12 col-md-6">
      <h2>Listagem de candidatos</h2>
    </div>
    <div class="col-12 col-md-6 align-self-center text-align-end">
      <button-default
        label="Adicionar novo contato"
        color="bg-primary-lighten-1"
        @click="createContact"
      />
    </div>
  </div>

  <contacts-list/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactsList from '@/components/contacts/ContactsList.vue'
import ButtonDefault from '@/components/shared/form/ButtonDefault.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ContactsIndex',

  components: { ContactsList, ButtonDefault },

  setup () {
    const router = useRouter()
    return {
      createContact: () => router.replace({ name: 'contacts-create' })
    }
  }
})
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .text-align-end {
    text-align: end;
  }
}
</style>

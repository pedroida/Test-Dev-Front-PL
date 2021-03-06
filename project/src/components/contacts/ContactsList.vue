<template>
  <div class="table-container">
    <data-table :headers="headers" :items="contacts" has-actions>
      <template #action="{ item }">
        <table-item-actions @edit="edit(item)" @delete="deleteItem(item)"/>
      </template>
    </data-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import DataTable, { IDataTableHeader } from '@/components/shared/table/DataTable.vue'
import TableItemActions from '@/components/shared/table/TableItemActions.vue'
import { Contact } from '@/entities/Contact'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import ToastConfirm from '@/components/shared/ToastConfirm.vue'

export default defineComponent({
  name: 'ContactsList',
  components: { TableItemActions, DataTable },
  setup () {
    const store = useStore()
    const router = useRouter()
    const contacts = computed(() => store.getters['contacts/contacts'])
    const headers = computed((): IDataTableHeader[] => [
      { title: '#', value: 'id' },
      { title: 'Nome', value: 'name' },
      { title: 'Celular', value: 'mobile' },
      { title: 'Email', value: 'email' }
    ])

    onMounted(() => {
      store.dispatch('contacts/getContacts')
    })

    const edit = (item: Contact) => {
      router.replace({ name: 'contacts-edit', params: { id: item.id } })
    }

    const deleteItem = (contact: Contact) => {
      const toast = useToast()

      toast({
        component: ToastConfirm,
        listeners: {
          click: () => {
            store.dispatch('contacts/requestDeleteContact', contact)
              .then(() => {
                toast.success('Contato removido com sucesso!')
                store.dispatch('contacts/getContacts')
              })
          }
        }
      })
    }

    return {
      deleteItem,
      edit,
      contacts,
      headers
    }
  }
})
</script>

<style scoped>

</style>

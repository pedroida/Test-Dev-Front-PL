import { ContactState } from '@/store/contacts/state'
import { Contact } from '@/entities/Contact'

export default {
  loading: (state: ContactState): boolean => state.loading,
  contacts: (state: ContactState): [] => state.contacts,
  contact: (state: ContactState): Contact => state.contact
}

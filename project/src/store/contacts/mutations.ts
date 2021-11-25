import { ContactState } from '@/store/contacts/state'
import { Contact } from '@/entities/Contact'

export default {
  SET_CONTACTS: (state: ContactState, contacts: []): void => {
    state.contacts = contacts
  },

  SET_CONTACT: (state: ContactState, contact: Contact): void => {
    state.contact = contact
  },

  TOGGLE_LOADING: (state: ContactState, loading: boolean): void => {
    state.loading = loading
  }
}

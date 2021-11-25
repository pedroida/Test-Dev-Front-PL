import { ActionTree } from 'vuex'
import { RootState } from '@/store'
import { contactService } from '@/services'
import { ContactState } from '@/store/contacts/state'
import { Contact } from '@/entities/Contact'
import { useToast } from 'vue-toastification'

const actions: ActionTree<ContactState, RootState> = {

  async startLoading ({ commit }) {
    await commit('TOGGLE_LOADING', true)
  },

  async stopLoading ({ commit }) {
    await commit('TOGGLE_LOADING', false)
  },

  async setContact ({ commit }, contact) {
    await commit('SET_CONTACT', contact)
  },

  async getContacts ({ dispatch, commit }) {
    dispatch('startLoading')
    await contactService.getContacts()
      .then((contacts: Contact[]) => {
        commit('SET_CONTACTS', contacts)
      })
      .catch((error) => {
        if (error?.response?.data?.hasOwnProperty('auth')) {
          dispatch('authentication/logout', '', { root: true })
          const toast = useToast()
          toast.error('Sua sessão expirou!')
        }
      })
      .finally(() => dispatch('stopLoading'))
  },

  async getContact ({ dispatch }, id: number) {
    dispatch('startLoading')
    await contactService.getContact(id)
      .then((contact: Contact) => {
        dispatch('setContact', contact)
      })
      .catch((error) => {
        if (error?.response?.data?.hasOwnProperty('auth')) {
          dispatch('authentication/logout', '', { root: true })
          const toast = useToast()
          toast.error('Sua sessão expirou!')
        }
      })
      .finally(() => dispatch('stopLoading'))
  }
}

export default actions

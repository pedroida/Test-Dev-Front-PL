import { Module } from 'vuex'
import { RootState } from '@/store'
import { ContactState } from '@/store/contacts/state'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


const ContactsModule: Module<ContactState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default ContactsModule

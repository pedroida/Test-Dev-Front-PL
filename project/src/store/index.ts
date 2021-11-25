import { createStore } from 'vuex'
import AuthenticationModule from '@/store/authentication'
import ContactsModule from '@/store/contacts'

const state = () => ({

})

const store = createStore({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication: AuthenticationModule,
    contacts: ContactsModule
  }
})

export type RootState = ReturnType<typeof state>

export default store

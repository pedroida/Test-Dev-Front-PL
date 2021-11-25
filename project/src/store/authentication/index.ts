import { Module } from 'vuex'
import { RootState } from '@/store'
import { AuthenticationState } from '@/store/authentication/state'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


const AuthenticationModule: Module<AuthenticationState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default AuthenticationModule

import { ActionTree } from 'vuex'
import { AuthenticationState } from '@/store/authentication/state'
import { RootState } from '@/store'
import LoginDTO from '@/entities/LoginDTO'
import { authenticationService } from '@/services'
import Cookies from 'js-cookie'

const expires = 1/48 //30 minutes

const actions: ActionTree<AuthenticationState, RootState> = {

  async startLoading ({ commit }) {
    await commit('TOGGLE_LOADING', true)
  },

  async stopLoading ({ commit }) {
    await commit('TOGGLE_LOADING', false)
  },

  async setAuthorization ({ commit }, authorization) {
    await commit('SET_AUTHORIZATION', authorization)
    Cookies.set('authorization', authorization, { expires })
  },

  async logout ({ commit }) {
    await commit('SET_AUTHORIZATION', '')
    Cookies.remove('authorization', { expires })
  },

  async requestLogin ({ dispatch }, payload: LoginDTO) {
    dispatch('startLoading')
    await authenticationService.requestLogin(payload)
      .then((authorization: string) => {
        dispatch('setAuthorization', authorization)
      }).finally(() => dispatch('stopLoading'))
  },

  async requestLogout ({ dispatch }) {
    await dispatch('logout')
  }
}

export default actions

import { AuthenticationState } from '@/store/authentication/state'

export default {
  SET_AUTHORIZATION: (state: AuthenticationState, authorization: string): void => {
    state.authorization = authorization
  },

  TOGGLE_LOADING: (state: AuthenticationState, loading: boolean): void => {
    state.loading = loading
  }
}

import { AuthenticationState } from '@/store/authentication/state'

export default {
  loading: (state: AuthenticationState): boolean => state.loading,
  authorization: (state: AuthenticationState): string => state.authorization
}

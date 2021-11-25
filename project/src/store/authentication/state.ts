import Cookies from 'js-cookie'

export interface AuthenticationState {
  authorization: string,
  loading: boolean
}

const state = (): AuthenticationState => ({
  authorization: Cookies.get('authorization') as string,
  loading: false
})

export default state

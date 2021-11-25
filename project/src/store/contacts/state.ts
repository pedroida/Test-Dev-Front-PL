import { Contact } from '@/entities/Contact'
import { ContactFactory } from '@/entities/factories/ContactFactory'

export interface ContactState {
  contacts: [],
  contact: Contact,
  loading: boolean
}

const state = (): ContactState => ({
  contacts: [],
  contact: ContactFactory(),
  loading: false
})

export default state

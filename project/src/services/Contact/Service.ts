import Shared from '@/services/Shared'
import contactsDM from '@/services/Contact/DM/ContactsDM'
import { Contact } from '@/entities/Contact'
import contactDM from '@/services/Contact/DM/ContactDM'

const routes = {

  get getClients () {
    return '/clientes'
  },

  getClient (id: number) {
    return `/clientes/${id}`
  }
}

class Service {
  async getContacts (): Promise<Contact[]> {
    const client = Shared.clientFactory()

    const { data } = await client.get(routes.getClients)

    return contactsDM.requestToEntity(data[0])
  }

  async getContact (id: number): Promise<Contact> {
    const client = Shared.clientFactory()

    const { data } = await client.get(routes.getClient(id))

    return contactDM.requestToEntity(data)
  }
}

const service = new Service()
export default service

import Shared from '@/services/Shared'
import contactsDM from '@/services/Contact/DM/ContactsDM'
import { Contact } from '@/entities/Contact'
import contactDM from '@/services/Contact/DM/ContactDM'

const routes = {

  get getClients () {
    return '/clientes'
  },

  get createClient () {
    return '/clientes'
  },

  getClient (id: number) {
    return `/clientes/${id}`
  },

  updateClient (id: number) {
    return `/clientes/${id}`
  },

  deleteClient (id: number) {
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

  async requestCreateContact (contact: Contact): Promise<Contact> {
    const client = Shared.clientFactory()
    const payload = contactDM.entityToRequest(contact)

    const { data } = await client.post(routes.createClient, payload)

    return contactDM.requestToEntity(data)
  }

  async requestUpdateContact (contact: Contact): Promise<Contact> {
    const client = Shared.clientFactory()
    const payload = contactDM.entityToRequest(contact)

    const { data } = await client.put(routes.updateClient(contact.id as number), payload)

    return contactDM.requestToEntity(data)
  }

  async requestDeleteContact (contact: Contact): Promise<void> {
    const client = Shared.clientFactory()
    await client.delete(routes.deleteClient(contact.id as number))
  }
}

const service = new Service()
export default service

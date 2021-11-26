import { RequestDataMapper, ResponseDataMapper } from '@/contracts/DataMapper'
import { Contact } from '@/entities/Contact'
import Shared from '@/services/Shared'

class ContactDM implements ResponseDataMapper, RequestDataMapper {
  entityToRequest (contact: Contact): any {
    return {
      name: contact.name.substring(0, 200),
      email: contact.email.substring(0, 200),
      mobile: contact.mobile.replaceAll(/\D/g, '').substring(0, 11)
    }
  }

  requestToEntity (data: any): Contact {
    return new Contact({
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      mobile: Shared.formatPhoneNumber(data.mobile)
    })
  }
}

const contactDM = new ContactDM()

export default contactDM

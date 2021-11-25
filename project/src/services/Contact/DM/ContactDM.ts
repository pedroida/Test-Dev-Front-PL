import { ResponseDataMapper } from '@/contracts/DataMapper'
import { Contact } from '@/entities/Contact'
import Shared from '@/services/Shared'

class ContactDM implements ResponseDataMapper {
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

import { RequestDataMapper, ResponseDataMapper } from '@/contracts/DataMapper'
import LoginDTO from '@/entities/LoginDTO'
import { Contact } from '@/entities/Contact'
import Shared from '@/services/Shared'

class ContactsDM implements RequestDataMapper, ResponseDataMapper {
  requestToEntity (data: any): Contact[] {
    return data.map((item: any):Contact => {
      return new Contact({
        id: item.id,
        name: item.name,
        email: item.email,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        mobile: Shared.formatPhoneNumber(item.mobile)
      })
    })
  }
  entityToRequest (data: LoginDTO): any {
    return {
      user: data.email,
      pwd: data.password
    }
  }

}

const contactsDM = new ContactsDM()

export default contactsDM

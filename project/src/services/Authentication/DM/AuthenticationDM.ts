import { RequestDataMapper, ResponseDataMapper } from '@/contracts/DataMapper'
import LoginDTO from '@/entities/LoginDTO'

class AuthenticationDM implements RequestDataMapper, ResponseDataMapper {
  requestToEntity (data: any): string {
    return data.token
  }
  entityToRequest (data: LoginDTO): any {
    return {
      user: data.email,
      pwd: data.password
    }
  }

}

const authenticationDM = new AuthenticationDM()

export default authenticationDM

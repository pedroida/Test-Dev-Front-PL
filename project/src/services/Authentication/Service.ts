import LoginDTO from '@/entities/LoginDTO'
import Shared from '@/services/Shared'
import authenticationDM from '@/services/Authentication/DM/AuthenticationDM'

const routes = {

  get login () {
    return '/login'
  }
}

class Service {
  async requestLogin (payload: LoginDTO): Promise<string> {
    const client = Shared.clientFactory()

    const body = authenticationDM.entityToRequest(payload)
    const { data } = await client.post(routes.login, body)

    return authenticationDM.requestToEntity(data)
  }
}

const service = new Service()
export default service

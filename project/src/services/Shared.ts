import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'

export default {
  clientFactory (): AxiosInstance {
    return axios.create({
      baseURL: process.env.baseURL || 'https://testfrontpl.herokuapp.com',
      headers: {
        contentType: 'application-json',
        'x-access-token': Cookies.get('authorization') || ''
      }
    })
  },

  formatPhoneNumber(phone: string): string {
    phone = phone.replace(/[^\d]/g, '')

    if (phone.length == 10) {
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
    }
    if (phone.length == 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }

    return phone
  }
}

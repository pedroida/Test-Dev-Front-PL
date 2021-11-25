export interface ILoginDTO {
  email: string
  password: string
}

export default class LoginDTO implements ILoginDTO {
  public email: string
  public password: string

  constructor (props: ILoginDTO) {
    this.email = props.email
    this.password = props.password
  }
}

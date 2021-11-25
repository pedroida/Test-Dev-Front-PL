export interface IContact {
  id?: number,
  name: string,
  email: string,
  mobile: string,
  createdAt: string,
  updatedAt: string
}

export class Contact implements IContact {
  public id?: number
  public name: string
  public email: string
  public mobile: string
  public createdAt: string
  public updatedAt: string

  constructor (props: IContact) {
    this.id = props.id
    this.name = props.name
    this.email = props.email
    this.mobile = props.mobile
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
  }
}

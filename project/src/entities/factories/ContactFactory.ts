import { Contact } from '@/entities/Contact'

export function ContactFactory (
  name = '',
  email = '',
  mobile = '',
  createdAt = '',
  updatedAt = '',
  id?: number
): Contact {
  return new Contact({
    id,
    name,
    email,
    mobile,
    createdAt,
    updatedAt
  })
}

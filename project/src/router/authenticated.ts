import { RouteRecordRaw } from 'vue-router'
import ContactsIndex from '../views/authenticated/contacts/Index.vue'
import ContactsCreate from '@/views/authenticated/contacts/Create.vue'
import ContactsEdit from '@/views/authenticated/contacts/Edit.vue'

const authenticated: Array<RouteRecordRaw> = [
  {
    path: '/contatos',
    name: 'contacts',
    component: ContactsIndex,
    children: [
      {
        path: 'novo',
        name: 'contacts-create',
        component: ContactsCreate
      } as RouteRecordRaw,
      {
        path: ':id/editar',
        name: 'contacts-edit',
        component: ContactsEdit
      } as RouteRecordRaw
    ],
  } as RouteRecordRaw
]

export default authenticated

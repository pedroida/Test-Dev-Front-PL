import { RouteRecordRaw } from 'vue-router'
import Login from '../views/unauthenticated/Login.vue'

const unauthenticated: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  } as RouteRecordRaw
]

export default unauthenticated

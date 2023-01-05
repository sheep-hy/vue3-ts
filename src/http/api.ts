import { LoginFormInt } from '@/types/login'
import $http from './index'

export const login = (data: LoginFormInt) => {
  return $http({
    url: '/login',
    method: 'post',
    data,
  })
}
export const getList = (data: any) => {
  return $http({
    url: '/getList',
    method: 'get',
    data
  })
}
export const getRoleList = () => {
  return $http({
    url: '/getRoleList',
    method: 'get',
  })
}
export const getUserList = () => {
  return $http({
    url: '/getUserList',
    method: 'get',
  })
}


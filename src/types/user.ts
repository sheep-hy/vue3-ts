export type ListInt = {
  userId: number
  id: number
  nikeName: string
  role: RoleInt[]
}
interface RoleInt {
  role: number
  rolename: string
}
export type selectInt = {
  nikeName: string
  role: number
}
interface RoleListInt {
  roleId: number
  roleName: string
  authority: number[]
}
export class Initdata {
  selectData: selectInt = {
    nikeName: '',
    role: 0,
  }
  list: ListInt[] = []
  dataList: ListInt[] = []
  roleList:RoleListInt[]=[]
}

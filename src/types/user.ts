// 表格
export type ListInt = {
  userId: number
  id: number
  nikeName: string
  role: RoleInt[]
}
// 弹框
export type activeInt = {
  userId: number
  id: number
  nikeName: string
  role: number[]
}
interface RoleInt {
  role: number
  rolename: string
}
// 
export type selectInt = {
  nikeName: string
  role: number
}
// 角色选择框
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
  roleList: RoleListInt[] = []
  active:activeInt={
    userId: 0,
    id: 0,
    nikeName: "",
    role: []
  }
  dialogFormVisible = false
}

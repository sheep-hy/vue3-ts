// 表格
export type ListInt = {
  roleName: string
  roleId: number
  authority: number[]
}
export type selectInt = {
  roleName: string
  roleId: number
}
//色选择框
// export interface RoleListInt {
//   roleId: number
//   roleName: string
//   authority: number[]
// }
export class Initdata {
  selectData: selectInt = {
    roleName: '',
    roleId: 0,
  }
  list: ListInt[] = []
  dataList: ListInt[] = []

  dialogFormVisible = false
}
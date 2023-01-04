export type ListInt = {
  userId: number
  id: number
  title: string
  body: string
}
export type selectInt = {
  title: string
  body: string
  page: number
  count: number
}
export class Initdata {
  selectData: selectInt = {
    title: '',
    body: '',
    page: 0,
    count: 0,
  }
  list: ListInt[] = []
  dataList: ListInt[] = []
}

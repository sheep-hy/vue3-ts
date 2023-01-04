import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

interface YXRequestConfig extends AxiosRequestConfig {
  // interceptors?: YXRequestInterceptors
  headers?: any
}
enum MSGS {
  '操作成功' = 200,
  '密码错误',
  '账号错误',
  '请求异常',
}
const $http = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api',
  timeout: 10000,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
})
$http.interceptors.request.use(
  (config: YXRequestConfig) => {
    config.headers = config.headers || {}
    const token = localStorage.getItem('token')
    if (token) {
      // config.headers.Authorization = 'Bearer ' + token
      config.headers.token = localStorage.getItem('token') || ''
      // config.headers.Authorization = `Bearer ${token}`
    }
    return config
    // config.headers.token = localStorage.getItem('token') || ''
  },
  (err) => Promise.reject(err)
)
$http.interceptors.response.use(
  (res) => {
    const code: number = res.data.code

    if (code != 200) {
      ElMessage.error(MSGS[code])
      // MSGS[code]
      return Promise.reject(res.data)
    }
    // console.log(res.data, 'response')
    return res.data
  },
  (err) => Promise.reject(err)
)
export default $http

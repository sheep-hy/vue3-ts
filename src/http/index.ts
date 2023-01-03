import axios, { AxiosRequestConfig } from 'axios'

const $http = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
})
$http.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  const token = localStorage.getItem('token')
  if (token) {
    // config.headers!.Authorization = 'Bearer ' + token
    // config.headers.token = localStorage.getItem('token') || ''
  }
  return config
  // config.headers.token = localStorage.getItem('token') || ''
})

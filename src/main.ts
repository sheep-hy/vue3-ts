import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from 'vue-router'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location:any) {
//   return originalPush.call(this, location).catch((err:any) => err)
// }
// 注：官方vue-router@3.0及以上新版本路由默认回调返回的都是promise，原先就版本的路由回调将废弃！！！！

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

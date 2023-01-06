import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getRouter } from '../http/api'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'order',
    component: HomeView,
    children: [
      // {
      //   name: 'order',
      //   path: 'order',
      //   meta: { isShow: true, title: '订单列表' },
      //   component: () => import('../views/OrderView.vue'),
      // },
      // {
      //   name: 'userList',
      //   path: 'userList',
      //   meta: { isShow: true, title: '用户列表' },
      //   component: () => import('../views/UserView.vue'),
      // },
      // {
      //   name: 'roleList',
      //   path: 'roleList',
      //   meta: { isShow: true, title: '角色列表' },
      //   component: () => import('../views/RoleView.vue'),
      // },
      // {
      //   name: 'authority',
      //   path: 'authority',
      //   meta: { isShow: false, title: '权限列表' },
      //   component: () => import('../views/AuthorityView.vue'),
      // },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async (to, from) => {
  const token = localStorage.getItem('token')
  if (!token && to.path !== '/login') {
    // router.push('/login')
    return '/login'
  } else if (token && to.name !== 'login') {
    // 获取动态路由
    // next({ name: 'home' })
    if (router.getRoutes().length === 3) {
      let routerData: any = await getRouter()
      routerData = routerData.data
      console.log(routerData, '路由')
      routerData.forEach((v: any) => {
        const routerObj: RouteRecordRaw = {
          path: v.name,
          name: v.name,
          meta: v.meta,
          component: () =>
            import(
              /* webpackChunkName: "about" */ '../views/' + v.path + '.vue'
            ),
        }
        router.addRoute('home', routerObj)
      })
      router.replace(to.path)
    }
  } else if (token && to.name === 'login') {
    // router.push('/login')
    return '/'
  }
})

export default router

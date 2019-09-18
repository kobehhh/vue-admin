const Login = resolve => require(['@/views/Login/login.vue'],resolve)

export const RouterMap = [
  {
    path:'/',
    component:Login,
  },
  {
    path:'/login',
    component:Login,
    name:'login'
  }
]
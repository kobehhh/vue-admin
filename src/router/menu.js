const Login = resolve => require(['@/views/Login/login.vue'],resolve)
const Main = resolve => require(['@/views/Main/main.vue'],resolve)


export const RouterMap = [
  {
    path:'/',
    component:Login,
  },
  {
    path:'/login',
    component:Login,
    name:'login'
  },
  {
    path:'/main',
    component:Main,
    name:'main'
  }
]
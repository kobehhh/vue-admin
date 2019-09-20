const Login = resolve => require(['@/views/Login/login.vue'],resolve)
const Main = resolve => require(['@/views/Main/main.vue'],resolve)
const Home = resolve => require(['@/views/Home/home.vue'],resolve)

const userManage = resolve => require(['@/views/system/user_manage/user_manage'],resolve)


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
    name:'main',
    label:'首页',
    children:[
      {
      path:'',
      component:Home
      }
    ]
  },
  {
    path: '/sys',
    component: Main,
    label: '系统设置',
    redirect: '/sys/user_manage',
    children:[
      {
        path:'user_manage',
        component:userManage,
        label:'用户管理',
        ame:'user_manage',
      }
    ]
  }
]
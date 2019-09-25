const Login = resolve => require(['@/views/Login/login.vue'],resolve)
const Main = resolve => require(['@/views/Main/main.vue'],resolve)
const Home = resolve => require(['@/views/Home/home.vue'],resolve)

const userManage = resolve => require(['@/views/system/user_manage/user_manage'],resolve)
const mixChart = resolve => require(['@/views/system/mix-chart/mix-chart'],resolve)
const Cavans = resolve => require(['@/views/system/cavans/cavans'],resolve)

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
        name:'user_manage',
      },
      {
        path:'rule_manage',
        component:mixChart,
        label:'echart',
        name:'user_manage',
      },
      {
        path:'company_manage',
        component:Cavans,
        label:'cavans',
        name:'company_manage',
      }
    ]
  }
]
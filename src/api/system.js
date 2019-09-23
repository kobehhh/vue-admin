import axios from '@/utils/http.js'
import  qs from 'qs'

export const login = params => {
  return axios.post('/system/user/login',qs.stringify(params)).then(res => {
    return res.data
  })
}

//获取菜单
export const getMenu = params => {
  return axios.get(`/system/menu/?${qs.stringify(params)}`).then(res => {
    return res.data
  })
}

//分页查询用户列表
export const getUser = (params) => {
  return axios.get(`/system/user?${qs.stringify(params)}`).then((res) => {
    return res.data
  })
}
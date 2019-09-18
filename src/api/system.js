import axios from '@/utils/http.js'
import  qs from 'qs'


export const login = params => {
  return axios.get('/user/login').then(res => {
    return res.data
  })
}
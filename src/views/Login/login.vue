<template>
  <div class="content">
    <div class="login">
        <div class="login-container">
          <Form ref="formInline" :model="formInline" class="login-form">
            <div class="login-title">
              <h1>login form</h1>
            </div>
            <FormItem prop="user" class="login-item" > 
                <Input type="text" v-model="formInline.user" placeholder="Username"  class="login-input">
                    <Icon type="ios-person-outline" size="14" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password" class="login-item">
                <Input :type="pwdType"  v-model="formInline.password" placeholder="Password" class="login-input"> 
                    <Icon type="ios-lock-outline" slot="prepend" @click="showPwd"></Icon>
                </Input>
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="pwdType === 'password' ? 'eyes_close' : 'eyes'" />
                </span>
            </FormItem>
            <FormItem class="login-item">
                <Button class="login-btn" type="primary" @click="submitLogin">Signin</Button>
            </FormItem>
          </Form>
        </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/system.js'
import Cookies from 'js-cookie'
import axios from '@/utils/http.js'
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      pwdType:'password'
    }
  },
  methods:{
      _login() {
        let params = {
          loginname:1000,
          pwd:123
        }
        login(params).then(res => {
          if(res.code == 0) {
            this.loginSuccess(res.data)
          }
        })
      },
      submitLogin() {
        this._login()
      },
      loginSuccess(data) {
        const that = this
        let expires = Math.ceil(data.tokenVal.expires / 3600)
        Cookies.set('user_token',data.tokenVal.token,{ expires:expires })
        Cookies.set('user_id',data.id,{ expires:expires })
        Cookies.set('user_name',data.userName,{ expires:expires })
        Cookies.set('user_loginName',data.loginName,{ expires:expires })
        Cookies.set('user_companyId',data.companyId,{ expires:expires })

        axios.defaults.headers.common['token'] = Cookies.get('user_token')

        this.$Message.success('登录成功')
        // this.$store.commit('setUserInfo',{
        //   'user_token':data.tokenVal.token,
        //   'user_id':data.id,
        //   'user_name':data.userName,
        //   'user_loginName':data.loginName,
        //   'user_companyId':data.companyId
        //   })
        setTimeout(function() {
          that.$router.push({path:'/main'})
        },200)
      },
      showPwd() {
        if(this.pwdType == 'password') {
          this.pwdType = 'text'
        }else {
          this.pwdType = 'password'
        }
      }
  },
  mounted(){
  }
}
</script>
<style lang="less">
@bgc:#2d3a4b;
@dark_gray:#889aa4;
.content{
  overflow:hidden;
  // width: 100%;
  // height: 100%;
  top:0;
  right: 0;
  bottom :0;
  left: 0;
  position: absolute;
  background-color: @bgc;
  .ivu-form-item-content {
    // background: rgba(0, 0, 0, 0.1)!important;
    border-radius: 5px;
    color: #454545;
  }
  & .login{
    margin: 0 auto;
    padding: 160px 35px 0px 35px;
    width: 520px;
    position: relative;
    // height: 400px;
    .login-title{
      color: #fff;
      font-size: 26px;
      margin-bottom: 40px;
    }
    & .ivu-input {
      width: 100%;
      height: 47px;
      // background: transparent;
    }
    .show-pwd {
      position: absolute;
      font-size: 20px;
      right: 10px;
      top: 10px;
      cursor: pointer;
      color: @dark_gray;
      z-index: 100;
      // background-color: #eee;
    }
    .login-btn{
      width: 100%;
      height: 47px;
      border-radius: 5px;
    }
  }
}
@media only screen and (max-width: 870px) {
    .login-btn {
      display: none;
    }
  }
</style>
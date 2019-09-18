<template>
  <div class="content">
    <div class="login">
        <div class="login-container">
          <Form ref="formInline" :model="formInline">
            <div class="login-title">
              <h1>login form</h1>
    <svg-icon icon-class="peoples" />

            </div>
            <FormItem prop="user" class="login-input"> 
                <Input type="text" prefix="ios-contact" v-model="formInline.user" placeholder="Username" class="login-input">
                    <!-- <Icon type="ios-person-outline" size="14" slot="prepend"></Icon> -->
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input :type="pwdType" prefix="ios-lock-outline" v-model="formInline.password" placeholder="Password" class="login-input"> 
                    <!-- <Icon type="ios-lock-outline" slot="prepend" @click="showPwd"></Icon> -->
                </Input>
                    <span  ><Icon type="ios-lock-outline" slot="prepend"></Icon></span>
            </FormItem>
            <FormItem>
                <Button class="login-btn" type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>123
    <svg-icon icon-class="peoples" />

          </Form>
        </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/system.js'
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
        login(this.loginform).then(res => {
          console.log(res)
        })
      },
      handleSubmit() {
        console.log(1)
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
    this._login()
  }
}
</script>
<style lang="less" scoped>
@bgc:#2d3a4b;
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
  & .login{
    margin: 0 auto;
    padding: 160px 35px 0px 35px;
    width: 520px;
    // height: 400px;
    .login-title{
      color: #fff;
      font-size: 26px;
      margin-bottom: 40px;
    }
    .ivu-input {
      width: 100%;
      height: 47px;
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
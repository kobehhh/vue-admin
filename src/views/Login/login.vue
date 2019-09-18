<template>
  <div class="content">
    <div class="login">
      <div class="login-bg"></div>
        <div class="login-container">
          <Form ref="formInline" :model="formInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
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
      }
  },
  mounted(){
    this._login()
  }
}
</script>
<style lang="less" scoped>
.content{
  overflow:hidden;
  width: 100%;
  height: 969px;
  .login{
    width: 400px;
    height: 400px;
  }
}
</style>
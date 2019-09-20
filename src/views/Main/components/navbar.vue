<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" :is-active="isActive" @click.native="toggleClick"></Hamburger>
    <Breadcrumb class="Breadcrumb-container"></Breadcrumb>
    <div class="right-menu">
      <search class="right-menu-item"></search>
      <screenfull class="right-menu-item"></screenfull>
      <Dropdown class="avatar-container">
        <img  src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar">
        <DropdownMenu slot="list">
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Dashboard</DropdownItem>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <DropdownItem disabled>Github</DropdownItem>
          </a>
          <a target="_blank" href="https://github.com/kobehhh/vue-admin">
            <DropdownItem disabled>MYGithub</DropdownItem>
          </a>
          <DropdownItem>Docs</DropdownItem>
          <DropdownItem divided>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import Search from '@/components/HeaderSearch'
import Screenfull from '@/components/Screenfull'
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  components: {
    Hamburger,
    Breadcrumb,
    Search,
    Screenfull
    },
  data() {
    return {}
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  },
  computed: {
    ...mapGetters({'isActive':'sidebar'})
  }
}
</script>
<style lang="less" scoped>
.navbar {
  height: 50px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background-color: #fff;
  text-align: left;
  .hamburger-container {
    line-height: 46px;
    padding: 0 15px;
    margin-right: 15px;
    height: 100%;
    // float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
  }
  .Breadcrumb-container {
    line-height: 46px;
    // float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    // display: flex;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
    }

    .avatar-container {
      margin-right: 30px;
      padding: 0 8px;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
}
</style>
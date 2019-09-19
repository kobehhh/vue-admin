<template>
  <div class="navbar">
    <Hamburger class="hamburger-container"></Hamburger>
    <Breadcrumb class="Breadcrumb-container"></Breadcrumb>
    <div class="right-menu">
      <search class="right-menu-item"></search>
      <screenfull class="right-menu-item"></screenfull>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import Search from '@/components/HeaderSearch'
import Screenfull from '@/components/Screenfull'
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
  }
}
</script>
<style lang="less" scoped>
.navbar {
  height: 50px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background-color: #fff;
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
  }
  .Breadcrumb-container {
    float: left;
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
  }
}
</style>
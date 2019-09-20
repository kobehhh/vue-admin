<template>
  <div class="sidebar">
    <Menu
              theme="dark"
              class="side-menu"
              width="auto"
              @on-select="jumpTo"
            >
              <!-- 一级菜单 -->
              <Submenu :key="d.id" :name="d.uri" :data-id="d.uri" v-for="(d,index) in menus">
                <template slot="title">
                  <Icon size="18" />
                  {{ d.name }}
                </template>
                <!-- 二级菜单 -->
                <Submenu
                  :key="li.id"
                  :name="li.uri"
                  :data-id="li.uri"
                  v-if="li.children && li.children.length > 0"
                  v-for="li in d.children"
                >
                  <template slot="title">{{ li.name }}</template>
                  <!-- 三级菜单 -->
                  <MenuItem
                    :key="item.id"
                    :name="item.uri"
                    :data-id="item.uri"
                    v-for="item in li.children"
                  >{{ item.name }}</MenuItem>
                </Submenu>
                <!-- 超级管理员二级菜单 -->
                <MenuItem
                  :key="li.id"
                  :name="li.uri"
                  :data-id="li.uri"
                  v-if="!li.children"
                  v-for="li in d.children"
                >{{ li.name }}</MenuItem>
              </Submenu>
            </Menu>
  </div>
</template>

<script> 
import { getMenu } from '@/api/system.js'
import { deleteFunc } from '@/utils/index.js'
export default {
  name: 'sidebar',
  components: {},
  data() {
    return {
      menus:[],
    }
  },
  methods:{
    _getMenu() {
      let params = {
        systemFlag: "sys_config",
        loginName: 1000,
        companyId: "ALL"
      };
      getMenu(params).then(res => {
        if(res.code == 0) {
          let menus = [],
            tem = res.data[0].children;
          for (let i = 0, len = tem.length; i < len; i++) {
            menus.push(tem[i]);
          }
          this.menus = deleteFunc(menus);
        }
      })
    },
    jumpTo(url) {
      this.$store.commit('app/setCurrentPath',url)
      this.$router.push({path:url})
    },
  },
  mounted() {
    this._getMenu()
  }
}
</script>
<style lang="less" scoped>
</style>
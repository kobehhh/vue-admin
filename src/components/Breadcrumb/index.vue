<template>
  <div class="breadcrumb">
    <Breadcrumb>
              <BreadcrumbItem to="/main">
                <Icon type="ios-home-outline" /> 首页
              </BreadcrumbItem>
              <BreadcrumbItem
                :to="b.path"
                :key="b.label"
                v-for="b in breadcrumbList">
                {{ b.label }}
              </BreadcrumbItem>
            </Breadcrumb>
  </div>
</template>

<script>
import { RouterMap } from '@/router/menu.js'
import { mapGetters } from 'vuex'
export default {
  name: 'breadcrumb',
  components: {},
  data() {
    return {
      menuMap: RouterMap,
      // currentPath:''
    }
  },
  computed: {
    ...mapGetters(['currentPath']),
    breadcrumbList () {
      const path = this.currentPath
      const pathArr = path.split('/').filter(e => e != '')
      const self = this

      if (!path) {
        return []
      }

      // 确定一级节点
      const arr = this.menuMap.filter(e => {
        if (path.indexOf(e.path) === 0) {
          return true
        }
        return false
      })

      let r = 0
      let currentNodeList = arr
      let breadcrumb = []

      // 遍历树节点，获取面包屑
      while (currentNodeList.length > 0) {
        r++

        let nextNodeList = []
        for (let i = 0, len = currentNodeList.length; i < len; i++) {
          let e = currentNodeList[i]
          let currentPathArr = e.path.split('/')

          // 父节点path相同就不遍历兄弟节点了，因为子节点有可能相同
          if (pathArr[r - 1] === currentPathArr[currentPathArr.length - 1]) {
            breadcrumb.push(e)

            // 改变指向
            if (e.children && e.children.length != 0) {
              nextNodeList = nextNodeList.concat(e.children)
            }

          }

        }

        currentNodeList = nextNodeList
      }

      return breadcrumb
    },
  }
}
</script>
<style lang="less" scoped>
.breadcrumb {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}
</style>
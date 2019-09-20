<template>
  <div class="mian">
    <Layout>
        <Sider 
          ref="siderbar"
          collapsible
          :collapsed-width="78"
          hide-trigger 
          class="sider" 
          v-model.trim="isCollapsed">
          <Sidebar v-show="!isCollapsed"></Sidebar>
        </Sider>
        <Layout>
            <Header v-if="true">
              <Navbar :class="{'fixed-header':fixedHeader}" @toggleClick="collapsedSider"></Navbar>
              <tags-view></tags-view>
            </Header>
            <Content>
              <app-main></app-main>
            </Content>
        </Layout>
    </Layout>
  </div>
</template>

<script>
import Sidebar  from './components/sidebar'
import AppMain  from './components/app-main'
import Navbar  from './components/navbar'
import TagsView  from './components/tags-view'
import { mapState } from 'vuex'

export default {
  name: 'mainContent',
  components: { Sidebar,AppMain,Navbar,TagsView },
  data() {
    return {
      isCollapsed:false
    }
  },
  computed: {
    ...mapState({
      fixedHeader: state => state.user.fixedHeader
    })
  },
  methods: {
    collapsedSider() {
      this.$refs.siderbar.toggleCollapse()
      this.$store.commit('app/setSidebar',this.isCollapsed)
    }
  }
}
</script>
<style lang="less">
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 200px);
  }
</style>
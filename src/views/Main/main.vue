<template>
  <div class="mian">
    <Layout>
        <Sider hide-trigger class="sider">
          <Sidebar></Sidebar>
        </Sider>
        <Layout>
            <Header v-if="true">
              <Aavbar :class="{'fixed-header':fixedHeader}"></Aavbar>
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
import Aavbar  from './components/navbar'
import TagsView  from './components/tags-view'
import { mapState } from 'vuex'

export default {
  name: 'mainContent',
  components: { Sidebar,AppMain,Aavbar,TagsView },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      fixedHeader: state => state.user.fixedHeader
    })
  },
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
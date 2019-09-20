<template>
  <div class="home-container">
    <github-corner class="github-corner"></github-corner>
    <panel-group></panel-group>
  </div>
</template>

<script>
import GithubCorner from './components/github-corner'
import PanelGroup from './components/panel-group'

export default {
  name: 'home',
  components: {
    GithubCorner,
    PanelGroup
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.home-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .github-corner{
    position: absolute;
    top: 0;
    right: 0;
    
  }
}
</style>
<template>
  <div class="screenfull">
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="isFullScreen" />
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  data() {
    return {
      isFullscreen: false,
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    isFullScreen() {
      this.isFullscreen = !this.isFullscreen
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if(screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.screenfull {
  font-size: 18px;
}
</style>
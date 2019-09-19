<template>
  <div :class="{'show':show}" class="search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="isShow" />
    <!-- <Select
      ref="headerSearchSelect"
      filterable
      remote
      v-model="search"
      default-first-option
      :remote-method="remoteMethod1"
      class="header-search-select">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select> -->
  </div>
</template>

<script>
export default {
  name: 'search',
  components: {},
  data() {
    return {
      search:[],
      show:false,
      cityList:[]
    }
  },
  methods:{
    isShow() {
      this.show = !this.show;
      if (this.show) {
        // this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
      }
    },
    remoteMethod1() {
      console.log(1)
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  .search-icon{
    vertical-align: middle;
    font-size: 18px;
  }
  .header-search-select {
    font-size: 18px;
    width: 0;
    transition: width 0.2s;
    border-radius: 0;
    .ivu-select-input {
      border:0;
    }
  }
  & .show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
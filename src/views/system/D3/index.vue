<template>
  <div> 
    <Tabs type="card">
        <TabPane label="标签一"><SvgChart /></TabPane>
        <TabPane label="标签二"><SimpleBar :data="dataList" /></TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
    
  </div>
</template>

<script>
import SimpleBar from './simpleBar'
import SvgChart from './svgchart'

export default {
  data() {
    return {
      dataList:[30, 86, 168, 281, 303, 365]
    }
  },
  mounted() {
  },
  components:{SimpleBar,SvgChart},
  methods:{}
}
</script>

<style>

</style>
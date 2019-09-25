<template>
  <div class="echart-container">
    <Chart height="100%" width="100%"></Chart>
  </div>
</template>

<script>
import Chart from '@/components/echart/MixChart.vue'
export default {
  components:{
    Chart
  }
}
</script>

<style>
.echart-container {
  width: 100%;
  height: calc(100vh - 124px);
}
</style>
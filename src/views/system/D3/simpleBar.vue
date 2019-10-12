<template>
  <div>
    <svg class="chart" />
  </div>
</template>

<script>
import * as d3 from 'd3'
// import {d3} from 'd3'
export default {
  data() {
    return {
      svg:null
    }
  },
  props:{
    data:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted() {
    // this.initChart()
  },
  methods:{
    initChart() {

      //  // 取class为container的dom，插入宽高分别为880px和850px的svg
      // this.svg = d3.selectAll(".chart").append('svg').attr("width",880).attr("height", 850)
      // // 设置y轴和x轴的范围
      // let yScale = d3.scaleLinear().domain([0,3000]).range([0,750])
      // let xScale = d3.scaleLinear().range([0,680]).domain([0,5])
      // //设置x和y轴的刻度方向及刻度数
      // let yaxis = d3.axisLeft().scale(yScale)
      // let xaxis = d3.axisBottom().scale(xScale)
      // // 设置x和y轴的刻度的样式，并画上去（和最后两行注释掉的等价）
      // let gAxis = this.svg.append("g").attr("font-size","20").attr("transform", "translate(80,40)").call(yaxis)
      // let xAxis = this.svg.append("g").attr("font-size","20").attr("transform", "translate(80,790)").call(xaxis)
      
      var width = 420,
      barHeight = 20;

      var x = d3.scaleLinear()
        .domain([0, d3.max(this.data)])
        .range([0, width-20]);

      var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * this.data.length);

      var bar = chart.selectAll("g")
        .data(this.data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

      bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

      bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .attr("dx", ".35em")
        .text(function(d) { return d; });
        } 
      }
}
</script>

<style>
/* .chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
} */
.chart rect {
  fill: steelblue;
}

/* .chart text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: middle;
} */
</style>
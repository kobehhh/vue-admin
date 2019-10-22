<template>
  <div class="con"> 
    <svg id="bar-graph"></svg>
    <div id="mes">
      <span>信息:</span>
      <br>
      <div>name:{{rightData.name}}</div>
      <div>sale:{{rightData.sale}}</div>
      {{rightData}}
      </div>
      {{dataList}}
  </div>
</template>

<script>
export default {
data() {
  return {
    dataList:[{name:'l',sale:50},{name:'w',sale:32},{name:'l',sale:28},{name:'w',sale:12},{name:'l',sale:18},{name:'w',sale:12},{name:'w',sale:12}],
    date:['周一','周二','周三','周四','周五','周六','周日'],
    yNum:10,
    xNum:0,
    dataMax:0,
    positionData:[],
    rightData:{
      name:'',
      sale:'',
    },
    mousewheelY:0,
    barWidth:null,
    graphHeight:0,
    graphWidth:0
  }
},
watch:{

},
mounted() {
  this.fdrawBar(this.dataList)
},
methods:{
  fdrawBar(dataList) {
     var barGraph = document.querySelector("#bar-graph")
     var graphWidth = 900
     var graphHeight = 600
     this.graphHeight = graphHeight
     this.graphWidth = graphWidth
     const graphPadding = 50
     //轴的宽高
     const axisWidth = graphWidth -  graphPadding
     const axisHeigt = graphHeight - graphPadding
     //柱的间隔
     const barGap = 50
     //单个数据柱子的宽
     this.barWidth = ((axisWidth - graphPadding - barGap * (dataList.length ))) / dataList.length
     let barWidth = this.barWidth

     //每根柱子的颜色
     const barColor = ["#27a1ea", "#9cdc82", "#ff9f69", "#d660a8", "#6370de", "#32d3eb", "#d4ec59", "#feb64d", "#b55cbd"]
     //轴的颜色
     const axisColor = "#000"
     //最大值
     //柱状图数据sale
     var newData = []

     //设置html的svg的宽度和高度
     barGraph.setAttribute("width", graphWidth)
     barGraph.setAttribute("height", graphHeight)
     //找到最大值
    //  for (let i = 0; i < data.length; i++) {
    //      if (typeof data[0] != "number") {
    //          let temp = Math.max(...data[i].sale);//es6扩展运算符 将数组转为序列。
    //          if (temp > dataMax) {
    //              dataMax = temp;
    //          }
    //          newData.push(data[i].sale);
    //      } else {
    //          dataMax = Math.max(...data);
    //          newData.push(data[i]);
    //      }
    //  }
    //计算最大值
    this.findMax()
     //数据和像素的折算
    var rate = this.dataMax / (axisHeigt - graphPadding)
     //绘制坐标轴
    let barHtml = []
     //先纵轴再横轴注意SVG画线模板间隔
    barHtml.push("<line x1=" + graphPadding + " y1="+graphPadding + " x2=" + graphPadding + " y2=" + axisHeigt + " stroke=" + axisColor + " stroke-width='1'/>")
    barHtml.push("<line x1=" + graphPadding + " y1=" + axisHeigt + " x2=" + axisWidth + " y2=" + axisHeigt + " stroke=" + axisColor + " stroke-width='1'/>")
    
    //刻度
    //计算每个刻度的高度
    var yHeight =Math.floor( axisHeigt / (this.yNum + 1) )
    //计算每一个刻度的值
    var num = Math.floor( this.dataMax / this.yNum )
    //x轴刻度的数量
    this.xNum = this.dataList.length
    //  barHtml.push("<line x1=" + graphPadding + " y1=" + (graphHeight-graphPadding - i*yHeight) + " x2=" + (graphPadding-5) + " y2=" + (graphHeight-graphPadding - i*yHeight) + " stroke=" + axisColor + " stroke-width='1'/>")
  
     for(let i = this.yNum;i > 0;i--) {
    //  barHtml.push("<line x1=" + graphPadding + " y1=" + (graphPadding + i*yHeight) + " x2=" + (graphPadding-5) + " y2=" + (graphPadding + i*yHeight) + " stroke=" + axisColor + " stroke-width='1'/>")
      //y刻度 刻度值
      barHtml.push("<line x1=" + graphPadding + " y1=" + (graphHeight-graphPadding - i*yHeight) + " x2=" + (graphPadding-5) + " y2=" + (graphHeight-graphPadding - i*yHeight) + " stroke=" + axisColor + " stroke-width='1'/>")
      barHtml.push("<text x='10' y="+ (graphHeight-graphPadding - i*yHeight + 5) + " fill='red'>"+i*num+"</text>")
     }
     //x刻度 刻度值
     for(let i = 0,len = this.dataList.length;i <  len;i++) {
      barHtml.push("<line x1=" + (graphPadding+barGap+barWidth/2+i*( barGap+ barWidth)) + " y1="+axisHeigt+" x2=" + (graphPadding+barGap+barWidth/2+i*( barGap+ barWidth)) + " y2="+(axisHeigt+5)+" stroke=" + axisColor + " stroke-width='1'/>")
      let num = this.dataList[i].sale
      let h = num/rate
      let y = axisHeigt - h - 1
      let x = (graphPadding+barGap+i*( barGap+ barWidth))
      let posData = this.dataList[i]
      posData.top = y
      posData.left = x
      posData.buttom = y + h
      posData.right = x + barWidth
      this.positionData.push(posData)
      barHtml.push("<rect width=" + barWidth + " height=" + h + " x=" + x + " y=" + y + " fill=" + this.randomColor() + " />")
     }
    //绘制柱状图(需要X,Y,宽度,高度)(高度=数值/rate)
    // for(let i = 0,len = this.data.length;i < len;i++){
    //   let num = this.data[i].sale
    //   let h = num/rate
    //   let y = axisHeigt - h
    //   let x = 
    //   console.log(h)
    //   console.log(x)
    //   // barHtml.push("<rect width=" + barWidth + " height=" + h + " x=" + x + " y=" + (axisHeigt - num / rate) + " fill=" + barColor[i] + " />")

    // }


    //  for (let i = 0; i < newData.length; i++) {
    //      for (let j = 0; j < newData[i].length; j++) {
    //          let num = parseInt(newData[i][j])
    //          let barBlock = data.length * barWidth

    //          let x = graphPadding + (j + 1) * barGap + i * barWidth + j * barBlock
    //          barHtml.push("<rect width=" + barWidth + " height=" + (num / rate) + " x=" + x + " y=" + (axisHeigt - num / rate) + " fill=" + this.rc() + " />")
    //      }
    //  }
     barGraph.innerHTML = barHtml.join("")//join("")拼成字符串无间隔 join()默认为逗号,
     //设置hover效果
     let that = this
      barGraph.addEventListener("mousemove",function(e) {
        let div=document.getElementById("mes")
        div.style.display = 'block'
        that.findPosition(e)
      })
      barGraph.addEventListener("mousewheel",function(e) {
        that.mousewheelY = e.wheelDelta/120 + that.mousewheelY
        if(e.wheelDelta > 0) {
          console.log("放大")
        }else {
          console.log("缩小")
          that.$set(that.dataList,0,{name: 'zhangsan',sale: 15})
          that.$forceUpdate()
          // this.$set(that.data, this.currentRow, this.popupData)
          // that.$set(that.data, 1, {name:'wlf',sale:100})
          // that.data.push({name:'hhh',sale:44})
        }
      })
      // barGraph.addEventListener("mouseout",function(e) {
      //   let div=document.getElementById("mes")
      //   div.style.display = 'none'
      // })  

 },
 //找到最大值
  findMax() {
    let temp = 0
    for(let i = 0,len =this.dataList.length;i < len;i++) {
      if(temp < this.dataList[i].sale){
        temp = this.dataList[i].sale
    }
  }
  this.dataMax = temp
  // return temp
 },
 //找到坐标属于哪个柱子
  findPosition(e) {
    let x = e.offsetX
    let y = e.offsetY
    let data = this.positionData
    let flag = false
    for(let i = 0,len =data.length;i < len;i++) {
      if(x >= data[i].left && x <= data[i].right && y >= data[i].top && y <= data[i].buttom) {
        this.rightData = {}
        this.rightData.name = this.positionData[i].name
        this.rightData.sale = this.positionData[i].sale
        this.$forceUpdate()
        this.showMes(e)
        flag = true
      }
    }
    if(!flag) {
      let div=document.getElementById("mes")
      div.style.display = 'none'
    }
  },
  //显示信息
  showMes(e) {
    var div=document.getElementById("mes")
    let x = e.layerX+"px"
    let y = e.layerY+"px"
    let w = div.offsetWidth
    let h = div.offsetHeight
    // div.style.transform = 'translateX(' + x + 'px)'
    // div.style.transform = 'translateY(' + y + 'px)'
    if(e.offsetY + h > this.graphHeight) {
      div.style.top = e.offsetY - h+"px"
    }else {
      div.style.top = y
    }
    if(e.offsetX + w > this.graphWidth) {
      div.style.left = e.offsetX+"px"
    }else {
      div.style.left = x
    }
    
  },
 //随机颜色
  randomColor() {
      let str = '#'
      for (let i = 0; i < 3; i++) {
      let num = parseInt(256 * Math.random());
      if (num.toString(16).length === 1) {
        str += '0' + num.toString(16)
      } else {
        str += num.toString(16)
        }
      }
      return str
    },
}
}
</script>

<style>
.con {
  position: relative;
  /* height: 1000px; */
}
#mes {
  position: absolute;
  display: none;
  border-style: solid;
  white-space: nowrap;
  background-color: rgba(50, 50, 50, 0.7);
  border-width: 0px;
  border-color: rgb(51, 51, 51);
  border-radius: 4px;
  padding: 5px;
  pointer-events: none;
  color: rgb(255, 255, 255);
  font: 14px/21px sans-serif;
  left: 0;
  top: 0;
}
</style>
<template>
  <div>
    <div class="control">
      <input type="file" id="file" accept=".csv" @change="uploadfile" class="input"/>
      <Button @click="changescale">缩放</Button>
      <Button @click='changeAngle'>旋转</Button>
    </div>
    <canvas id="tutorial" width="600" height="600"></canvas> 
  </div>
</template>

<script>
import Papa from 'papaparse'
import * as R from 'ramda'
export default {
  data() {
    return {
      file:null,
      padding:'',
      width:'',
      height:'',
      xLength:'',
      maxValue:'',
      yNumber:10,
      yLength:'',
      oneVal:'',
      ctx:'',
      ctr:1,
      numctr:100,
      speed:10,
      titile:{x:'订单日期',y:'销售额'},
      mousePosition:{},
      data:[],
      // data:[{num:100},{num:200},{num:300},{num:500},{num:100},{num:800},{num:400},{num:1100},{num:900},{num:700},]
    }
  },
  mounted() {
    // this.initcanvas()
    console.log(R.add(7,10))
  },
  methods: {
    initcanvas() {
      let canvas = document.getElementById('tutorial')

      let ctx = canvas.getContext('2d')
      this.ctx = ctx
      let width = canvas.width
      this.width = width
      let height = canvas.height
      let padding = 60
      this.padding = padding
      this.height = height

      ctx.lineWidth = 1
      
      //刻度
      let yNumber = 10
      let maxValue = 0//最大值
      for(let i=0,len = this.data.length; i<len; i++){
        let barVal = this.data[i].yTitle
        if( barVal > maxValue ){
          maxValue = barVal
          this.maxValue = maxValue
        }
      }
      this.oneVal = parseInt(this.maxValue/this.yNumber)//一个刻度的值
      let yLength = Math.floor((height-(padding*2)) /yNumber)
      this.yLength = yLength
      let xLength = Math.floor((width-(padding*2)) /this.data.length)
      this.xLength = xLength



      this.drawLineLabelMarkers()
      this.drawMarkers()
      this.drawBarAnimate()





      var that = this
      ctx.save()
      // this.ctx.translate(this.width-padding,this.height-1*padding)
      canvas.addEventListener("mousemove",function(e){
        e = e || window.event
        that.mousePosition = {}
        that.mousePosition.x = e.layerX - that.padding
        that.mousePosition.y = this.height - e.layerY
        that.isIn(that.mousePosition)
        // if(that.isIn(that.mousePosition)) {
        //   this.ctx.fillText()
        // }
        // if(isIn(this.mousePosition)) {

        // }
        // clearTimeout(mouseTimer)
        // mouseTimer = setTimeout(function(){
        //   ctx.clearRect(0,0,canvas.width, canvas.height)
        //   this.drawLineLabelMarkers()
        //     (true)
        //         },10)
        })
      ctx.restore()
      var mouseTimer = null;
            
      // ctx.beginPath()
      //y
      // this.drawLine(padding + 0.5, height - padding + 0.5, padding + 0.5, padding + 0.5)
      // ctx.moveTo(padding + 0.5, height - padding + 0.5)
      // ctx.lineTo(padding + 0.5, padding + 0.5)
      // ctx.stroke()

      //x
      // ctx.moveTo(padding + 0.5, height - padding + 0.5)
      // ctx.lineTo(width - padding + 0.5, height - padding + 0.5)
      // ctx.stroke()
      // ctx.beginPath();
      // ctx.textAlign = 'center';
      // ctx.fillStyle = '#000000'
      // ctx.strokeStyle = '#000000'
      // // x轴刻度和值
      // for(let i = 0,len = this.data.length; i < len; i++) {
      //     let xAxis = this.data[i]
      //     let xlen = xLength * (i + 1)
      //     ctx.moveTo(padding + xlen, height - padding)
      //     // ctx.lineTo(padding + xlen, height - padding + 5
      //     // ctx.stroke()      
      //     ctx.save()
      //     ctx.translate(this.padding,this.height-padding)
      //     ctx.rotate(-Math.PI/2)   
      //     ctx.textAlign='right' 
      //     // ctx.fillText(xAxis, padding + xlen - xLength / 2, height - padding + 15)   // 填充文字
      //     ctx.fillText(xAxis,-2, xlen - xLength/4)
      //     ctx.restore()
      // }
      // ctx.textAlign = 'center'
      // y轴刻度和值
      
      // let oneVal = parseInt(maxValue/totalYNomber)
      // for (let i = 0; i < yNumber; i++) {
      //     // let y = yFictitious * (i + 1)
      //     let y = this.oneVal*(i+1)
      //     let ylen = yLength * (i + 1);
      //     ctx.moveTo(padding, height - padding - ylen)
      //     // ctx.stroke()
      //     ctx.fillText(y, padding - 10, height - padding - ylen + 5)
      // }
      //柱状图
      // let ctr = 1
      // let numctr = 100
      // let speed = 10
      // ctx.textAlign = 'center'
      // ctx.translate(padding,height-padding)
      // for(let i = 0,len = this.data.length;i < len;i++) {
      //   // let barH = parseInt( (height-2*padding)*this.data[i]/maxValue * ctr/numctr )
      //   let barH = parseInt( (height-2*padding)*this.data[i]/maxValue )
      //   ctx.fillStyle = this.randomColor()
      //   ctx.fillRect(xLength/4+xLength*i,-barH,xLength/2,barH)
      // }
      // this.  (ctx)
        // ctx.save()
        // ctx.fillStyle = 'red'
        // ctx.fillRect(0,0,xLength/2,100)
        // ctx.restore()
        // ctx.fillStyle = 'black'
        // ctx.fillRect(0,0,xLength/2*5,100)
    },
    getCSV(file) {
      Papa.parse(file,{
        complete: results => {
          let data = results.data
          let xIndex = this.getIndex(this.titile.x,data[0])
          let yIndex = this.getIndex(this.titile.y,data[0])
          for(let i = 0;i<this.yNumber;i++) {
            this.data[i] = {}
            this.data[i].xTitle = data[i+1][xIndex]
            this.data[i].yTitle = this.getNum(data[i+1][yIndex])
          }
          this.initcanvas()
        }
      })
    },
    uploadfile(ref) {
        let reads = new FileReader()
        let file = document.getElementById('file').files[0]
        reads.readAsText(file, 'utf-8')
        this.getCSV(file)
    },
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
    //绘制xy
    drawLineLabelMarkers() {
      //y
      this.drawLine(this.padding + 0.5, this.height - this.padding + 0.5, this.padding + 0.5, this.padding + 0.5)
      //x
      this.drawLine(this.padding + 0.5, this.height - this.padding + 0.5,this.width - this.padding + 0.5, this.height - this.padding + 0.5)
    },
    drawLine(x, y, X, Y){
      let ctx = this.ctx
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(X, Y)
      this.ctx.stroke()
      // this.ctx.closePath()
    },
    drawMarkers() {
      let ctx = this.ctx
      ctx.beginPath();
      ctx.textAlign = 'center';
      ctx.fillStyle = '#000000'
      ctx.strokeStyle = '#000000'
      // x轴刻度和值
      for(let i = 0,len = this.data.length; i < len; i++) {
          let xAxis = this.data[i].xTitle
          let xlen = this.xLength * (i + 1)
          ctx.moveTo(this.padding + xlen, this.height - this.padding)
          // ctx.lineTo(padding + xlen, height - padding + 5
          // ctx.stroke()      
          ctx.save()
          ctx.translate(this.padding,this.height-this.padding)
          ctx.rotate(-Math.PI/2)   
          ctx.textAlign='right' 
          // ctx.fillText(xAxis, padding + xlen - xLength / 2, height - padding + 15)   // 填充文字
          ctx.fillText(xAxis,-2, xlen - this.xLength/4)
          ctx.restore()
      }
      ctx.textAlign = 'center'
      // y轴刻度和值
      
      // let oneVal = parseInt(maxValue/totalYNomber)
      for (let i = 0; i < this.yNumber; i++) {
          // let y = yFictitious * (i + 1)
          let y = this.oneVal*(i+1)
          let ylen = this.yLength * (i + 1);
          ctx.moveTo(this.padding, this.height - this.padding - ylen)
          // ctx.stroke()
          ctx.fillText(y, this.padding - 10, this.height - this.padding - ylen + 5)
      }
      // for (let i = 0; i < yNumber; i++) {
      //     // let y = yFictitious * (i + 1)
      //     let y = oneVal*(i+1)
      //     let ylen = yLength * (i + 1);
      //     ctx.moveTo(this.padding, height - padding - ylen)
      //     // ctx.stroke()
      //     ctx.fillText(y, padding - 10, height - padding - ylen + 5)
      // }
    },
    drawBarAnimate() {
      let ctx = this.ctx
      ctx.clearRect(0,0,this.width, this.height)
      this.drawLineLabelMarkers()
      this.drawMarkers()
      ctx.save()
      ctx.textAlign = 'left'
      ctx.translate(this.padding,this.height-this.padding)
      for(let i = 0,len = this.data.length;i < len;i++) {
        let barH = parseInt( (this.height-2*this.padding)*this.data[i].yTitle/this.maxValue* this.ctr/this.numctr )
        ctx.fillStyle = this.randomColor(i)
        ctx.fillRect(this.xLength/2+this.xLength*i,-barH,this.xLength/2,barH)
        ctx.fillText(this.data[i].yTitle* this.ctr/this.numctr, this.xLength/4+this.xLength*i+12,-barH-3)
        this.data[i].left = this.xLength/2+this.xLength*i
        this.data[i].top = barH
        this.data[i].right = this.xLength+this.xLength*i
        this.data[i].bottom = 0
      }
      ctx.restore()
      if(this.ctr < this.numctr) {
        this.ctr = this.ctr + 1
        let that = this
        setTimeout(() => {
          this.ctx.restore()
          requestAnimationFrame(this.drawBarAnimate)
        }, this.speed)
      }else {
        return
      }
    },
    getIndex(title,data) {
      for(let i = 0,len = data.length;i<len;i++) {
        if(data[i] == title) return i
      }
    },
    getNum(str) {
      return parseInt(str.replace(/[^0-9]/ig,""))
    },
    isIn({x,y}) {
      if(x < 0 || y < 0) return 
      for(let i = 0,len = this.data.length;i < len;i++) {
        if(this.data[i].left<=x && this.data[i].right>=x && y<= this.data[i].top) {
          // this.ctx.clearRect(0,0,this.width,this.height)
          // this.initcanvas()
          this.ctx.fillStyle = 'rgba(255,165,0,0.5)'
          this.ctx.fillRect(x,y,100,100)
        }
      }
    },
    changeAngle() {
      // let canvas = document.getElementById('tutorial')

      // let ctx = canvas.getContext('2d')
      let ctx = this.ctx
      ctx.clearRect(0,0,this.width,this.height)
      ctx.translate(this.width,0)
      ctx.rotate(Math.PI / 2)
      this.initcanvas()

    },
    changescale() {
      let ctx = this.ctx
      ctx.clearRect(0,0,this.width,this.height)
      ctx.scale(0.5,0.5)
      this.initcanvas()
    }
  }
}
</script>

<style>
/* .input {
  display: block;
} */
</style>
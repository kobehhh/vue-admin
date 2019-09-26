<template>
  <div>
    <canvas id="tutorial" width="600" accept=".csv" height="500"></canvas> 
    <!-- <Upload action="//jsonplaceholder.typicode.com/posts/" @before-upload="say">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload> -->
    <input type="file" id="file" accept=".csv" onchange="uploadfile" />
  </div>
</template>

<script>
import Papa from 'papaparse'
export default {
  data() {
    return {
      file:null,
      data:[1,2,3,4,5,6,7]
    }
  },
  mounted() {
    // this.initcanvas()
    // this.uploadfile()
    // this.getCSV()
  },
  methods: {
    say(){
      console.log(1)
    },
    initcanvas() {
      let canvas = document.getElementById('tutorial')

      let ctx = canvas.getContext('2d')
      let width = canvas.width
      let height = canvas.height
      let padding = 50

      ctx.beginPath();
      ctx.lineWidth = 1;
      //y
      ctx.moveTo(padding + 0.5, height - padding + 0.5);
      ctx.lineTo(padding + 0.5, padding + 0.5);
      ctx.stroke();
      //x
      ctx.moveTo(padding + 0.5, height - padding + 0.5);
      ctx.lineTo(width - padding + 0.5, height - padding + 0.5);
      ctx.stroke();
      //刻度
      let yNumber = 5
      let yLength = Math.floor((height-(padding*2)) /yNumber)
      let xLength = Math.floor((width-(padding*2)) /this.data.length)
      console.log(yLength,xLength)
      ctx.beginPath();
      // ctx.textAlign = 'center';
      ctx.fillStyle = '#000000';
      ctx.strokeStyle = '#000000';
      // x轴刻度和值
      for(var i = 0,len = this.data.length; i < len; i++) {
          let xAxis = this.data[i];
          let xlen = xLength * (i + 1);
          ctx.moveTo(padding + xlen, height - padding);
          // ctx.lineTo(padding + xlen, height - padding + 5);
          ctx.stroke();                                       // 画轴线上的刻度
          ctx.fillText(xAxis, padding + xlen - xLength / 2, height - padding + 15);   // 填充文字
      }
      // y轴刻度和值
      for (let i = 0; i < yNumber; i++) {
          // let y = yFictitious * (i + 1);
          let y = (i + 1) * 100
          let ylen = yLength * (i + 1);
          ctx.moveTo(padding, height - padding - ylen);
          // ctx.lineTo(padding - 5, height - padding - ylen);
          // ctx.stroke();
          ctx.fillText(y, padding - 10, height - padding - ylen + 5);
      }
    },

    getCSV(file) {
      Papa.parse('./超市.csv',{
        download: true,
        complete: results => {
          console.log(results);
          // let inventoryRequests = results.data;
        }
      })
    },
    uploadfile() {
      console.log(1)
        // let reads = new FileReader();
        // let file = document.getElementById('file').files[0];
        // reads.readAsText(file, 'utf-8');
        // reads.onload = function (e) {
        //     console.log(e)
        //     // document.getElementById('result').innerText = this.result
        //     document.getElementById('result').innerText = e.target.result
        // }
        // reads.onloadstart = function(e) {
        //     console.log('onloadstart ---> ', e)
        // }
        // reads.onloadend = function(e) {
        //     console.log('onloadend ---> ', e)
        // }
        // reads.onprogress = function(e) {
        //     console.log('onprogress ---> ', e)
        // }
    }
  }
}

</script>

<style>

</style>
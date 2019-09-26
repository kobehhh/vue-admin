<template>
    <canvas id="tutorial" width="300" height="300"></canvas>  
</template>

<script>
export default {
  data() {
    return {
      // sun:null,
      // earth:null,
      // moon:null,
      ctx:null
    }
  },
  mounted() {
    this.initCavans()
  },
  methods: {
    initCavans() {
      const sun = new Image();
      const earth = new Image();
      const moon = new Image(); 
      const canvas = document.getElementById('tutorial')
      //获得 2d 上下文对象
      // sun.src = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3945696032,4265863540&fm=26&gp=0.jpg";
      // earth.src = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319196103,2510865082&fm=26&gp=0.jpg";
      // moon.src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=235508888,990602741&fm=26&gp=0.jpg";
      this.ctx = canvas.getContext('2d')
      setInterval(this.draw,10)
      // this.draw()
    },
    draw() {
    this.ctx.clearRect(0, 0, 300, 300); //清空所有的内容
    /*绘制 太阳*/
 
    this.ctx.save();
    this.ctx.translate(150, 150);
 
    //绘制earth轨道
    this.ctx.beginPath()
    this.ctx.strokeStyle = "black";
    this.ctx.arc(0, 0, 100, 0, 2 * Math.PI)
    this.ctx.stroke()
 
    let time = new Date()
    //绘制地球
    this.ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
    this.ctx.translate(100, 0)
    this.ctx.beginPath()
    this.ctx.strokeStyle = "black"
    this.ctx.arc(0, 0, 40, 0, 2 * Math.PI)
    this.ctx.stroke()
 
    //绘制月球轨道
    
    //绘制月球
    this.ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds())
    this.ctx.translate(40, 0)
    this.ctx.beginPath()
    this.ctx.strokeStyle = "black"
    this.ctx.arc(0, 0, 20, 0, 2 * Math.PI)
    this.ctx.stroke()
    this.ctx.restore()


    // requestAnimationFrame(this.draw)
}
  }
}
</script>

<style>

</style>
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
      // ctx:null
    }
  },
  mounted() {
    this.initCavans()
  },
  methods: {
    initCavans() {
      let sun, earth,moon
      const canvas = document.getElementById('tutorial')
      //获得 2d 上下文对象
      sun = new Image();
      earth = new Image();
      moon = new Image();
      sun.src = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3945696032,4265863540&fm=26&gp=0.jpg";
      earth.src = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319196103,2510865082&fm=26&gp=0.jpg";
      moon.src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=235508888,990602741&fm=26&gp=0.jpg";
      let ctx = canvas.getContext('2d')
      this.draw(sun,earth,moon,ctx)
    },
    draw(sun,earth,moon,ctx) {
    ctx.clearRect(0, 0, 300, 300); //清空所有的内容
    /*绘制 太阳*/
    ctx.drawImage(sun, 0, 0, 300, 300);
 
    ctx.save();
    ctx.translate(150, 150);
 
    //绘制earth轨道
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,0,0.5)";
    ctx.arc(0, 0, 100, 0, 2 * Math.PI)
    ctx.stroke()
 
    let time = new Date();
    //绘制地球
    ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
    ctx.translate(100, 0);
    ctx.drawImage(earth, -12, -12)
 
    //绘制月球轨道
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,255,255,.3)";
    ctx.arc(0, 0, 40, 0, 2 * Math.PI);
    ctx.stroke();
 
    //绘制月球
    ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
    ctx.translate(40, 0);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();
 
    requestAnimationFrame(draw);
}
  }
}
</script>

<style>

</style>
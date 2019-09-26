<template>
  <div>
    <canvas id="tutorial" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.initCavans()
  },
  methods: {
    initCavans() {
      let sun,earth,moon
      const canvas = document.getElementById('tutorial')
      //获得 2d 上下文对象
      let ctx = canvas.getContext('2d')


      // ctx.fillStyle = "rgb(200,0,0)";
      // //绘制矩形
      // ctx.fillRect (10, 10, 55, 50);
      // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      // ctx.fillRect (30, 30, 55, 50);


      // ctx.fillRect(10, 10, 100, 50);     // 绘制矩形，填充的默认颜色为黑色
      // ctx.strokeRect(10, 70, 100, 50);
      // ctx.clearRect(15, 15, 50, 25);

      //绘制线段
      // ctx.beginPath(); //新建一条path
      // ctx.moveTo(50, 50); //把画笔移动到指定的坐标
      // ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
      // //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
      // ctx.closePath();
      // ctx.stroke(); //绘制路径。

      //绘制三角形
      // ctx.beginPath();
      // ctx.moveTo(50, 50);
      // ctx.lineTo(200, 50);
      // ctx.lineTo(200, 200);
      // ctx.closePath(); //虽然我们只绘制了两条线段，但是closePath会closePath，仍然是一个3角形
      // ctx.stroke(); //描边。stroke不会自动closePath()
      
      
      // 绘制圆弧
      // ctx.beginPath()
      // ctx.arc(50, 50, 40,0, -Math.PI / 2, true)
      // ctx.stroke()



      // 贝塞尔曲线
      // ctx.beginPath();
      // ctx.moveTo(10, 150); //起始点
      // let cp1x = 40, cp1y = 100;  //控制点
      // let x = 200, y = 200; // 结束点
      // //绘制二次贝塞尔曲线
      // ctx.quadraticCurveTo(cp1x, cp1y, x, y);
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.rect(10, 200, 10, 10);
      // ctx.rect(cp1x, cp1y, 10, 10);
      // ctx.rect(x, y, 10, 10);
      // ctx.fill();


    // fillStyle
    // for (var i = 0; i < 60; i++){
    //   for (var j = 0; j < 60; j++){
    //     ctx.fillStyle = 'rgb(' + Math.floor(255 - 4.25 * i) + ',' +
    //     Math.floor(255 - 4.25 * j) + ',0)';
    //     ctx.fillRect(j * 5, i * 5, 5, 5);
    //     }
    //   }

    //  strokeStyle
      // for (var i = 0; i < 6; i++){
      //   for (var j = 0; j < 6; j++){
      //       ctx.strokeStyle = 'red';
      //       ctx.strokeRect(j * 50, i * 50, 40, 40);
      //   }
      // }
      // ctx.strokeRect(0, 0, 300, 300);

      // ctx.lineWidth = 20
      // ctx.beginPath();
      //   ctx.moveTo(50, 50 + 1 * 50);
      //   ctx.lineTo(100, 100 + 1 * 50);
      //   ctx.lineTo(150, 50 + 1 * 50);
      //   ctx.lineTo(200, 100 + 1 * 50);
      //   ctx.lineTo(250, 50 + 1 * 50);
      //   ctx.stroke();

      //  虚线
      // ctx.setLineDash([20, 5]);  // [实线长度, 间隙长度]
      // ctx.lineDashOffset = -0;
      // ctx.strokeRect(50, 50, 210, 210);

      //绘制文本
      // ctx.font = "20px sans-serif"
      // ctx.fillText("天若有情", 10, 100);
      // ctx.strokeText("天若有情", 10, 200)


      // ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
      // ctx.save();                  // 保存默认状态
 
      // ctx.fillStyle = 'red'       // 在原有配置基础上对颜色做改变
      // ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
 
      // ctx.save();                // 保存当前状态
      // ctx.fillStyle = '#FFF'       // 再次改变颜色配置
      // ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形
 
      // ctx.restore();               // 重新加载之前的颜色状态
      // ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形
 
    // ctx.restore();               // 加载默认颜色配置
    // ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
    
    // 变形
    //translate
    // ctx.save(); //保存坐原点平移之前的状态
    // ctx.translate(100, 100);
    // ctx.strokeRect(0, 0, 100, 100)
    // ctx.restore(); //恢复到最初状态
    // ctx.translate(0, 0);
    // ctx.fillRect(0, 0, 100, 100)


      //rotate
      // ctx.fillStyle = "red";
      // ctx.save();
 
      // ctx.translate(100, 100);
      // ctx.rotate(Math.PI / 180 * 45);
      // ctx.fillStyle = "blue";
      // ctx.fillRect(0, 0, 100, 100);
      // ctx.restore();
 
      // ctx.save();
      // ctx.translate(0, 0);
      // ctx.fillRect(0, 0, 50, 50)
      // ctx.scale(0.5,0.5)
      // ctx.restore();


      //合成
      // ctx.fillStyle = "blue";
      // ctx.fillRect(0, 0, 200, 200);
 
      // ctx.globalCompositeOperation = "source-in"; //全局合成操作
      // ctx.fillRect(100, 100, 200, 200);

      //剪裁路径
      // ctx.beginPath();
      // ctx.arc(20,20, 100, 0, Math.PI * 2);
      // // ctx.clip();
 
      // ctx.fillStyle = "pink";
      // ctx.fillRect(20, 20, 100,100);


      // this.draw()
    },
  },
}
</script>

<style>

</style>
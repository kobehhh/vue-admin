<template>
  <div>
    <input type="text" id="mes" >
    <button @click="sendMes" id="sendMes">123</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.initSocket()
  },
  // sockets: {
  //       connect: function () {
  //           console.log('socket connected')
  //       },
  //       customEmit: function (data) {
  //           console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  //       }
  //   },
  methods:{
    initSocket() {
      this.$socket.on('enter',function(data) {
        console.log(data)
      // showMes(data,'enter')
      })
      this.$socket.on('leave',function(data) {
        console.log(data)
      // showMes(data,'leave')
      })
      this.$socket.on('message',function(data) {
      console.log(data)
      // showMes(data,'message')
      })
    },
    sendMes() {
      var txt = document.getElementById('mes').value
      this.$socket.emit('message',txt)
    }
  }
}
</script>

<style>

</style>
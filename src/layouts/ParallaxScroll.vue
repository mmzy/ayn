<template>
  <div class="container">
    <div class="img1">aadssdfsaaaaaaaaaaaaa</div>
    <div class="img2">bbbbbbbbbbbbb</div>
    <div class="txt3">路口监控cccccccccccccc</div>
    <div class="txt4">哈哈哈哈或ddddddddddddd</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  left: 25vw;
  width: 30vw;
  height: 80vh;
  overflow-x: auto;
  overflow-y: hidden;
  perspective: 1px;
  background-color: pink;
  div {
    position: relative;
    width: 90vw;
    height: 5vh;
  }
  .img1 {
    border: solid 1px red;
    transform: translateZ(-1px) scale(2); //变慢两倍
  }
  .img2 {
    border: solid 1px black;
    transform: translateZ(-2px) scale(3); //变慢三倍
  }
  .txt3 {
    top: 25vh;
    border: solid 1px green;
    transform: translateZ(0.5px) scale(0.5); //变快两倍
  }
   .txt4 {
    top: 30vh;
    background-color: yellow;
  }
}
</style>
